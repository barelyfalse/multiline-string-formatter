import React from 'react'
import Checkbox from './Checkbox'
import CollapsibleCard from './CollapsibleCard'
import NumberInput from './NumberInput'

function Options({options, setOptions, disabled, setDisabledOpts}) {
  
  function setOptState(prop, value) {
    setOptions(prevOpts => {
      return { ...prevOpts, [prop]: value }
    })
  }

  return (
    <CollapsibleCard title="Options" disabled={disabled} setDisabled={setDisabledOpts}> 
      <Checkbox 
        label="Eliminar saltos de línea extra"
        checked={options.deleteExtraLineBreaks}
        setChecked={(val) => setOptState('deleteExtraLineBreaks', val)}
        disabled={!disabled}
      />
      {
        options.deleteExtraLineBreaks?
        <div className="sub-option">
          <NumberInput
            label="Número máximo de saltos"
            value={options.permitedLineBreaks}
            setValue={(val) => setOptState('permitedLineBreaks', val)}
            disabled={!disabled}
          />
        </div>:<></>
      }
      <Checkbox 
        label="Escapar caracteres especiales"
        checked={options.escapeSpecialChars}
        setChecked={(val) => setOptState('escapeSpecialChars', val)}
        disabled={!disabled}
      />
      <Checkbox 
        label="Recortar inicio de la cadena"
        checked={options.trimStrStart}
        setChecked={(val) => setOptState('trimStrStart', val)}
        disabled={!disabled}
      />
      {
        options.trimStrStart?
        <div className="sub-option">
          <Checkbox 
            label="Por línea"
            checked={options.trimStrStartByLn}
            setChecked={(val) => setOptState('trimStrStartByLn', val)}
            disabled={!disabled}
          />
        </div>:<></>
      }
      <Checkbox 
        label="Recortar final de la cadena"
        checked={options.trimStrEnd}
        setChecked={(val) => setOptState('trimStrEnd', val)}
        disabled={!disabled}
      />
      {
        options.trimStrEnd?
        <div className="sub-option">
          <Checkbox 
            label="Por línea"
            checked={options.trimStrEndByLn}
            setChecked={(val) => setOptState('trimStrEndByLn', val)}
            disabled={!disabled}
          />
        </div>:<></>
      }
      
    </CollapsibleCard>
  )
}

export default Options