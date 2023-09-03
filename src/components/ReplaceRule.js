import React from 'react'
import '../css/replacerule.css'
import Checkbox from './Checkbox'
import '../css/replacerule.css'

function ReplaceRule({index, rule, setRule, removeRule}) {
  return (
    <div className="rule-container">
      <div className="row row-right">
        <button onClick={() => {
          removeRule(index)
          }}>🗑</button>
      </div>
      <div className="row">
        {rule.regexMode?<div className='reg-pre'>/</div>:<></>}
        <input 
          type="text" 
          placeholder={rule.regexMode?'Regular Expression':'Encontrar'}
          value={rule.find}
          onChange={e => {
            setRule(index, 'find', e.target.value)
          }}
        ></input>
        {rule.regexMode?<div className='reg-su'>/g</div>:<></>}
        <Checkbox label='RegExp' checked={rule.regexMode} setChecked={(val) => setRule(index, 'regexMode', val)}/>
      </div>
      <div className="row">
        <input 
          type="text" 
          placeholder={rule.mode === '1'?'Sustituir por...':'Insertar...'}
          onChange={e => {
            setRule(index, 'replace', e.target.value)
          }}
        ></input>
        <Checkbox label='Parse' checked={rule.parse} setChecked={(val) => setRule(index, 'parse', val)}/>
        <select 
          value={rule.mode}
          onChange={e => {
            setRule(index, 'mode', e.target.value)
          }}>
          <option value="-1" disabled>Mode</option>
          <option value="1">Sustituir</option>
          <option value="2">Tras la coincidencia</option>
          <option value="3">Frente a la coincidencia</option>
        </select>
      </div>
      <div className='row'><span className="info-text">{rule.info}</span></div>
    </div>
  )
}

export default ReplaceRule