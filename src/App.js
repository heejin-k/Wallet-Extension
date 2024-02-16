import React from 'react';
import './App.css';
import Router from 'router/router';
import { Header } from 'components';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Router />
    </div>
  );
}

export default App;
