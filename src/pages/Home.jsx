import BannerComp from "../components/BannerComp";
import HeroComp from "../components/HeroComp";
import ServicesComp from "../components/ServicesComp";

function Home() {
  return (
    <div className="container">
      <HeroComp />
      <BannerComp />
      <ServicesComp />
    </div>
  );
}

export default Home;