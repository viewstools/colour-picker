import React from 'react';
import css from 'glam';

const styles = {
  h1xczqzm: css('css-1hfc5', [], () => [
    `.css-1hfc5 { flex-direction: row; -webkit-box-direction: normal; -webkit-box-orient: horizontal; -ms-flex-direction: row; -webkit-flex-direction: row;
align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
-webkit-align-items: center;
flex-wrap: wrap;
-webkit-box-lines: multiple;
-ms-flex-wrap: wrap;
-webkit-flex-wrap: wrap;
margin-top: 5px;
width: 100%; }`,
  ]),
  h15ybink: css('css-110byne', [], () => [
    `.css-110byne { flex-direction: row; -webkit-box-direction: normal; -webkit-box-orient: horizontal; -ms-flex-direction: row; -webkit-flex-direction: row;
border: 2px solid transparent;
border-radius: 40px;
cursor: pointer;
margin-left: 2px;
height: 40px; }`,
    `.css-110byne:hover { border-color: black; }`,
    `.css-110byne.active { border-color: black; cursor: default; }`,
  ]),
};

const Choices = props => (
  <div className={`${styles.h1xczqzm}`}>
    {props.from.map((item, i) => (
      <button
        isActive={item.value === props.chosen}
        onClick={() => props.onClick(item)}
        className={`${styles.h15ybink} ${item.value === props.chosen && 'active'}`}
        style={{
          backgroundColor: `${item.color}`,
          width: item.isMain ? 40 : 20,
        }}
        key={i}
      />
    ))}
  </div>
);
export default Choices;
