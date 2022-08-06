import {
  BannerSearch,
  BannerInput,
  BannerButton,
  BannerImg
} from './styled';
import data from '../../data';

function BannerComp() {
  return (
    <>
      <BannerSearch>
        <BannerInput type="text" placeholder="Search Property" />
        <BannerButton>Search</BannerButton>
      </BannerSearch>

      {data.banner.map((item, index) => (
        <BannerImg key={index} src={item.img} alt={item.alt} />
      ))}
    </>
  )
}

export default BannerComp;