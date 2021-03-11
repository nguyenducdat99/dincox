import './App.css';// import style for app
import "slick-carousel/slick/slick.css"; // import style for slick carousel
import "slick-carousel/slick/slick-theme.css";// import style for slick carousel
import Slider from './components/slider/Slider';
import Policy from './components/policy/Policy';
import Footer from './components/footer/Footer';
import Copyright from './components/copyright/Copyright';
import Product from './components/product/Product';
import Article from './components/article/Article';
import ProductDetail from './components/product/productdetail/ProductDetail';
import ProductFilter from './components/product/productfilter/ProductFilter';
import AboutUs from './components/fixcontents/aboutus/AboutUs';
import PrivacyPolicy from "./components/fixcontents/privacypolicy/PrivacyPolicy";
import ReturnPolicy from "./components/fixcontents/returnpolicy/ReturnPolicy";
import StoreLocation from './components/fixcontents/storelocation/StoreLocation';
import ArticleDetail from './components/article/articledetail/ArticleDetail';
import LoginContainer from './containers/AccountLoginContainer';
import Register from './components/account/register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Admin from './components/admin/Admin';
import AccountsCtrl from './components/admin/accounts/Account';
import CategoriesContainer from './containers/CategoriesContainer';
import NotFound from './components/notfound/NotFound';
import CartContainer from './containers/CartContainer';
import HeaderContainer from './containers/HeaderContainer';

function App() {

  return (
    <div className="App">
        
        <Router>
          	<HeaderContainer/>
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

				<Route path="/products">
					<ProductFilter />
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

				<Route path="/account/login">
					<LoginContainer/>
				</Route>

				<Route path="/account/register">
					<Register/>
				</Route>

				<Route path="/managers" exact>
					<Admin />
				</Route>

				<Route path='/managers/accounts'>
					<AccountsCtrl />
				</Route>

				<Route path='/managers/categories'>
					<CategoriesContainer />
				</Route>

				<Route path='/cart'>
					<CartContainer />
				</Route>


				<Route>
					<NotFound/>
				</Route>
			</Switch>
			<Footer />
			<Copyright />
        </Router>
    </div>
  );
}

export default App;
