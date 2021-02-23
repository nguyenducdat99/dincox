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
import PrivacyPolicy from "./components/fixcontents/privacypolicy/PrivacyPolicy";
import ReturnPolicy from "./components/fixcontents/returnpolicy/ReturnPolicy";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
	// const data = [
	// 	{
	// 		id_product: 1,
	// 		id_category: 1,
	// 		id_account: 10,
	// 		product_name: 'Sản Phẩm 1',
	// 		create_ate: '',
	// 		edited_ate: '',
	// 		is_sale: 0,
	// 		description: '',
	// 		count_comment: 0,
	// 		count_buy: 0,
	// 		price: 300000,
	// 		is_active: 1
	// 	},
	// 	{
	// 		id_product: 2,
	// 		id_category: 1,
	// 		id_account: 10,
	// 		product_name: 'Sản Phẩm 2',
	// 		create_ate: '',
	// 		edited_ate: '',
	// 		is_sale: 0,
	// 		description: '',
	// 		count_comment: 0,
	// 		count_buy: 0,
	// 		price: 350000,
	// 		is_active: 1
	// 	},
	// 	{
	// 		id_product: 3,
	// 		id_category: 1,
	// 		id_account: 10,
	// 		product_name: 'Sản Phẩm 3',
	// 		create_ate: '',
	// 		edited_ate: '',
	// 		is_sale: 0,
	// 		description: '',
	// 		count_comment: 0,
	// 		count_buy: 0,
	// 		price: 375000,
	// 		is_active: 1
	// 	},
	// 	{
	// 		id_product: 4,
	// 		id_category: 1,
	// 		id_account: 10,
	// 		product_name: 'Sản Phẩm 4',
	// 		create_ate: '',
	// 		edited_ate: '',
	// 		is_sale: 0,
	// 		description: '',
	// 		count_comment: 0,
	// 		count_buy: 0,
	// 		price: 420000,
	// 		is_active: 1
	// 	},
	// 	{
	// 		id_product: 5,
	// 		id_category: 1,
	// 		id_account: 10,
	// 		product_name: 'Sản Phẩm 5',
	// 		create_ate: '',
	// 		edited_ate: '',
	// 		is_sale: 0,
	// 		description: '',
	// 		count_comment: 0,
	// 		count_buy: 0,
	// 		price: 305000,
	// 		is_active: 1
	// 	},
	// 	{
	// 		id_product: 6,
	// 		id_category: 1,
	// 		id_account: 10,
	// 		product_name: 'Sản Phẩm 6',
	// 		create_ate: '',
	// 		edited_ate: '',
	// 		is_sale: 1,
	// 		description: '',
	// 		count_comment: 0,
	// 		count_buy: 0,
	// 		price: 275000,
	// 		is_active: 1
	// 	},
	// 	{
	// 		id_product: 7,
	// 		id_category: 1,
	// 		id_account: 10,
	// 		product_name: 'Sản Phẩm 7',
	// 		create_ate: '',
	// 		edited_ate: '',
	// 		is_sale: 1,
	// 		description: '',
	// 		count_comment: 0,
	// 		count_buy: 0,
	// 		price: 410000,
	// 		is_active: 1
	// 	},
	// 	{
	// 		id_product: 8,
	// 		id_category: 1,
	// 		id_account: 10,
	// 		product_name: 'Sản Phẩm 8',
	// 		create_ate: '',
	// 		edited_ate: '',
	// 		is_sale: 1,
	// 		description: '',
	// 		count_comment: 0,
	// 		count_buy: 0,
	// 		price: 340000,
	// 		is_active: 1
	// 	},
	// 	{
	// 		id_product: 9,
	// 		id_category: 1,
	// 		id_account: 10,
	// 		product_name: 'Sản Phẩm 9',
	// 		create_ate: '',
	// 		edited_ate: '',
	// 		is_sale: 1,
	// 		description: '',
	// 		count_comment: 0,
	// 		count_buy: 0,
	// 		price: 410000,
	// 		is_active: 1
	// 	},
	// 	{
	// 		id_product: 10,
	// 		id_category: 1,
	// 		id_account: 10,
	// 		product_name: 'Sản Phẩm 10',
	// 		create_ate: '',
	// 		edited_ate: '',
	// 		is_sale: 1,
	// 		description: '',
	// 		count_comment: 0,
	// 		count_buy: 0,
	// 		price: 275000,
	// 		is_active: 1
	// 	}
	// ];

  return (
    <div className="App">
        <p>Hello</p>
        {/* <Router>
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
				<Route path="/pages/privacy-policy">
                    <SmallBanner title="Chính sách bảo mật"/>
                    <PrivacyPolicy />
				</Route>
				<Route path="/pages/return-policy">
                    <SmallBanner title="Chính sách hoàn trả"/>
					<ReturnPolicy/>
				</Route>
				<Route path="/pages/search">
                    <SmallBanner title="Tìm kiếm"/>
					<ReturnPolicy/>
				</Route>
			</Switch>
			<Footer />
			<Copyright />
        </Router> */}
    </div>
  );
}

export default App;
