import React, { useState } from 'react';
import '../css/button.css'

function Button({label, onClick, tooltip}) {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => onClick()}
      >
        {label}
      </button>
      {tooltip && showTooltip && (
        <div
          className='tooltip-text'
        >
          {tooltip}
        </div>
      )}
    </div>
  )
}

export default Button