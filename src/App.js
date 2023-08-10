import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { BrowserRouter as Router, Route, Link, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CardList from './pages/Movies';
import Anime from './pages/Anime1';
import Series from './pages/Series';
import Login from './pages/LogIn';
import MoviePlayer from './components/MovieDetails';
function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();


  if (location.pathname === '/') {
    return null;
  }

  const handleLogout = () => {

    navigate('/');
  };

  return (
    <header>
      <nav>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF6-cXZHF9zeyx0mlcYdXCGm9WJs4dDDZclA&usqp=CAU" alt={"logo"} className='image1' />
        <Link to="/home">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/anime">Anime</Link>
        <Link to="/series">TV Series</Link>
        <Link to="/" className="log" onClick={handleLogout}>
              <FiLogOut className="logout-icon" />
              LogOut
            </Link>
      </nav>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<CardList />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movie/:id" element={<MoviePlayer />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
