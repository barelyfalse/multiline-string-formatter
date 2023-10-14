import React from 'react'
import '../css/app.css'
import Card from './Card'
import Button from './Button';

function MainInput({value, setRawInput}) {
  const pasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      return text;
    } catch (error) {
      console.error('Unable to paste from clipboard:', error);
    }
  };
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
  }

  return (
    <Card>
      <h2>Raw Input</h2>
      <textarea rows="10" className='text-input' value={value} onChange={event => setRawInput(event.target.value)} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "4px",
          paddingTop: "2px"
        }}
      >
        <Button label="Clear" onClick={() => setRawInput('')} tooltip="Clear the input" />
        <Button label="Paste" onClick={async () => setRawInput(await pasteFromClipboard())} tooltip="Paste from clipboard" />
        <Button label="Copy" onClick={() => copyToClipboard(value)} tooltip="Copy to clipboard" />
      </div>
    </Card>
  )
}

export default MainInput