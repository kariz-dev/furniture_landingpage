import styled from "styled-components";

function BannerComp() {
  return (
    <Banner>
      <BannerHeading>Discover Furniture With High Quality Wood</BannerHeading>
      <BannerSubheading>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.</BannerSubheading>
    </Banner>
  );
}

export default BannerComp;

const Banner = styled.div`
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 80px;
`;

const BannerHeading = styled.h1`
  font-family: "Poppins", sans-serif;
  font-width: 500;
  font-size: 60px;
  text-align: center;
  width: 80%;
  margin: 0 auto;
`;

const BannerSubheading = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 20px;
  text-align: center;
`;