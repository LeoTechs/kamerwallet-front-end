import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route exact path="/" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
