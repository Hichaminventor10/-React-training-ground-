

import React, { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('red');

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>

    </div>
  );
}

export default ColorPicker;
