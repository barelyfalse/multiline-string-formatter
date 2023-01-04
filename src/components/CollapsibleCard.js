import React, {useState} from 'react'
import '../css/collapsiblecard.css'

function CollapsibleCard(props) {
  const [collapsed, setCollapsed] = useState(false)
  //❱
  return (
    <div className="collapsible-card"
      style={{
        height: collapsed ? '54px' : 'auto',
      }}
    >
      <div className="titlebar">
        <div className="title-holder" onClick={() => setCollapsed(prevCollapsed => !prevCollapsed)}>
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