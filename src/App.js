import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import NewsApi from './components/NewsApi';
import CovidData from './components/CovidData';
import Advice from './components/Advice';
function App() {
  return (
    <div className='App'>
      <CovidData />
    </div>
  );
}

export default App;
