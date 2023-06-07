import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from './components/screens/Dashboard';
import Security from './components/screens/Security';
import Trading from './components/screens/Trading';
import Settings from './components/screens/Settings';
import Transaction from './components/screens/Transaction';
import Wallet from './components/screens/Wallet';
import Nav from './components/includes/Nav';


function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='Security' element={<Security/>}></Route>
          <Route path='Trading' element={<Trading/>}></Route>
          <Route path='Settings' element={<Settings/>}></Route>
          <Route path='Transaction' element={<Transaction/>}></Route>
          <Route path='Wallet' element={<Wallet/>}></Route>
        </Routes>
      </Router>
 
    </>
  );
}

export default App;
