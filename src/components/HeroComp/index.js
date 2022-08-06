import { HeroWrapper, HeroTitle, HeroDesc, HeroArrowVector, HeroStarVector } from "./styled";
import data from "../../data";
import arrowVector from '../../assets/arrow-spiral.svg';
import starVector from '../../assets/stars-plus.svg';

function HeroComp() {
  return (
    <>
      {data.hero.map((hero) => (
        <HeroWrapper key={hero}>
          <HeroTitle>{hero.title}</HeroTitle>
          <HeroDesc>{hero.desc}</HeroDesc>
          <HeroStarVector src={starVector} alt="star-vector" />
          <HeroArrowVector src={arrowVector} alt="arrow-vector" />
        </HeroWrapper>
      ))}
    </>
  );
}

export default HeroComp;
