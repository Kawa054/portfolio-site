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
        panel.classList.toggle('hidden', panel.dataset.tabPanel !== selected)
      })

      if (updateUrl && tabParam) {
        const url = new URL(window.location.href)
        url.searchParams.set(tabParam, selected)
        history.replaceState({}, '', `${url.pathname}${url.search}`)
      }

      typesetMath()
    }

    buttons.forEach((button) => {
      if (button.dataset.tabBound === 'true') return
      button.dataset.tabBound = 'true'
      button.addEventListener('click', () => {
        const selected = button.dataset.tabButton
        if (selected) selectTab(selected, true)
      })
    })

    if (tabParam) {
      const selected = new URLSearchParams(window.location.search).get(tabParam)
      if (selected && Array.from(buttons).some((button) => button.dataset.tabButton === selected)) {
        selectTab(selected)
        if (window.location.hash === '#content') {
          window.requestAnimationFrame(() => scrollToLegacyContentTop('auto'))
        }
      }
    }
  })
}

