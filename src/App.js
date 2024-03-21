import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Components/Login.js';
import Signup from './Components/Signup.js';
import Register from './Components/Register.js';
import Home from './Components/Home.js';

function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
