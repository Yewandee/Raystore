import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './components/signin/signin.js';
import Signup from './components/signup/signup';
import HomeSlide from './components/home/homeslide';
import About from './components/home/about';
import Logout from './components/logout/logout';
import Footer from './components/footer/footer';
import Shop from './components/shop/shop';

function App() {
  return (
    <div className="Container">
      <Router>
        <Header />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomeSlide />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
      <HomeSlide/>
      <About/>
      <Shop/>
      <Footer/>

    </div>
  );
}

export default App;
