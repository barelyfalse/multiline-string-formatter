import React from 'react'
import '../css/app.css'

function MainInput({value, setRawInput}) {
  return (
    <div>
      <h2>Raw Input</h2>
      <textarea rows="10" className='text-input' value={value} onChange={event => setRawInput(event.target.value)} />
    </div>
  )
}

export default MainInput