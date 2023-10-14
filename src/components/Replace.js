import React from 'react'
import CollapsibleCard from './CollapsibleCard'
import ReplaceRule from './ReplaceRule'
import Button from './Button'

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
        <Button label="&#128929;" onClick={() => addRule()} tooltip="Add a new rule"/>
      </div>
    </CollapsibleCard>
  )
}

export default Replace