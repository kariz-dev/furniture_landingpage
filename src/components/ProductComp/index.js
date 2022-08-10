import {
  ProductWrap,
  ProductTitle,
  ProductSubtitle,
  ProductDesc,
  ProductCards,
  ProductCardLink,
  ProductCard,
  ProductCardImg,
  ProductCardWrap,
  ProductCardCategory,
  ProductCardTitle,
  ProductCardDesc,
  ProductCardPrice,
  ProductRow,
  ProductCol,
  ProductCount,
} from "./styled";
import data from "../../data";

function ProductComp() {
  return (
    <>
      {data.product.map((item, index) => (
        <ProductWrap key={index}>
          <ProductTitle>{item.title}</ProductTitle>
          <ProductSubtitle>{item.subtitle}</ProductSubtitle>
          <ProductDesc width="580px" marginTop="20px">
            {item.desc}
          </ProductDesc>

          <ProductCards>
            {item.card.map((item) => (
              <ProductCardLink to={item.link}>
                <ProductCard>
                  <ProductCardImg src={item.img} />
                  <ProductCardWrap>
                    <ProductCardCategory>{item.category}</ProductCardCategory>
                    <ProductCardTitle>{item.title}</ProductCardTitle>
                    <ProductCardDesc>{item.desc}</ProductCardDesc>
                    <ProductCardPrice>{item.price}</ProductCardPrice>
                  </ProductCardWrap>
                </ProductCard>
              </ProductCardLink>
            ))}
          </ProductCards>

          <ProductTitle align="left" marginTop="60px">
            Our Product
          </ProductTitle>

          <ProductRow>
            <ProductCol>
              <ProductSubtitle align="left">
                Crafted by talented and high quality material
              </ProductSubtitle>
            </ProductCol>
            <ProductCol>
              <ProductCount>
                <ProductSubtitle>20+</ProductSubtitle>
                <ProductDesc>Years Experience</ProductDesc>
              </ProductCount>
              <ProductCount>
                <ProductSubtitle>483</ProductSubtitle>
                <ProductDesc>Happy Client</ProductDesc>
              </ProductCount>
              <ProductCount>
                <ProductSubtitle>150+</ProductSubtitle>
                <ProductDesc>Project Finished</ProductDesc>
              </ProductCount>
            </ProductCol>
          </ProductRow>
        </ProductWrap>
      ))}
    </>
  );
}

export default ProductComp;
