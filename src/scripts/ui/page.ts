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

export const typesetMath = () => {
  const mathJax = (window as typeof window & { MathJax?: { typesetPromise?: (nodes?: Element[]) => Promise<void> } }).MathJax
  const pageContent = document.querySelector<HTMLElement>('#page-content')
  if (mathJax?.typesetPromise && pageContent) {
    mathJax.typesetPromise([pageContent]).catch(() => undefined)
  }
}

