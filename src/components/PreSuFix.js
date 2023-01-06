import React from 'react'
import Checkbox from './Checkbox'
import CollapsibleCard from './CollapsibleCard'
import '../css/app.css'

function PreSuFix({preSuFixOpts, setPreSuFixOpts, disabled, setDisabledPreSuFix}) {

  function setOptState(prop, value) {
    setPreSuFixOpts(prevOpts => {
      return { ...prevOpts, [prop]: value }
    })
  }

  return (
    <CollapsibleCard title="PreSuFix" disabled={disabled} setDisabled={setDisabledPreSuFix}>
      <div>
        <p>Prefix</p>
        <textarea 
          rows="1" 
          className='text-input' 
          value={preSuFixOpts.prefix} 
          onChange={(e) => setOptState('prefix', e.target.value)}
          disabled={!disabled}
        />
      </div>
      <div>
        <p>Sufix</p>
        <textarea 
          rows="1" 
          className='text-input' 
          value={preSuFixOpts.sufix} 
          onChange={(e) => setOptState('sufix', e.target.value)}
          disabled={!disabled}
        />
      </div>
      <Checkbox 
        label="Por línea" 
        checked={preSuFixOpts.byLn}
        setChecked={(val) => setOptState('byLn', val)}
        disabled={!disabled}
      />
    </CollapsibleCard>
  )
}

export default PreSuFix