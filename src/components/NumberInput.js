import React from 'react'
import '../css/numberinput.css'

function NumberInput({label, value, setValue, disabled, min=0, max=10}) {

  return (
    <label className="number-container">{label}
      <input 
        type="number"
        defaultValue={value}
        onChange={e => setValue(e.target.value)}
        disabled={disabled}
        min={min}
        max={max}
      />
    </label>
  )
}

export default NumberInput