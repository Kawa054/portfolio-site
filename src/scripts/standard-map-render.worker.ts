import { drawPhasePortrait, type RenderQuality } from './standard-map-renderer'

type WorkerMessage =
  | { type: 'init'; canvas: OffscreenCanvas }
  | {
      type: 'render'
      size: number
      epsilon: number
      quality: RenderQuality
      pixelRatio: number
    }

let canvas: OffscreenCanvas | null = null

self.addEventListener('message', (event: MessageEvent<WorkerMessage>) => {
  const message = event.data
  if (message.type === 'init') {
    canvas = message.canvas
    return
  }

  if (!canvas) return
  const startedAt = performance.now()
  drawPhasePortrait(canvas, message.size, message.epsilon, message.quality, message.pixelRatio)
  self.postMessage({
    type: 'rendered',
    quality: message.quality,
    epsilon: message.epsilon,
    duration: performance.now() - startedAt
  })
})
