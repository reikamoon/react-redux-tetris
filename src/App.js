import React from 'react';
import './App.css';
import './index.css';

//Components//
import GridBoard from './components/GridBoard'
import NextBlock from './components/NextBlock'
import ScoreBoard from './components/ScoreBoard'
import Controls from './components/Controls'
import MessagePopup from './components/MessagePopUp'

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <h1 className="App-title">Tetris Redux</h1>
      </header>
      <GridBoard />
      <NextBlock />
      <ScoreBoard/>
      <Controls />
      <MessagePopup />
    </div>
  );
}

export default App;