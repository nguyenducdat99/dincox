import Header from './components/header/Header';
import './App.css';
import Slider from './components/slider/Slider';
import Policy from './components/policy/Policy';
import Footer from './components/footer/Footer';
import Copyright from './components/copyright/Copyright';

function App() {
  return (
    <div className="App">
        <Header />
        <Slider />
        <Policy />
        <Footer />
        <Copyright />
    </div>
  );
}

export default App;
