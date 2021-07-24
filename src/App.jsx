import './App.css';
import {Router} from '@reach/router';
import Home from './Pages/Home';
import Japan from './Pages/Japan';
import Brazil from './Pages/Brazil';
import Norway from './Pages/Norway';
import Austrailia from './Pages/Austrailia';
import FindAgent from './Pages/FindAgent';
import Blog from './Pages/Blog';
import Locations from './Pages/Locations';

function App() {
  return (
    <div className="App">
  
      <Router>
        <Home path="/" />
        <Japan path="/japan" />
        <Brazil path="/brazil" />
        <Norway path="/norway" />
        <Austrailia path="/austrailia" />
        <FindAgent path="/findagent" />
        <Blog path="/blog" />
        <Locations path="/locations" />
      </Router>

    </div>
  );
}

export default App;
