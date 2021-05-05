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
import RegisterContainer from './containers/AccountRegisterContainer';
import Admin from './components/admin/Admin';
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
import OrderContainer from './containers/OrderContainer';
import SaleContainer from './containers/SaleContainer';
import { useEffect, useState } from 'react';
import AccountContainer from './containers/AccountContainer';
import ArticlesContainer from './containers/ArticlesContainer';
import OrdersManagerContainer from './containers/OrdersManagerContainer';
import SearchContainer from './containers/SearchContainer';


function App(props) {
	// get props
	const {
		loginedAccount
	} = props;
	
	// get state
	const [check,setCheck] = useState(false);

	useEffect(
		() => {
			const token = localStorage.getItem('token');

			if (token&&token!=='') {
				return setCheck(true);
			}

			setCheck(false);
		},[loginedAccount]
	)
	
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
						<SearchContainer/>
					</Route>

					<Route path="/account/login">
						<LoginContainer/>
					</Route>

					<Route path="/account/register">
						{
							check?<NotFound/>:<RegisterContainer />
						}
					</Route>

					<Route path="/managers" exact>
						{
							check?<Admin />:<LoginContainer/>
						}
					</Route>

					<Route path='/managers/accounts'>
						{
							check?<AccountContainer />:<LoginContainer/>
						}
					</Route>

					<Route path='/managers/categories'>
						{
							check?<CategoriesContainer />:<LoginContainer/>
						}
						
					</Route>

					<Route path='/managers/sizes'>
						{
							check?<SizesContainer />:<LoginContainer/>
						}
						
					</Route>

					<Route path='/managers/products'>
						{
							check?<ProductManagerContaner />:<LoginContainer/>
						}
					</Route>

					<Route path='/managers/articles'>
						{
							check?<ArticlesContainer />:<LoginContainer/>
						}
					</Route>

					<Route path='/managers/sales'>
						{
							check?<SaleContainer />:<LoginContainer/>
						}
						
					</Route>

					<Route path='/managers/orders'>
						{
							check?<OrdersManagerContainer />:<LoginContainer/>
						}
						
					</Route>

					<Route path='/cart'>
						<CartContainer />
					</Route>

					<Route path='/checkouts'>
						<CheckoutContainer />
					</Route>

					<Route path='/orders'>
						<OrderContainer />
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
