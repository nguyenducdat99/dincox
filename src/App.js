import './App.css';// import style for app
import "slick-carousel/slick/slick.css"; // import style for slick carousel
import "slick-carousel/slick/slick-theme.css";// import style for slick carousel
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import Policy from './components/policy/Policy';
import Footer from './components/footer/Footer';
import Copyright from './components/copyright/Copyright';
import Product from './components/product/Product';

function App() {
  return (
    <div className="App">
        {/* <Header />
        <Slider />
        <Policy />
        <Footer />
        <Copyright /> */}
        <Product />
    </div>
  );
}

export default App;
