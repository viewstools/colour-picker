const max = 100
const stops = 8
const step = max / stops

export default hue => {
  const ret = []

  for (let i = 0; i < stops; i++) {
    const value = step * i

    ret.push({
      color: `hsl(${hue}, ${value}%, 50%)`,
      isMain: true,
      value,
    })
  }

  return ret
}
