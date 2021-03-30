import './App.css';
import Navbar from './Components/Navbar';
import Greeting from './Components/Greeting';
import LocationCards from './Components/LocationCards';
import Information from './Components/Information';
import Forms from './Components/Forms';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting />
      <LocationCards />
      <Information />
      <Forms />
      <Footer />
    </div>
  );
}

export default App;
