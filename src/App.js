import React from 'react';
import logo from './logo.svg';
import ReactPDF, { PDFViewer } from '@react-pdf/renderer';
import './App.css';
import PDFTest from './Components/PDFTest';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <div>
        <PDFViewer>
          <PDFTest />
        </PDFViewer>
      </div>
    </div>
  );
}

// ReactPDF.render(<PDFTest />, `${__dirname}/example.pdf`);

export default App;
