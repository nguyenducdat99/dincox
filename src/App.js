import './App.css';// import style for app
import "slick-carousel/slick/slick.css"; // import style for slick carousel
import "slick-carousel/slick/slick-theme.css";// import style for slick carousel
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Slider from './components/slider/Slider';
import Policy from './components/policy/Policy';
import Footer from './components/footer/Footer';
import Copyright from './components/copyright/Copyright';
import Product from './components/product/Product';
import ProductFilterContainer from './containers/ProductFilterContainer';
import AboutUs from './components/fixcontents/aboutus/AboutUs';
import PrivacyPolicy from "./components/fixcontents/privacypolicy/PrivacyPolicy";
import ReturnPolicy from "./components/fixcontents/returnpolicy/ReturnPolicy";
import StoreLocation from './components/fixcontents/storelocation/StoreLocation';
import LoginContainer from './containers/AccountLoginContainer';
import Register from './components/account/register/Register';
import Admin from './components/admin/Admin';
import AccountsCtrl from './components/admin/accounts/Account';
import CategoriesContainer from './containers/CategoriesContainer';
import NotFound from './components/notfound/NotFound';
import CartContainer from './containers/CartContainer';
import HeaderContainer from './containers/HeaderContainer';
import SizesContainer from './containers/SizesContainer';
import ProductDetailContainer from './containers/ProductDetailContainer';
import ArticleUIContainer from './containers/ArticleUIContainer';
import ArticleDetailContainer from './containers/ArticleDetailContainer';
import ProductManagerContaner from './containers/ProductManagerContaner';
import CheckoutContainer from './containers/CheckoutContainer';
import Search from './components/fixcontents/search/Search';


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
						<ArticleUIContainer />
					</Route>

					<Route path="/products/:id">
						<ProductDetailContainer />
					</Route>

					<Route path="/collections" exact>
						<ProductFilterContainer />
					</Route>

					<Route path="/collections/:id">
						<ProductFilterContainer />
					</Route>

					<Route path="/articles/:id">
						<ArticleDetailContainer />
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
						<Search/>
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

					<Route path='/managers/sizes'>
						<SizesContainer />
					</Route>

					<Route path='/cart'>
						<CartContainer />
					</Route>

					<Route path='/managers/products'>
						<ProductManagerContaner />
					</Route>

					<Route path='/checkouts'>
						<CheckoutContainer />
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
