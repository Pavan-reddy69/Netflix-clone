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
import SearchBar from './components/SearchBar';
function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const userName = localStorage.getItem('userName');
  if (location.pathname === '/') {
    return null;
  }

  const handleLogout = () => {

    navigate('/');
  };

  return (
<header>
  <nav>
  <Link to="/home">
          <img
            src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"
            alt="logo"
            className="image1"
          />
          </Link>
    <div class="nav-links">
      <Link to="/home">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/anime">Anime</Link>
      <Link to="/series">TV Series</Link>
    </div>
    <div className='search'>
      <SearchBar/>
    </div>
    <div class="user-greeting">
          {userName && <p>Welcome Back, {userName}!</p>}
        </div>
    <Link to="/" class="log" onClick={handleLogout}>
      <FiLogOut class="logout-icon" />
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
