import { bindImageLightbox } from './lightbox'
import { bindInfoModal } from './info-modal'
import { getLegacyContentTop, scrollToLegacyContentTop, typesetMath, updateActiveNav } from './page'
import { bindPortfolioTabs } from './tabs'
import { bindStandardMapExperiments } from '../standard-map-experiment'

const replacePageContent = async (url: URL, keepScroll: boolean, pushHistory = true) => {
  const response = await fetch(url.pathname)
  if (!response.ok) {
    window.location.href = url.pathname
    return
  }

  const html = await response.text()
  const nextDocument = new DOMParser().parseFromString(html, 'text/html')
  const nextContent = nextDocument.querySelector<HTMLElement>('#page-content')
  const currentContent = document.querySelector<HTMLElement>('#page-content')

  if (!nextContent || !currentContent) {
    window.location.href = url.pathname
    return
  }

  currentContent.replaceWith(nextContent)
  document.title = nextDocument.title
  if (pushHistory) {
    history.pushState({}, '', url.pathname)
  }
  updateActiveNav(url.pathname)
  bindPortfolioTabs()
  bindStandardMapExperiments()
  typesetMath()

  if (keepScroll) {
    scrollToLegacyContentTop('auto')
    return
  }

  scrollToLegacyContentTop('smooth')
}

const bindPortfolioNav = () => {
  bindPortfolioTabs()
  bindStandardMapExperiments()
  bindImageLightbox()
  bindInfoModal()
  document.querySelectorAll<HTMLAnchorElement>('[data-scroll-content]').forEach((link) => {
    if (link.dataset.scrollBound === 'true') return
    link.dataset.scrollBound = 'true'
    link.addEventListener('click', (event) => {
      const url = new URL(link.href)
      if (url.origin !== window.location.origin) {
        return
      }

      const atContentHeight = window.scrollY >= getLegacyContentTop() - 8
      const stateIndex = Number(link.dataset.heroState || 0)
      window.dispatchEvent(new CustomEvent('portfolio:hero-state', { detail: stateIndex }))

      if (url.pathname === window.location.pathname) {
        event.preventDefault()
        if (!atContentHeight) {
          scrollToLegacyContentTop('smooth')
        }
        return
      }

      event.preventDefault()
      replacePageContent(url, atContentHeight).catch(() => {
        window.location.href = url.pathname
      })
    })
  })
}

export const initPortfolioNavigation = () => {
  bindPortfolioNav()
  window.addEventListener('popstate', () => {
    const url = new URL(window.location.href)
    replacePageContent(url, true, false).catch(() => window.location.reload())
  })
}
