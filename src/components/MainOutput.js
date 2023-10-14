import React from 'react'
import '../css/app.css'
import Card from './Card'
import ProcessingInfo from './ProcessingInfo'
import Button from './Button'

function MainOutput({value, info, setRawInput}) {
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
  }
  return (
    <Card>
      <h2>Formatted Output</h2>
      <textarea rows="24" className='text-input' value={value} readOnly/>
      <ProcessingInfo value={info}/>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          gap: "4px",
          paddingTop: "2px"
        }}
      >
        <Button label="Copy" onClick={() => copyToClipboard(value)} tooltip="Copy result" />
        <Button label="Send to input" onClick={() => setRawInput(value)} tooltip="" />
      </div>
    </Card>
  )
}

export default MainOutput