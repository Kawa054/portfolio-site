export const getLegacyContentTop = () => {
  const zoomValue = (window.outerWidth - 16) / window.innerWidth
  return Math.max(0, window.innerHeight - 90 * zoomValue)
}

export const scrollToLegacyContentTop = (behavior: ScrollBehavior = 'auto') => {
  window.scrollTo({ top: getLegacyContentTop(), left: 0, behavior })
}

export const updateActiveNav = (pathname: string) => {
  document.querySelectorAll<HTMLAnchorElement>('[data-nav-to]').forEach((link) => {
    link.classList.toggle('text-cyan-300', link.dataset.navTo === pathname)
  })
}

type MathJaxWindow = typeof window & {
  MathJax?: {
    loader?: {
      load: string[]
    }
    tex?: {
      inlineMath: string[][]
      displayMath: string[][]
      packages: Record<string, string[]>
    }
    typesetPromise?: (nodes?: Element[]) => Promise<void>
  }
}

let mathJaxLoad: Promise<void> | null = null
let mathTypesetQueue = Promise.resolve()

const ensureMathJax = () => {
  const mathWindow = window as MathJaxWindow
  if (mathWindow.MathJax?.typesetPromise) return Promise.resolve()
  if (mathJaxLoad) return mathJaxLoad

  mathWindow.MathJax = {
    loader: {
      load: ['[tex]/boldsymbol']
    },
    tex: {
      inlineMath: [['\\(', '\\)']],
      displayMath: [['\\[', '\\]']],
      packages: { '[+]': ['boldsymbol'] }
    }
  }

  mathJaxLoad = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.id = 'MathJax-script'
    script.async = true
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js'
    script.addEventListener('load', () => resolve(), { once: true })
    script.addEventListener('error', () => reject(new Error('MathJax failed to load')), { once: true })
    document.head.append(script)
  })

  return mathJaxLoad
}

export const typesetMath = () => {
  const pageContent = document.querySelector<HTMLElement>('#page-content')
  if (!pageContent) return

  const activePanels = Array.from(
    pageContent.querySelectorAll<HTMLElement>('[data-tab-panel]:not(.hidden)')
  )
  const targets = activePanels.length > 0 ? activePanels : [pageContent]
  if (!targets.some((target) => /\\\(|\\\[/.test(target.textContent ?? ''))) return

  mathTypesetQueue = mathTypesetQueue
    .then(ensureMathJax)
    .then(() => {
      const unprocessedTargets = targets.filter((target) => /\\\(|\\\[/.test(target.textContent ?? ''))
      if (unprocessedTargets.length === 0) return
      return (window as MathJaxWindow).MathJax?.typesetPromise?.(unprocessedTargets)
    })
    .catch(() => undefined)
}
