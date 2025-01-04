// App.js
import React from 'react';
import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom';


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
        </ul>
      </nav>
        <Routes >
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
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

