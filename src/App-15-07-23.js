import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  let $name = "Murugan";
  var $a = 6;
  var $b = 5;
  var style = {
    color : 'red',
    background : 'yellow' 
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 style={{ color:'red', background : 'yellow', border : '.5px solid' }}>My Daughter is Keerthi.R</h1>
        <h2 style={style}>My Father name is : {$name}</h2>
        <h3>Sum Total is : {$a + $b } </h3>
        <h1 style={{
                padding: '2%',
                background: '#308D46',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: '4%',
                display: 'inline-block'
            }}> We are currently using react version {React.version}</h1>

        <h3>keerthi</h3>
      </header>
    </div>
  );
}

export default App;
