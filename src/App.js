import './App.css';// import style for app
import "slick-carousel/slick/slick.css"; // import style for slick carousel
import "slick-carousel/slick/slick-theme.css";// import style for slick carousel
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import Policy from './components/policy/Policy';
import Footer from './components/footer/Footer';
import Copyright from './components/copyright/Copyright';
import Product from './components/product/Product';
import Article from './components/article/Article';
import ProductDetail from './components/product/productdetail/ProductDetail';
import SmallBanner from './components/fixcontents/smallbanner/SmallBanner';
import AboutUs from './components/fixcontents/aboutus/AboutUs';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Slider />
              <Policy />
              <Product />
              <Article />
            </Route>
            <Route path="/products/:id">
              <SmallBanner title="Chi tiết sản phẩm"/>
              <ProductDetail />
            </Route>
            <Route path="/pages/about-us">
                <SmallBanner title="Giới thiệu"/>
                <AboutUs />
            </Route>
          </Switch>
          <Footer />
          <Copyright />
        </Router>

    </div>
  );
}

export default App;
