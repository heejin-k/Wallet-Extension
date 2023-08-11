import React from 'react';
import './App.css';
import Router from 'router/Router';
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
