export const bindInfoModal = () => {
  const modal = document.querySelector<HTMLElement>('[data-info-modal]')
  const title = document.querySelector<HTMLElement>('[data-info-modal-title]')
  const description = document.querySelector<HTMLElement>('[data-info-modal-description]')
  const image = document.querySelector<HTMLImageElement>('[data-info-modal-image]')
  const closeButton = document.querySelector<HTMLButtonElement>('[data-info-modal-close]')

  if (!modal || !title || !description || !image || !closeButton) {
    return
  }

  const closeInfoModal = () => {
    if (modal.hidden) return
    modal.classList.remove('is-open')
    window.setTimeout(() => {
      modal.hidden = true
      title.textContent = ''
      description.textContent = ''
      image.removeAttribute('src')
      image.alt = ''
      document.documentElement.classList.remove('modal-open')
    }, 170)
  }

  const openInfoModal = (trigger: HTMLElement) => {
    title.textContent = trigger.dataset.infoTitle || ''
    description.textContent = trigger.dataset.infoDescription || ''
    image.src = trigger.dataset.infoImage || ''
    image.alt = trigger.dataset.infoTitle || ''
    modal.hidden = false
    document.documentElement.classList.add('modal-open')
    window.requestAnimationFrame(() => {
      modal.classList.add('is-open')
    })
    closeButton.focus()
  }

  document.addEventListener('click', (event) => {
    const target = event.target
    if (!(target instanceof Element)) return

    const trigger = target.closest<HTMLElement>('[data-info-card]')
    if (trigger) {
      openInfoModal(trigger)
      return
    }

    if (target.closest('[data-info-modal-close]') || target === modal) {
      closeInfoModal()
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) {
      closeInfoModal()
    }
  })
}

