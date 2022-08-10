import BannerComp from "../components/BannerComp";
import HeroComp from "../components/HeroComp";
import ServicesComp from "../components/ServicesComp";
import ProductComp from "../components/ProductComp";
import ArticleComp from "../components/ArticleComp";

function Home() {
  return (
    <div className="container">
      <HeroComp />
      <BannerComp />
      <ServicesComp />
      <ProductComp />
      <ArticleComp />
    </div>
  );
}

export default Home;