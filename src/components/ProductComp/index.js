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
} from "./styled";
import data from "../../data";

function ProductComp() {
  return (
    <>
      {data.product.map((item, index) => (
        <ProductWrap key={index}>
          <ProductTitle>{item.title}</ProductTitle>
          <ProductSubtitle>{item.subtitle}</ProductSubtitle>
          <ProductDesc>{item.desc}</ProductDesc>

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
        </ProductWrap>
      ))}
    </>
  );
}

export default ProductComp;
