import { scrollToLegacyContentTop, typesetMath } from './page'

export const bindPortfolioTabs = () => {
  document.querySelectorAll<HTMLElement>('[data-tab-root]').forEach((root) => {
    const buttons = root.querySelectorAll<HTMLButtonElement>('[data-tab-button]')
    const panels = root.querySelectorAll<HTMLElement>('[data-tab-panel]')
    const tabParam = root.dataset.tabParam

    const selectTab = (selected: string, updateUrl = false) => {
      buttons.forEach((item) => {
        const active = item.dataset.tabButton === selected
        if (!item.closest('.section-side-nav') && !item.closest('.works-side-nav')) {
          item.classList.toggle('text-[#ee7800]', active)
        }
        item.classList.toggle('is-active', active)
      })
      panels.forEach((panel) => {
        const active = panel.dataset.tabPanel === selected
        panel.classList.toggle('hidden', !active)
        if (active) {
          panel.querySelectorAll<HTMLIFrameElement>('iframe[data-video-src]:not([src])').forEach((frame) => {
            const source = frame.dataset.videoSrc
            if (source) frame.src = source
          })
        }
      })

      if (updateUrl && tabParam) {
        const url = new URL(window.location.href)
        url.searchParams.set(tabParam, selected)
        history.replaceState({}, '', `${url.pathname}${url.search}`)
      }

      typesetMath()
      window.requestAnimationFrame(() => {
        document.dispatchEvent(new CustomEvent('portfolio:tab-change'))
      })
    }

    buttons.forEach((button) => {
      if (button.dataset.tabBound === 'true') return
      button.dataset.tabBound = 'true'
      button.addEventListener('click', () => {
        const selected = button.dataset.tabButton
        if (selected) selectTab(selected, true)
      })
    })

    const requestedTab = tabParam ? new URLSearchParams(window.location.search).get(tabParam) : null
    const selected = requestedTab && Array.from(buttons).some((button) => button.dataset.tabButton === requestedTab)
      ? requestedTab
      : Array.from(buttons).find((button) => button.classList.contains('is-active'))?.dataset.tabButton

    if (selected) {
      selectTab(selected)
      if (window.location.hash === '#content') {
        window.requestAnimationFrame(() => scrollToLegacyContentTop('auto'))
      }
    }
  })
}
