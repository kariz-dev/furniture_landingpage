import BannerComp from "../components/BannerComp";
import HeroComp from "../components/HeroComp";
import ServicesComp from "../components/ServicesComp";
import ProductComp from "../components/ProductComp";

function Home() {
  return (
    <div className="container">
      <HeroComp />
      <BannerComp />
      <ServicesComp />
      <ProductComp />
    </div>
  );
}

export default Home;