import Project from './components/Project';
import { BrowserRouter as Router, Routes, Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectDetails from './pages/ProjectDetails';
import Home from './pages/Home';
import ProjectTabsDisplay from './pages/ProjectTabsDisplay';
import Login from './pages/Login';
import { useState } from 'react';

function App() {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<ProjectTabsDisplay />} />
        <Route path="/project/:userId" element={<ProjectDetails />} />

        { isAuthenticated ? <Route path="/add-project" element={<Project />} /> : <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} /> }
      </Routes>

    </Router>
  );
}

export default App;
