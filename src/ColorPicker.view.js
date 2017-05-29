import React from 'react';
import Choices from './Choices.view.js';
import css from 'glam';

const styles = {
  h1vfb622: css('css-xvvaq1', [], () => [
    `.css-xvvaq1 { flex-direction: column; -webkit-box-direction: normal; -webkit-box-orient: vertical; -ms-flex-direction: column; -webkit-flex-direction: column;
background-color: #f2f2f2;
padding: 10px; }`,
  ]),
};

const ColorPicker = props => (
  <div className={`${styles.h1vfb622}`}>
    <Choices from={props.hues} chosen={props.hue} onClick={props.chooseHue} />
    <Choices
      from={props.saturations}
      chosen={props.saturation}
      onClick={props.chooseSaturation}
    />
    <Choices
      from={props.lightnesses}
      chosen={props.lightness}
      onClick={props.chooseLightness}
    />
  </div>
);
export default ColorPicker;
