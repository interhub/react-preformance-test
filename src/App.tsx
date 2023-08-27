import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example1 from './examples/Example1'
import Example2 from './examples/Example2'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{display:'flex', flexDirection: 'row', width: '100%', justifyContent:'space-around'}}>
          <Example1/>
          <Example2/>
        </div>
      </header>
    </div>
  );
}

export default App;
