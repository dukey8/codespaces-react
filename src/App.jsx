import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Catchers } from './pages/Catchers';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Home/> }></Route>
          <Route path="/eye-catchers/:id" element={<Catchers/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
