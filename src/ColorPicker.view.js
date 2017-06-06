import React from 'react';
import Choices from './Choices.view.js';
import css from 'glam';

const styles = {
  h16t8vv4: css('css-1kt0qp5', [], () => [
    `.css-1kt0qp5 { flex-direction: column; -webkit-box-direction: normal; -webkit-box-orient: vertical; -ms-flex-direction: column; -webkit-flex-direction: column;
align-self: center;
-ms-flex-item-align: center;
-webkit-align-self: center;
background-color: #fafafa;
padding-bottom: 10px;
padding-top: 30px; }`,
  ]),
  hwsbpze: css('css-1ade6g3', [], () => [
    `.css-1ade6g3 { flex-direction: row; -webkit-box-direction: normal; -webkit-box-orient: horizontal; -ms-flex-direction: row; -webkit-flex-direction: row;
align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
-webkit-align-items: center;
align-self: center;
-ms-flex-item-align: center;
-webkit-align-self: center;
border-radius: 4px;
margin-bottom: 30px;
margin-top: 30px;
justify-content: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
-webkit-justify-content: center;
height: 40px;
width: 250px; }`,
  ]),
  h198h8x9: css('css-vydl29', [], () => [`.css-vydl29 { color: white; }`]),
};

const ColorPicker = props =>
  <div className={`${styles.h16t8vv4}`}>
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
    <div
      className={`${styles.hwsbpze}`}
      style={{ backgroundColor: `${props.color}` }}
    >
      <div className={`${styles.h198h8x9}`}>{props.color}</div>
    </div>
  </div>;

export default ColorPicker;
