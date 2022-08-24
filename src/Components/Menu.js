import React from 'react';
import '../App.css';

const Menu = ({
  setLineColor,
  setLineWidth,
  setLineOpacity,
  lastic,
  usualDraw,
  value,
  setPlayersClick,
  setValue,
  enemyValue,
  setEnemyValue,
  setEnemiesClick,
}) => {
  return (
    <div className="Menu">
      <label>Brush Color </label>
      <input
        type="color"
        onChange={(e) => {
          setLineColor(e.target.value);
        }}
      />
      <label>Brush Width </label>
      <input
        type="range"
        min="3"
        max="20"
        onChange={(e) => {
          setLineWidth(e.target.value);
        }}
      />
      <label>Brush Opacity</label>
      <input
        type="range"
        min="1"
        max="100"
        onChange={(e) => {
          setLineOpacity(e.target.value / 100);
        }}
      />
      <div className={'lastic'} onClick={lastic}>
        Стёрка
      </div>
      <div className={'pencil'} onClick={usualDraw}>
        Обычная рисовка
      </div>
      <div className="lastic" onClick={setPlayersClick}>
        add player
      </div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <div className="lastic" onClick={setEnemiesClick}>
        add enemy
      </div>
      <input value={enemyValue} onChange={(e) => setEnemyValue(e.target.value)} />
    </div>
  );
};

export default Menu;
