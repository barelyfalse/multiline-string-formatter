import React from 'react'
import '../css/app.css'
import Card from './Card'

function MainInput({value, setRawInput}) {
  return (
    <Card>
      <h2>Raw Input</h2>
      <textarea rows="10" className='text-input' value={value} onChange={event => setRawInput(event.target.value)} />
    </Card>
  )
}

export default MainInput