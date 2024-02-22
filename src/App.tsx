import './App.css';
import Router from './router/Router.tsx';
import { GnbBar } from './components/module';

function App() {
  return (
    <div className="App">
      <GnbBar />
      <Router />
    </div>
  );
}

export default App;
