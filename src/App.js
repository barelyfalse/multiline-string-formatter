import React, { useState, useEffect } from 'react';
import MainInput from './components/MainInput';
import MainOutput from './components/MainOutput';
import Options from './components/Options';
import PreSuFix from './components/PreSuFix';
import Replace from './components/Replace';
import MainHeader from './components/MainHeader';
import Footer from './components/Footer';
import './css/app.css';
//import ProcessingInfo from './components/ProcessingInfo';

function App() {
  const [rawText, setRawText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [infoText, setInfoText] = useState("Waiting...")

  const [disabledOpts, setDisabledOpts] = useState(true)

  const [options, setOption] = useState({
    deleteExtraLineBreaks: false,
    permitedLineBreaks: 2,
    escapeSpecialChars: false,
    trimStrStart: false,
    trimStrStartByLn: false,
    trimStrEnd: false,
    trimStrEndByLn: false,
  })

  const [disabledPreSuFix, setDisabledPreSuFix] = useState(true)

  const [preSuFixOpts, setPreSuFixOpts] = useState({
    prefix: '',
    sufix: '',
    byLn: false
  })

  const [disabledReplace, setDisabledReplace] = useState(true)

  const [replaceRules, setReplaceRules] = useState(() => [
    {find:'', regexMode:false, parse:false, replace:'', mode:'1', info:''}
  ])

  function setRule(index, param, value) {
    setReplaceRules(prevRules => {
      const newRules = [...prevRules]
      newRules[index][param] = value
      return newRules
    })
  }

  function removeRule(index) {
    setReplaceRules(prevRules => {
      let newRules = [...prevRules]
      newRules.splice(index, 1)
      return newRules
    })
  }

  function addRule() {
    setReplaceRules(prevRules => {
      let newRules = [...prevRules]
      newRules.push({find:'', regexMode:false, parse:false, replace:'',mode:'1', info:''})
      return newRules
    })
  }

  function processText(text) {
    let procText = text
    
    if (procText == null)
      return;

    let lines = procText.split('\n')

    // BY LINE PROCESSING
    lines = lines.map(line => {
      let l = line

      // Trimming line start
      if (disabledOpts && options.trimStrStartByLn && options.trimStrStart) {
        l = l.trimStart() 
      }

      // Trimming line end
      if (disabledOpts && options.trimStrEndByLn && options.trimStrEnd) {
        l = l.trimEnd() 
      }

      //if string empty don't return anything (after trimming)
      if (l.length < 1) {
        return null
      }

      // BY CHAR PROCESSING
      // special char escaping
      if (disabledOpts && options.escapeSpecialChars) {
        l = [...l].map(char => {
          if (/["'\\]/.test(char)) {
            return '\\' + char
          }
          return char
        }).join('')
      }

      // Prefix and sufix by line
      if (disabledPreSuFix && preSuFixOpts.byLn) {
        l = preSuFixOpts.prefix+l+preSuFixOpts.sufix
      }

      return l
    })

    procText = lines.join('\n')

    // WHOLE STRING PROCESSING

    // Trimming string start
    if (disabledOpts && options.trimStrStart && !options.trimStrStartByLn) {
      procText = procText.trimStart()
    }

    // Trimming string end
    if (disabledOpts && options.trimStrEnd && !options.trimStrEndByLn) {
      procText = procText.trimEnd()
    }

    let consecutiveBreaksCount = 0
    if(disabledOpts && options.deleteExtraLineBreaks) {
      procText = [...procText].map(char => {
        if (char === '\n') {
          consecutiveBreaksCount++
          if (consecutiveBreaksCount > options.permitedLineBreaks) {
            return ''
          }
        } else {
          consecutiveBreaksCount = 0
        }
        return char
      }).join('')
    }

    // REPLACE
    if (disabledReplace) {
      replaceRules.forEach((rule, index) => {
        if (rule.find.length < 1 && procText < 2)
          return
        let finalRule
        let replaceStr = rule.replace
        if (rule.regexMode) {
          try {
            finalRule = RegExp(rule.find, 'g')
          } catch (error) {
            console.error('Regular expression parsing error!')
          }
        } else {
          finalRule = rule.find
        }

        if(rule.parse) {
          try {
            procText = procText.replaceAll(finalRule, JSON.parse(`"${replaceStr}"`))
          } catch (error) {
            console.error('Replace string parsing error!')
          }
        } else {
          procText = procText.replaceAll(finalRule, replaceStr)
        }
      })
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
  }, [rawText, options, preSuFixOpts, disabledOpts, disabledPreSuFix, replaceRules, disabledReplace])

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
            disabled={disabledPreSuFix}
            setDisabledPreSuFix={setDisabledPreSuFix}
          />
          <Replace
            rules={replaceRules}
            setRule={setRule}
            removeRule={removeRule}
            disabled={disabledReplace}
            setDisabledReplace={setDisabledReplace}
            addRule={addRule}
          />
        </div>
        <div className="pane">
          <MainOutput 
            value={outputText} 
            info={infoText}
            setRawInput={setRawText}
            />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
