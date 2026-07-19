const TAU = 2 * Math.PI
const COLORS = ['#006d77', '#c2410c', '#1d4f91', '#3f7d20', '#9d3d7d', '#5b3fa3', '#a66f00']

export type RenderQuality = 'preview' | 'final'

const moduloTau = (value: number) => {
  const result = value % TAU
  return result < 0 ? result + TAU : result
}

export const drawPhasePortrait = (
  canvas: HTMLCanvasElement | OffscreenCanvas,
  size: number,
  epsilon: number,
  quality: RenderQuality,
  pixelRatio: number
) => {
  if (size <= 0) return false

  canvas.width = Math.round(size * pixelRatio)
  canvas.height = Math.round(size * pixelRatio)

  const context = canvas.getContext('2d') as
    | CanvasRenderingContext2D
    | OffscreenCanvasRenderingContext2D
    | null
  if (!context) return false

  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
  context.clearRect(0, 0, size, size)
  context.fillStyle = '#ffffff'
  context.fillRect(0, 0, size, size)

  const left = Math.max(50, size * 0.105)
  const right = Math.max(12, size * 0.025)
  const top = Math.max(12, size * 0.025)
  const bottom = Math.max(48, size * 0.1)
  const plotWidth = size - left - right
  const plotHeight = size - top - bottom

  context.save()
  context.beginPath()
  context.rect(left, top, plotWidth, plotHeight)
  context.clip()

  const orbitCount = quality === 'preview' ? 48 : 96
  const burnIn = quality === 'preview' ? 60 : 100
  const sampleCount = quality === 'preview' ? 300 : 600
  const pointSize = Math.max(1.15, size / 620)

  for (let orbit = 0; orbit < orbitCount; orbit += 1) {
    let action = 0.06 + ((TAU - 0.12) * orbit) / (orbitCount - 1)
    let angle = orbit % 2 === 0 ? 0.13 : Math.PI + 0.13
    context.fillStyle = COLORS[orbit % COLORS.length]
    context.globalAlpha = 0.9

    for (let step = 0; step < burnIn + sampleCount; step += 1) {
      action = moduloTau(action + epsilon * Math.sin(angle))
      angle = moduloTau(angle + action)
      if (step < burnIn) continue

      const x = left + (angle / TAU) * plotWidth
      const y = top + (1 - action / TAU) * plotHeight
      context.fillRect(x - pointSize / 2, y - pointSize / 2, pointSize, pointSize)
    }
  }

  context.restore()
  context.globalAlpha = 1
  context.strokeStyle = '#18181b'
  context.lineWidth = Math.max(1.2, size / 600)
  context.strokeRect(left, top, plotWidth, plotHeight)

  const tickFontSize = Math.max(14, Math.min(21, size * 0.027))
  const labelFontSize = Math.max(17, Math.min(26, size * 0.034))
  context.fillStyle = '#18181b'
  context.strokeStyle = '#18181b'
  context.textBaseline = 'middle'
  context.font = `${tickFontSize}px system-ui, sans-serif`

  const ticks = [
    { value: 0, label: '0' },
    { value: Math.PI, label: 'π' },
    { value: TAU, label: '2π' }
  ]

  ticks.forEach((tick) => {
    const x = left + (tick.value / TAU) * plotWidth
    const y = top + (1 - tick.value / TAU) * plotHeight

    context.beginPath()
    context.moveTo(x, top + plotHeight)
    context.lineTo(x, top + plotHeight + 6)
    context.moveTo(left - 6, y)
    context.lineTo(left, y)
    context.stroke()

    context.textAlign = 'center'
    context.fillText(tick.label, x, top + plotHeight + 20)
    context.textAlign = 'right'
    context.fillText(tick.label, left - 10, y)
  })

  context.font = `600 ${labelFontSize}px system-ui, sans-serif`
  context.textAlign = 'center'
  context.fillText('θₘ', left + plotWidth / 2, size - bottom / 3)
  context.fillText('Iₘ', left * 0.38, top + plotHeight / 2)
  return true
}
