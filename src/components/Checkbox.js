import React from 'react'

function Checkbox({label, subComponent}) {
  const [checked, setChecked] = React.useState(false)

  return (
    <div>
      <input type="checkbox"
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
      />
      {label}
      {
        subComponent?
        <div>
          {subComponent}
        </div>:
        null
      }
    </div>
  )
}

export default Checkbox