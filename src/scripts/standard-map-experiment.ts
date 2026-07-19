import { drawPhasePortrait, type RenderQuality } from './standard-map-renderer'

type ExperimentElements = {
  stage: HTMLElement
  canvas: HTMLCanvasElement
  epsilonInput: HTMLInputElement
  epsilonOutput: HTMLOutputElement
  presetButtons: HTMLButtonElement[]
}

const getElements = (root: HTMLElement): ExperimentElements | null => {
  const stage = root.querySelector<HTMLElement>('[data-standard-map-stage]')
  const canvas = root.querySelector<HTMLCanvasElement>('[data-standard-map-canvas]')
  const epsilonInput = root.querySelector<HTMLInputElement>('[data-epsilon-input]')
  const epsilonOutput = root.querySelector<HTMLOutputElement>('[data-epsilon-output]')
  const presetButtons = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-epsilon-preset]'))

  if (!stage || !canvas || !epsilonInput || !epsilonOutput) return null
  return { stage, canvas, epsilonInput, epsilonOutput, presetButtons }
}

const bindExperiment = (root: HTMLElement) => {
  if (root.dataset.standardMapBound === 'true') return
  const elements = getElements(root)
  if (!elements) return

  root.dataset.standardMapBound = 'true'
  const abortController = new AbortController()
  const listenerOptions = { signal: abortController.signal }
  const fallbackImage = root.querySelector<HTMLImageElement>('[data-standard-map-output]')
  let renderWorker: Worker | null = null

  if ('transferControlToOffscreen' in elements.canvas) {
    try {
      renderWorker = new Worker(new URL('./standard-map-render.worker.ts', import.meta.url), { type: 'module' })
      renderWorker.addEventListener('message', (event: MessageEvent<{
        type: 'rendered'
        quality: RenderQuality
        epsilon: number
        duration: number
      }>) => {
        if (event.data.type !== 'rendered') return
        if (fallbackImage) fallbackImage.hidden = true
        elements.canvas.dataset.renderQuality = event.data.quality
        elements.canvas.dataset.renderDuration = event.data.duration.toFixed(2)
      })
      const offscreenCanvas = elements.canvas.transferControlToOffscreen()
      renderWorker.postMessage({ type: 'init', canvas: offscreenCanvas }, [offscreenCanvas])
    } catch {
      renderWorker?.terminate()
      renderWorker = null
    }
  }

  let drawFrame = 0
  let finalTimer = 0
  let lastRenderKey = ''

  const updateControls = () => {
    const epsilon = Number(elements.epsilonInput.value)
    elements.epsilonOutput.value = `ε = ${epsilon.toFixed(2)}`
    elements.presetButtons.forEach((button) => {
      const active = Math.abs(Number(button.dataset.epsilonPreset) - epsilon) < 0.0001
      button.setAttribute('aria-pressed', String(active))
      button.classList.toggle('bg-zinc-900', active)
      button.classList.toggle('text-white', active)
      button.classList.toggle('text-zinc-600', !active)
    })
  }

  const render = (quality: RenderQuality) => {
    if (!root.isConnected) {
      cleanup()
      return
    }

    window.cancelAnimationFrame(drawFrame)
    drawFrame = window.requestAnimationFrame(() => {
      const epsilon = Number(elements.epsilonInput.value)
      const bounds = elements.stage.getBoundingClientRect()
      const size = Math.floor(Math.min(bounds.width, bounds.height))
      const renderKey = `${quality}:${size}:${epsilon}`
      if (renderKey === lastRenderKey) return
      const pixelRatio = quality === 'preview' ? 1 : Math.min(window.devicePixelRatio || 1, 1.35)
      if (renderWorker) {
        renderWorker.postMessage({ type: 'render', size, epsilon, quality, pixelRatio })
      } else if (!drawPhasePortrait(elements.canvas, size, epsilon, quality, pixelRatio)) {
        return
      } else if (fallbackImage) {
        fallbackImage.hidden = true
      }
      lastRenderKey = renderKey
      elements.canvas.setAttribute(
        'aria-label',
        `標準写像の相図。横軸はtheta、縦軸はI、摂動パラメータepsilonは${epsilon.toFixed(2)}。`
      )
    })
  }

  const renderFinal = () => {
    window.clearTimeout(finalTimer)
    render('final')
  }

  const renderPreviewThenFinal = () => {
    updateControls()
    window.clearTimeout(finalTimer)
    render('preview')
    finalTimer = window.setTimeout(renderFinal, 160)
  }

  const cleanup = () => {
    abortController.abort()
    window.cancelAnimationFrame(drawFrame)
    window.clearTimeout(finalTimer)
    renderWorker?.terminate()
    renderWorker = null
  }

  elements.epsilonInput.addEventListener('input', renderPreviewThenFinal, listenerOptions)
  elements.epsilonInput.addEventListener('change', renderFinal, listenerOptions)
  elements.presetButtons.forEach((button) => {
    button.addEventListener('click', () => {
      elements.epsilonInput.value = button.dataset.epsilonPreset ?? '0.5'
      updateControls()
      renderFinal()
    }, listenerOptions)
  })

  document.addEventListener('portfolio:tab-change', renderFinal, listenerOptions)
  document.addEventListener('portfolio:before-page-replace', cleanup, listenerOptions)
  window.addEventListener('resize', renderFinal, listenerOptions)
  updateControls()
  renderFinal()
}

export const bindStandardMapExperiments = () => {
  document.querySelectorAll<HTMLElement>('[data-standard-map-experiment]').forEach(bindExperiment)
}
