import MainInput from './components/MainInput';
import MainOutput from './components/MainOutput';
import Options from './components/Options';
import PreSuFix from './components/PreSuFix';
import Replace from './components/Replace';
import './css/app.css';

function App() {
  return (
    <div className="wrapper">
      <h1>Multiline Formatter</h1>
      <div className="container">
        <div className="pane">
          <MainInput />
          <Options />
          <PreSuFix />
          <Replace />
        </div>
        <div className="pane">
          <MainOutput />
        </div>
      </div>
    </div>
  );
}

export default App;
