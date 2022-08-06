import {
  BannerSearch,
  BannerInput,
  BannerButton,
  BannerImg
} from './styled';
import banner from '../../assets/banner.png';

function BannerComp() {
  return (
    <>
      <BannerSearch>
        <BannerInput type="text" placeholder="Search Property" />
        <BannerButton>Search</BannerButton>
      </BannerSearch>

      <BannerImg src={banner} alt="Banner"/>
    </>
  )
}

export default BannerComp;