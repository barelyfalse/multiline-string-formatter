import React from 'react'
import CollapsibleCard from './CollapsibleCard'
import ReplaceRule from './ReplaceRule'

function Replace({rules, setRule, removeRule, disabled, setDisabledReplace, addRule}) {
  return (
    <CollapsibleCard title="Replace" disabled={disabled} setDisabled={setDisabledReplace}>
      <div className="rules-container">
        {
          rules.map((rule, i) => {
            return (
              <ReplaceRule 
                key={i}
                index={i}
                rule={rule}
                setRule={setRule}
                removeRule={removeRule}
              />
            )
          })
        }
        <button
          className='add-rule-btn'
          onClick={() => addRule()}
        >
          +
        </button>
      </div>
    </CollapsibleCard>
  )
}

export default Replace