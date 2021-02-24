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
import AboutUs from './components/fixcontents/aboutus/AboutUs';
import PrivacyPolicy from "./components/fixcontents/privacypolicy/PrivacyPolicy";
import ReturnPolicy from "./components/fixcontents/returnpolicy/ReturnPolicy";
import StoreLocation from './components/fixcontents/storelocation/StoreLocation';
import ArticleDetail from './components/article/articledetail/ArticleDetail';
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
					<ProductDetail />
				</Route>
				<Route path="/articles/:id">
					<ArticleDetail />
				</Route>
				<Route path="/about-us">
                    <AboutUs />
				</Route>
				<Route path="/privacy-policy">
                    <PrivacyPolicy />
				</Route>
				<Route path="/return-policy">
					<ReturnPolicy/>
				</Route>
				<Route path="/store-location">
					<StoreLocation/>
				</Route>
				<Route path="/search">
				</Route>
			</Switch>
			<Footer />
			<Copyright />
        </Router>
    </div>
  );
}

export default App;
