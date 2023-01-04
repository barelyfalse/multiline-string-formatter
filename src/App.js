import React, { useState, useEffect } from 'react';
import MainInput from './components/MainInput';
import MainOutput from './components/MainOutput';
import Options from './components/Options';
import PreSuFix from './components/PreSuFix';
import Replace from './components/Replace';
import MainHeader from './components/MainHeader';
import Footer from './components/Footer';
import './css/app.css';
import ProcessingInfo from './components/ProcessingInfo';

function App() {
  const [rawText, setRawText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [infoText, setInfoText] = useState("Waiting...")

  const [options, setOption] = useState({
    trimStrStart: false,
    trimStrStartByLn: false,
    trimStrEnd: false,
    trimStrEndByLn: false,
  })

  function processText(text) {
    let procText = ''

    let currentLn = ''

    for (let i = 0; i < text.length; i++) {
      const char = text[i]
      if (char === '\n') {
        console.log(currentLn)
        if (options.trimStrEndByLn) {
          currentLn = currentLn.trimEnd()
        }
        console.log(currentLn)
        procText += '\n'+currentLn
        currentLn = ''
      } else {
        currentLn += char
      }
    }

    setOutputText(procText)
  }
  
  useEffect(() => {
    //set the timer
    const timeOutId = setTimeout(() => {
      processText(rawText)
      setInfoText('Done')
    }, 500)
    //if the useEffect hook happens to be called again before timeout ended
    //timeout gets cleared and starts again
    //basicaly the timeout will be constantly cleared and remade until the user stops
    //The useEffect func it's called on user input 
    return () => {
      clearTimeout(timeOutId)
      setInfoText('Processing...')
    }
    //options also on useEffect for be called again on options change
  }, [rawText, options])

  return (
    <div className="wrapper">
      <MainHeader />
      <div className="container">
        <div className="pane">
          <MainInput 
            value={rawText} 
            setRawInput={setRawText}
          />
          <Options 
            options={options}
            setOptions={setOption}
          />
          <PreSuFix />
          <Replace />
        </div>
        <div className="pane">
          <MainOutput value={outputText}/>
          <ProcessingInfo value={infoText}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
