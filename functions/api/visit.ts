import { createClient } from '@supabase/supabase-js'

type RuntimeEnv = {
  ANALYTICS_SALT?: string
  PUBLIC_SUPABASE_URL?: string
  SUPABASE_SERVICE_ROLE_KEY?: string
  PUBLIC_ANALYTICS_ENABLED?: string
}

type VisitBody = {
  path?: string
  referrer?: string | null
  language?: string
  screen?: string
}

type PagesContext = {
  request: Request & {
    cf?: {
      country?: string | null
      region?: string | null
      city?: string | null
      asn?: number | null
      asOrganization?: string | null
      colo?: string | null
    }
  }
  env: RuntimeEnv
}

const trimValue = (value: unknown, maxLength: number) => {
  if (typeof value !== 'string') {
    return null
  }

  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed.slice(0, maxLength) : null
}

const hashVisitor = async (value: string, salt: string) => {
  const day = new Date().toISOString().slice(0, 10)
  const input = new TextEncoder().encode(`${day}:${salt}:${value}`)
  const digest = await crypto.subtle.digest('SHA-256', input)
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('')
}

const trimNullable = (value: unknown, maxLength: number) => {
  if (typeof value !== 'string') {
    return null
  }

  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed.slice(0, maxLength) : null
}

export const onRequestPost = async ({ request, env }: PagesContext) => {
  const supabaseUrl = env.PUBLIC_SUPABASE_URL
  const serviceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey || env.PUBLIC_ANALYTICS_ENABLED === 'false') {
    return Response.json({ ok: true, stored: false })
  }

  const body = await request.json().catch(() => ({} as VisitBody))
  const ip = request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  const userAgent = request.headers.get('user-agent') || 'unknown'
  const visitorHash = await hashVisitor(`${ip}:${userAgent}`, env.ANALYTICS_SALT || 'portfolio')
  const cf = request.cf || {}
  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false
    }
  })

  const visitRow = {
    visitor_hash: visitorHash,
    path: trimValue(body.path, 180) || '/',
    referrer: trimValue(body.referrer, 500),
    language: trimValue(body.language, 40),
    screen: trimValue(body.screen, 40),
    user_agent: userAgent.slice(0, 500),
    country: trimNullable(cf.country, 8),
    region: trimNullable(cf.region, 80),
    city: trimNullable(cf.city, 80),
    asn: typeof cf.asn === 'number' ? cf.asn : null,
    as_organization: trimNullable(cf.asOrganization, 160),
    colo: trimNullable(cf.colo, 8)
  }

  const { error } = await supabase.from('visits').insert(visitRow)

  if (error) {
    const fallbackRow = {
      visitor_hash: visitRow.visitor_hash,
      path: visitRow.path,
      referrer: visitRow.referrer,
      language: visitRow.language,
      screen: visitRow.screen,
      user_agent: visitRow.user_agent
    }
    const { error: fallbackError } = await supabase.from('visits').insert(fallbackRow)

    if (fallbackError) {
      return Response.json({ ok: false, stored: false }, { status: 500 })
    }

    return Response.json({ ok: true, stored: true, geoStored: false })
  }

  return Response.json({ ok: true, stored: true, geoStored: true })
}
