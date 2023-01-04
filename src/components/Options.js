import React from 'react'
import Checkbox from './Checkbox'
import CollapsibleCard from './CollapsibleCard'

function Options() {
  return (
    <CollapsibleCard title="Options">
      <Checkbox 
        label="Eliminar saltos de línea"
      />
      <Checkbox 
        label="Escapar caracteres especiales"
      />
    </CollapsibleCard>
  )
}

export default Options