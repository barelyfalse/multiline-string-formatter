import React from 'react'
import '../css/checkbox.css'

function Checkbox({label, checked, setChecked, disabled}) {

  return (
    <label className="checkbox-container">{label}
      <input type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        disabled={disabled}
      />
      <span className="checkmark"></span>
    </label>
  )
}

export default Checkbox