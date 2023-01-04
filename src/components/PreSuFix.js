import React from 'react'
import Checkbox from './Checkbox'
import CollapsibleCard from './CollapsibleCard'

function PreSuFix() {
  return (
    <CollapsibleCard title="PreSuFix">
      <div>
        <p>Prefix</p>
        <textarea rows="1" />
      </div>
      <div>
        <p>Sufix</p>
        <textarea rows="1" />
      </div>
      <Checkbox label="Por línea" />
    </CollapsibleCard>
  )
}

export default PreSuFix