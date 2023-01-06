import React from 'react'
import '../css/app.css'
import Card from './Card'
import ProcessingInfo from './ProcessingInfo'

function MainOutput({value, info}) {
  return (
    <Card>
      <h2>Formatted Output</h2>
      <textarea rows="24" className='text-input' value={value} readOnly/>
      <ProcessingInfo value={info}/>
    </Card>
  )
}

export default MainOutput