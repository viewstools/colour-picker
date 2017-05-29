const mainStops = 6
const adjStops = 3
const stops = mainStops * adjStops
const max = 360
const mainStep = max / mainStops
const step = mainStep / 3

const inBetween = (value, chosen) => {
  const min = value - adjStops * step
  const max = value + adjStops * step
  return chosen >= min && chosen <= max
}

export default chosen => {
  const ret = []

  for (let i = -2; i < stops; i++) {
    const value = step * i

    const hue = {
      color: `hsl(${value}, 100%, 50%)`,
      isMain: value % mainStep === 0,
      value,
    }

    if (hue.isMain || inBetween(value, chosen)) {
      ret.push(hue)
    }
  }

  return ret
}
