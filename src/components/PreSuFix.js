import React from 'react'
import Checkbox from './Checkbox'
import CollapsibleCard from './CollapsibleCard'
import '../css/app.css'

function PreSuFix() {
  return (
    <CollapsibleCard title="PreSuFix">
      <div>
        <p>Prefix</p>
        <textarea rows="1" className='text-input'/>
      </div>
      <div>
        <p>Sufix</p>
        <textarea rows="1" className='text-input'/>
      </div>
      <Checkbox label="Por línea" defaultChecked={true}/>
    </CollapsibleCard>
  )
}

export default PreSuFix