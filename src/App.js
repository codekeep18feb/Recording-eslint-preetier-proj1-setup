// App.js
import React from 'react';
import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom';
import ToDos from './components/ToDos';
import Signup from './components/SignupControlled';
import SignupUnControlled from './components/SignupUnControlled';


const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const NotFound = () => <h2>404 Page Not Found</h2>;

const App = () => {
  return (
    <Router>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        
          <li>
            <Link to="/todos">Todos</Link>
          </li>
        
        </ul>
      </nav>
        <Routes >
        <Route path="/todos" element={<ToDos />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup_cont" element={<Signup />} />
        <Route path="/signup_uncont" element={<SignupUnControlled />} />
        {/* <Route e={NotFound} /> */}
      
        </Routes>

        <Routes >
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route e={NotFound} /> */}
      
        </Routes>
      </Router>
  );
};

export default App;

