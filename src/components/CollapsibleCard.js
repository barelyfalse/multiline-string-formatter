import React, {useState} from 'react'
import '../css/collapsiblecard.css'
import Checkbox from './Checkbox'

function CollapsibleCard(props) {
  const [collapsed, setCollapsed] = useState(false)
  //❱
  return (
    <div className="collapsible-card"
      style={{
        transition: 'max-height 250ms ease-in-out',
        maxHeight: collapsed ? '58px' : '2000px',
      }}
    >
      <div className="titlebar">
        <div className="title-holder" onClick={() => setCollapsed(prevCollapsed => !prevCollapsed)}>
          <Checkbox checked={props.disabled} setChecked={props.setDisabled}/> 
          <h3 className="title">{props.title}</h3>
        </div>
        <div className='actions'>
          <button 
            className='collapse-btn'
            onClick={() => setCollapsed(prevCollapsed => !prevCollapsed)}
          >
            <div className={collapsed ? 'collapsed-icon':'collapse-icon'}>❱</div>
          </button>
        </div>
      </div>
      {props.children}
    </div>
  )
}

export default CollapsibleCard