import React, { useState } from 'react';

function ColorChangingSquares() {
  // Создаем состояния для хранения цветов квадратов
  const [square1Color, setSquare1Color] = useState('red');
  const [square2Color, setSquare2Color] = useState('blue');

  // Функция для обработки клика на первом квадрате
  const handleSquare1Click = () => {
    // Меняем цветы квадратов между собой
    setSquare1Color('blue');
    setSquare2Color('red');
  };

  // Функция для обработки клика на втором квадрате
  const handleSquare2Click = () => {
    // Меняем цветы квадратов между собой
    setSquare1Color('red');
    setSquare2Color('blue');
  };

  return (
    <div>
      <div
        className="square"
        style={{ backgroundColor: square1Color }}
        onClick={handleSquare1Click}
      ></div>
      <div
        className="square"
        style={{ backgroundColor: square2Color }}
        onClick={handleSquare2Click}
      ></div>
    </div>
  );
}

export default ColorChangingSquares;

