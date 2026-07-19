const TAU = 2 * Math.PI
const COLORS = ['#006d77', '#c2410c', '#1d4f91', '#3f7d20', '#9d3d7d', '#5b3fa3', '#a66f00']

export type RenderQuality = 'preview' | 'final'

const moduloTau = (value: number) => {
  const result = value % TAU
  return result < 0 ? result + TAU : result
}

const radicalInverse = (index: number, base: number) => {
  let value = 0
  let fraction = 1 / base
  let remaining = index
  while (remaining > 0) {
    value += (remaining % base) * fraction
    remaining = Math.floor(remaining / base)
    fraction /= base
  }
  return value
}

const getPeriodFourCenterAngle = (epsilon: number) => {
  if (epsilon <= 2) return null

  // The symmetric period-four center (a, 0) satisfies 2a + epsilon sin(a) = 2pi.
  let lower = 0
  let upper = Math.acos(-2 / epsilon)
  for (let iteration = 0; iteration < 32; iteration += 1) {
    const midpoint = (lower + upper) / 2
    const residual = 2 * midpoint + epsilon * Math.sin(midpoint) - TAU
    if (residual > 0) upper = midpoint
    else lower = midpoint
  }
  return (lower + upper) / 2
}

const getInitialPoint = (orbit: number, quality: RenderQuality, epsilon: number) => {
  const globalOrbitCount = quality === 'preview' ? 72 : 144
  if (orbit < globalOrbitCount) {
    const sequenceIndex = orbit + 1
    return {
      angle: TAU * radicalInverse(sequenceIndex, 2),
      action: TAU * radicalInverse(sequenceIndex, 3)
    }
  }

  const focusIndex = orbit - globalOrbitCount
  const pointsPerRing = 6
  const mainOrbitCount = quality === 'preview' ? 12 : 24
  const isMainIsland = focusIndex < mainOrbitCount
  const islandIndex = isMainIsland ? focusIndex : focusIndex - mainOrbitCount
  const ring = Math.floor(islandIndex / pointsPerRing)
  const ringCount = quality === 'preview' ? 2 : 4
  const phase = (TAU * (islandIndex % pointsPerRing)) / pointsPerRing

  if (!isMainIsland) {
    const periodFourCenter = getPeriodFourCenterAngle(epsilon)
    if (periodFourCenter !== null) {
      const radius = 0.025 + (0.14 * (ring + 1)) / ringCount
      return {
        angle: moduloTau(periodFourCenter + radius * Math.cos(phase)),
        action: moduloTau(radius * Math.sin(phase))
      }
    }

    const sequenceIndex = globalOrbitCount + islandIndex + 1
    return {
      angle: TAU * radicalInverse(sequenceIndex, 2),
      action: TAU * radicalInverse(sequenceIndex, 3)
    }
  }

  const radius = 0.12 + (0.72 * (ring + 1)) / ringCount

  return {
    angle: moduloTau(Math.PI + radius * Math.cos(phase)),
    action: moduloTau(radius * Math.sin(phase))
  }
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

  const orbitCount = quality === 'preview' ? 96 : 192
  const burnIn = quality === 'preview' ? 60 : 100
  const sampleCount = quality === 'preview' ? 150 : 300
  const pointSize = Math.max(1.15, size / 620)

  for (let orbit = 0; orbit < orbitCount; orbit += 1) {
    const initialPoint = getInitialPoint(orbit, quality, epsilon)
    let action = initialPoint.action
    let angle = initialPoint.angle
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

    context.textAlign = tick.value === 0 ? 'left' : tick.value === TAU ? 'right' : 'center'
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
