import React, { useEffect, useRef, useState } from 'react';
import Menu from './Menu';
import './Paint.css';
import PlayerDrag from './PlayerDrag';

const Paint = () => {
  const canvasRef = useRef(null); //paint
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState('black');
  const [lineOpacity, setLineOpacity] = useState(0.1);

  const [value, setValue] = useState(''); //drag player
  const [enemyValue, setEnemyValue] = useState(''); //drag player
  const [players, setPlayers] = useState([]);
  const [enemies, setEnemies] = useState([]);
  const setPlayersClick = () => {
    setPlayers([...players, value]);
    setValue('');
  };

  const setEnemiesClick = () => {
    setEnemies([...enemies, enemyValue]);
    setEnemyValue('');
  };

  useEffect(() => {
    console.log(enemies);
  }, [enemies.length]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalAlpha = lineOpacity;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
  }, [lineColor, lineOpacity, lineWidth]);

  const startDrawing = (e) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const endDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const lastic = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'destination-out';
  };

  const usualDraw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'source-over';
  };

  const draw = (e) => {
    if (!isDrawing) {
      return;
    }
    ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);

    ctxRef.current.stroke();
  };
  return (
    <div className={'App1'}>
      <h1>Paint App</h1>
      <div className="draw-area">
        <Menu
          setLineColor={setLineColor}
          setLineWidth={setLineWidth}
          setLineOpacity={setLineOpacity}
          lastic={lastic}
          usualDraw={usualDraw}
          setPlayersClick={setPlayersClick}
          value={value}
          setValue={setValue}
          enemyValue={enemyValue}
          setEnemyValue={setEnemyValue}
          enemies={enemies}
          setEnemiesClick={setEnemiesClick}
        />
        {/* <div onClick={lastic}>
                    Стёрка
                </div>
                <div onClick={usualDraw}>
                    Обычная рисовка
                </div> */}
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          ref={canvasRef}
          width={`1280px`}
          height={`820px`}
        />
        {players.map((number) => (
          <PlayerDrag playerNumber={number} enemy={false} />
        ))}
        {enemies.map((number) => (
          <PlayerDrag playerNumber={number} enemy={true} />
        ))}
      </div>
    </div>
  );
};

export default Paint;
