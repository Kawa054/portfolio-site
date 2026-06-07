import { createClient } from '@supabase/supabase-js'

type RuntimeEnv = {
  PUBLIC_SUPABASE_URL?: string
  SUPABASE_SERVICE_ROLE_KEY?: string
  ADMIN_EMAILS?: string
}

type PagesContext = {
  request: Request
  env: RuntimeEnv
}

type VisitRow = {
  created_at: string
  path: string
  referrer: string | null
  language: string | null
  screen: string | null
  user_agent: string | null
  visitor_hash: string
}

const topCounts = (rows: VisitRow[], key: keyof Pick<VisitRow, 'path' | 'referrer'>) => {
  const counts = new Map<string, number>()
  rows.forEach((row) => {
    const value = row[key] || '(direct)'
    counts.set(value, (counts.get(value) || 0) + 1)
  })
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([itemKey, count]) => ({ key: itemKey, count }))
}

export const onRequestGet = async ({ request, env }: PagesContext) => {
  const supabaseUrl = env.PUBLIC_SUPABASE_URL
  const serviceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    return Response.json({ error: 'Supabase server environment is not configured.' }, { status: 500 })
  }

  const token = request.headers.get('authorization')?.replace(/^Bearer\s+/i, '')
  if (!token) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false
    }
  })

  const { data: authData, error: authError } = await supabase.auth.getUser(token)
  const email = authData.user?.email || ''
  const adminEmails = (env.ADMIN_EMAILS || '').split(',').map((item) => item.trim().toLowerCase()).filter(Boolean)

  if (authError || !email || !adminEmails.includes(email.toLowerCase())) {
    return Response.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { data, error } = await supabase
    .from('visits')
    .select('created_at,path,referrer,language,screen,user_agent,visitor_hash')
    .order('created_at', { ascending: false })
    .limit(1000)

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  const rows = (data || []) as VisitRow[]
  const todayKey = new Date().toISOString().slice(0, 10)
  const today = rows.filter((row) => row.created_at.slice(0, 10) === todayKey).length
  const visitors = new Set(rows.map((row) => row.visitor_hash)).size

  return Response.json({
    total: rows.length,
    today,
    visitors,
    rowsLoaded: rows.length,
    pages: topCounts(rows, 'path'),
    referrers: topCounts(rows, 'referrer'),
    recent: rows.slice(0, 80).map(({ created_at, path, referrer, language, screen }) => ({
      created_at,
      path,
      referrer,
      language,
      screen
    }))
  })
}
