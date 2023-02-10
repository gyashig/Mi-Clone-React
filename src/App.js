
import './App.css';
import Prenavbar from './components/Prenavbar';
import NavBar from './components/NavBar';
import { BrowserRouter as Router} from "react-router-dom"
import Sliders from './components/Sliders';
import data from './data/data.json';
import Offers from "./components/Offers"
import Headings from "./components/Headings"
import StarProducts from "./components/StarProducts"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu"
import ProductReviews from './components/ProductReviews';
import Videos from"./components/Videos"
import Banner from "./components/Banner"
import Footer from './components/Footer';
import NavOptions from "./components/NavOptions"


// const {banner}=data;

function App() {
  return (
    <Router>
      <Prenavbar/>
      <NavBar/>
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifestyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories}/>
      <Sliders start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Headings text="STAR PRODUCTS"/>
      <StarProducts starProduct={data.starProduct}/>
      <Headings text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu/>
      
       <Headings text="PRODUCT REVIEWS"/>
       <ProductReviews productReviews={data.productReviews}/>
       <Headings text="VIDEOS"/>
       <Videos videos={data.videos}/>
       <Headings text="IN THE PRESS "/>
       <Banner banner={data.banner}/>
       <Footer footer={data.footer}/>
    </Router>
    
  );
}

export default App;
