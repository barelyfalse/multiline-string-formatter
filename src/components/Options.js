import React from 'react'
import Checkbox from './Checkbox'
import CollapsibleCard from './CollapsibleCard'

function Options({options, setOptions}) {
  
  function setOptState(prop, value) {
    setOptions(prevOpts => {
      return { ...prevOpts, [prop]: value }
    })
  }

  return (
    <CollapsibleCard title="Options">
      <Checkbox 
        label="Eliminar saltos extra de línea"
      />
      <div className="sub-option">
        <Checkbox label="Sin saltos de línea"/>
      </div>
      <Checkbox 
        label="Escapar caracteres especiales"
      />
      <Checkbox 
        label="Recortar inicio de la cadena"
        checked={options.trimStrStart}
        setChecked={(val) => setOptState('trimStrStart', val)}
      />
      {
        options.trimStrStart?
        <div className="sub-option">
          <Checkbox 
            label="Por línea"
            checked={options.trimStrStartByLn}
            setChecked={(val) => setOptState('trimStrStartByLn', val)}
          />
        </div>:
        null
      }
      <Checkbox 
        label="Recortar final de la cadena"
        checked={options.trimStrEnd}
        setChecked={(val) => setOptState('trimStrEnd', val)}
      />
      {
        options.trimStrEnd?
        <div className="sub-option">
          <Checkbox 
            label="Por línea"
            checked={options.trimStrEndByLn}
            setChecked={(val) => setOptState('trimStrEndByLn', val)}
          />
        </div>:
        null
      }
      
    </CollapsibleCard>
  )
}

export default Options