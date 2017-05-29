import ColorPicker from './ColorPicker.view.js'
import hues from './hues.js'
import lightnesses from './lightnesses.js'
import React from 'react'
import saturations from './saturations.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hues: hues(0),
      hue: 0,
      saturations: saturations(0),
      saturation: 100,
      lightnesses: lightnesses(0, 100),
      lightness: 100,
    }

    this.chooseHue = this.chooseHue.bind(this)
    this.chooseSaturation = this.chooseSaturation.bind(this)
    this.chooseLightness = this.chooseLightness.bind(this)
  }

  chooseHue(hue) {
    const nextState = {
      hue: hue.value,
      // reset saturations
      saturations: saturations(hue.value),
      saturation: 100,
      // reset lightnesss
      lightnesss: lightnesses(hue.value, 100),
      lightness: 50,
    }
    if (hue.isMain) {
      nextState.hues = hues(hue.value)
    }

    this.setState(nextState)
  }

  chooseSaturation(saturation) {
    this.setState({
      saturation: saturation.value,
      // reset lightnesses
      lightnesses: lightnesses(this.state.hue, saturation.value),
      lightness: 50,
    })
  }

  chooseLightness(lightness) {
    this.setState({
      lightness: lightness.value,
    })
  }

  render() {
    return (
      <ColorPicker
        {...this.state}
        chooseHue={this.chooseHue}
        chooseSaturation={this.chooseSaturation}
        chooseLightness={this.chooseLightness}
      />
    )
  }
}
