import BannerComp from "../components/BannerComp";
import HeroComp from "../components/HeroComp";

function Home() {
  return (
    <div className="container">
      <HeroComp />
      <BannerComp />
    </div>
  );
}

export default Home;