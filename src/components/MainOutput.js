import React from 'react'
import '../css/app.css'

function MainOutput({value}) {
  return (
    <div>
      <h2>Formatted Output</h2>
      <textarea rows="24" className='text-input' value={value} readOnly/>
    </div>
  )
}

export default MainOutput