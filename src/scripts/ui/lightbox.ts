export const bindImageLightbox = () => {
  const lightbox = document.querySelector<HTMLElement>('[data-lightbox]')
  const lightboxImage = document.querySelector<HTMLImageElement>('[data-lightbox-target]')
  const closeButton = document.querySelector<HTMLButtonElement>('[data-lightbox-close]')

  if (!lightbox || !lightboxImage || !closeButton) {
    return
  }

  let closeTimer: number | undefined
  let lightboxScale = 1
  let lightboxX = 0
  let lightboxY = 0
  let isDraggingLightbox = false
  let dragStartX = 0
  let dragStartY = 0
  let dragBaseX = 0
  let dragBaseY = 0

  const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

  const clampLightboxPosition = () => {
    if (lightboxScale <= 1) {
      lightboxX = 0
      lightboxY = 0
      return
    }

    const rect = lightboxImage.getBoundingClientRect()
    const baseWidth = rect.width / lightboxScale
    const baseHeight = rect.height / lightboxScale
    const scaledWidth = baseWidth * lightboxScale
    const scaledHeight = baseHeight * lightboxScale
    const maxX = Math.max(0, (scaledWidth - window.innerWidth + 64) / 2)
    const maxY = Math.max(0, (scaledHeight - window.innerHeight + 64) / 2)
    lightboxX = clamp(lightboxX, -maxX, maxX)
    lightboxY = clamp(lightboxY, -maxY, maxY)
  }

  const updateLightboxTransform = () => {
    clampLightboxPosition()
    lightboxImage.style.setProperty('--lightbox-scale', String(lightboxScale))
    lightboxImage.style.setProperty('--lightbox-x', `${lightboxX}px`)
    lightboxImage.style.setProperty('--lightbox-y', `${lightboxY}px`)
    lightboxImage.classList.toggle('is-zoomed', lightboxScale > 1.02)
  }

  const resetLightboxTransform = () => {
    lightboxScale = 1
    lightboxX = 0
    lightboxY = 0
    isDraggingLightbox = false
    lightboxImage.classList.remove('is-dragging', 'is-zoomed')
    updateLightboxTransform()
  }

  const closeLightbox = () => {
    if (lightbox.hidden) return
    lightbox.classList.remove('is-open')
    closeTimer = window.setTimeout(() => {
      lightbox.hidden = true
      lightboxImage.removeAttribute('src')
      lightboxImage.alt = ''
      resetLightboxTransform()
      document.documentElement.classList.remove('lightbox-open')
    }, 180)
  }

  const openLightbox = (image: HTMLImageElement) => {
    if (closeTimer) {
      window.clearTimeout(closeTimer)
      closeTimer = undefined
    }
    lightboxImage.src = image.currentSrc || image.src
    lightboxImage.alt = image.alt || '拡大画像'
    resetLightboxTransform()
    lightbox.hidden = false
    document.documentElement.classList.add('lightbox-open')
    window.requestAnimationFrame(() => {
      lightbox.classList.add('is-open')
    })
    closeButton.focus()
  }

  lightbox.addEventListener('wheel', (event) => {
    if (lightbox.hidden) return
    event.preventDefault()

    const previousScale = lightboxScale
    const nextScale = clamp(lightboxScale * (event.deltaY < 0 ? 1.16 : 1 / 1.16), 1, 5)
    if (nextScale === previousScale) return

    const rect = lightboxImage.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const ratio = nextScale / previousScale
    lightboxX += (event.clientX - centerX) * (1 - ratio)
    lightboxY += (event.clientY - centerY) * (1 - ratio)
    lightboxScale = nextScale
    updateLightboxTransform()
  }, { passive: false })

  lightboxImage.addEventListener('pointerdown', (event) => {
    if (lightboxScale <= 1.02) return
    event.preventDefault()
    isDraggingLightbox = true
    dragStartX = event.clientX
    dragStartY = event.clientY
    dragBaseX = lightboxX
    dragBaseY = lightboxY
    lightboxImage.classList.add('is-dragging')
    lightboxImage.setPointerCapture(event.pointerId)
  })

  lightboxImage.addEventListener('pointermove', (event) => {
    if (!isDraggingLightbox) return
    lightboxX = dragBaseX + event.clientX - dragStartX
    lightboxY = dragBaseY + event.clientY - dragStartY
    updateLightboxTransform()
  })

  lightboxImage.addEventListener('pointerup', (event) => {
    if (!isDraggingLightbox) return
    isDraggingLightbox = false
    lightboxImage.classList.remove('is-dragging')
    lightboxImage.releasePointerCapture(event.pointerId)
  })

  lightboxImage.addEventListener('dblclick', () => {
    resetLightboxTransform()
  })

  document.addEventListener('click', (event) => {
    const target = event.target
    if (!(target instanceof Element)) {
      return
    }

    const image = target.closest<HTMLImageElement>('[data-lightbox-image]')
    if (image) {
      openLightbox(image)
      return
    }

    if (target.closest('[data-lightbox-close]') || target === lightbox) {
      closeLightbox()
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !lightbox.hidden) {
      closeLightbox()
    }
  })
}

