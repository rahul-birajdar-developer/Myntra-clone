import "./App.css";
import Footer from "./Component/footer";
import HeroSectionTopImage from "./Component/herosection";
import HeroSection from "./Component/herosectionMain";
import MedalBrand from "./Component/medalBrand";
import AppNavbar from "./Component/navbar";
import ReductionImage from "./Component/reduction";
import RisingContainer from "./Component/risingContainer";
import ShoppingCategory from "./Component/shoppingCategory";
import TopBrand from "./Component/topBrand";

function App() {
  return (
    <>
      <AppNavbar />
      <HeroSectionTopImage />
      <HeroSection />
      <div class="text-banner-container">
        <h4 class="text-banner-title">RISING STARS</h4>
        <h4 class="text-banner-subtitle"></h4>
      </div>
      <RisingContainer />
      <div class="text-banner-container">
        <h4 class="text-banner-title">LUXE GRAND REDUCTION DEALS</h4>
        <h4 class="text-banner-subtitle"></h4>
      </div>
      <ReductionImage />
      <div class="text-banner-container">
        <h4 class="text-banner-title">Medal Worthy Brands To Bag</h4>
        <h4 class="text-banner-subtitle"></h4>
      </div>
      <MedalBrand />
      <div class="text-banner-container">
        <h4 class="text-banner-title">Grand Global Brands</h4>
        <h4 class="text-banner-subtitle"></h4>
      </div>
      <TopBrand/>
      <div class="text-banner-container">
        <h4 class="text-banner-title">Shop By Category</h4>
        <h4 class="text-banner-subtitle"></h4>
      </div>
      <ShoppingCategory/>
      <ShoppingCategory/>
      <Footer/>
    </>
  );
}

export default App;
