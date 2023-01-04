import React from 'react'
import '../css/checkbox.css'

function Checkbox({label, checked, setChecked}) {

  return (
    <label className="checkbox-container">{label}
      <input type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span className="checkmark"></span>
    </label>
  )
}

export default Checkbox