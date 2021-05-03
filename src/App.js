import React from 'react';
import './App.css';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

//Components//
import GridBoard from './components/GridBoard'
import NextBlock from './components/NextBlock'
import ScoreBoard from './components/ScoreBoard'
import Controls from './components/Controls'
import MessagePopup from './components/MessagePopUp'

const store = createStore(reducers)

function App() {
  return (
   <Provider store={store}>
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
   </Provider>
  );
}

export default App;