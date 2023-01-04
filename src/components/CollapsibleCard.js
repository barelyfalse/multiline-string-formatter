import React from 'react'
import '../css/app.css'

function CollapsibleCard(props) {
  return (
    <div className="collapsible-card">
      <h3>{props.title}</h3>
      {props.children}
    </div>
  )
}

export default CollapsibleCard