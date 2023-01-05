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

  const [disabledOpts, setDisabledOpts] = useState(false)

  const [options, setOption] = useState({
    deleteExtraLineBreaks: false,
    deleteEveryLineBreak: false,
    escapeSpecialChars: false,
    trimStrStart: false,
    trimStrStartByLn: false,
    trimStrEnd: false,
    trimStrEndByLn: false,
  })

  const [preSuFixOpts, setPreSuFixOpts] = useState({
    prefix: '',
    sufix: '',
    byLn: false
  })

  function processText(text) {
    let procText = ''
    let lines = text.split('\n')

    // BY LINE PROCESSING
    lines = lines.map(line => {
      let l = line

      // Trimming line start
      if (options.trimStrStartByLn && options.trimStrStart) {
        l = l.trimStart() 
      }

      // Trimming line end
      if (options.trimStrEndByLn && options.trimStrEnd) {
        l = l.trimEnd() 
      }

      //if string empty don't return anything (after trimming)
      if (l.length < 1) {
        return
      }

      // BY CHAR PROCESSING
      // special char escaping
      if (!disabledOpts && options.escapeSpecialChars) {
        l = [...l].map(char => {
          if (/[\"\'\\]/.test(char)) {
            return '\\' + char
          }
          return char
        }).join('')
      }
      
      if (preSuFixOpts.byLn) {
        l = preSuFixOpts.prefix+l+preSuFixOpts.sufix
      }

      return l
    })

    let joinChar = options.deleteExtraLineBreaks && options.deleteEveryLineBreak ? '':'\n'

    procText = lines.join(joinChar)

    // WHOLE STRING PROCESSING

    // Trimming string start
    if (options.trimStrStart && !options.trimStrStartByLn) {
      procText = procText.trimStart()
    }

    // Trimming string end
    if (options.trimStrEnd && !options.trimStrEndByLn) {
      procText = procText.trimEnd()
    }

    // Adding string presufixes
    if (!preSuFixOpts.byLn) {
      procText = preSuFixOpts.prefix+procText+preSuFixOpts.sufix
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
  }, [rawText, options, preSuFixOpts, disabledOpts])

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
            disabled={disabledOpts}
            setDisabledOpts={setDisabledOpts}
          />
          <PreSuFix 
            preSuFixOpts={preSuFixOpts}
            setPreSuFixOpts={setPreSuFixOpts}
          />
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
