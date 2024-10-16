import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './Components/HeaderUI/Header.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import LoginHeader from './Components/HeaderUI/LoginHeader.jsx';
import DashboardHeader from './Components/HeaderUI/DashboardHeader.jsx';
import Dashboard from './Components/Dashboard.jsx';
import Posts from './Pages/Posts/Posts.jsx';
import Cookies from './Components/CookieDeclaration.jsx';
import Footer from './Components/Footer.jsx';

import './App.css';
import { useEffect } from 'react';
import About from './Components/About.jsx';

function App() {

  const location = useLocation() 
  const isLogin = location.pathname === '/login';
  const isDashboard = location.pathname === '/dashboard';

  const PickHeader = () => {
    if (isLogin) {
      return <LoginHeader/>
    } else if (isDashboard) {
      return <DashboardHeader/>
    } else {
      return <Header/>
    }
  }
  useEffect(() => {
    console.log(location.pathname)
  })

  return (
    <div className="App">
        {PickHeader()}
        <main>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/cookies' element={<Cookies />} />
            <Route path='/:postUrl' element={<Posts />} />
        </Routes>
        </main>
        {!(isLogin || isDashboard) && <Footer/> }
    </div>
  );
}

export default function Root() {
  return (
  <Router>
    <App/>
  </Router>
  )
};
