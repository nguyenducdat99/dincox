import Header from './components/header/Header';
import './App.css';
import Slider from './components/slider/Slider';
import Support from './components/support/Support';
import Policy from './components/policy/Policy';
function App() {
  return (
    <div className="App">
        <Header />
        <Support />
        <Slider />
        <Policy />
    </div>
  );
}

export default App;
