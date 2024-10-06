import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Footer from './Components/Footer.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
