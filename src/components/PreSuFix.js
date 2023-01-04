import React from 'react'
import Checkbox from './Checkbox'
import CollapsibleCard from './CollapsibleCard'
import '../css/app.css'

function PreSuFix({preSuFixOpts, setPreSuFixOpts}) {

  function setOptState(prop, value) {
    setPreSuFixOpts(prevOpts => {
      return { ...prevOpts, [prop]: value }
    })
  }

  return (
    <CollapsibleCard title="PreSuFix">
      <div>
        <p>Prefix</p>
        <textarea rows="1" className='text-input' value={preSuFixOpts.prefix} onChange={(e) => setOptState('prefix', e.target.value)}/>
      </div>
      <div>
        <p>Sufix</p>
        <textarea rows="1" className='text-input' value={preSuFixOpts.sufix} onChange={(e) => setOptState('sufix', e.target.value)}/>
      </div>
      <Checkbox 
        label="Por línea" 
        checked={preSuFixOpts.byLn}
        setChecked={(val) => setOptState('byLn', val)}
      />
    </CollapsibleCard>
  )
}

export default PreSuFix