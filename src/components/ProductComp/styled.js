import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductWrap = styled.div`
  margin-top: 120px;
`;

export const ProductTitle = styled.h2`
  color: #ffb23f;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

export const ProductSubtitle = styled.p`
  font-size: 40px;
  line-height: 1em;
  font-weight: 600;
  margin-top: 10px;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-top: 20px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 580px;
  color: #AFADB5;
`;

export const ProductCards = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100;
  // overflow: hidden;
`;

export const ProductCard = styled.div`
  overflow: hidden;
  width: 380px;
  border-radius: 10px;
  box-shadow: 0px 1.87902px 46.9755px rgba(175, 173, 181, 0.1);
  margin-bottom: 20px;

  &:hover {
    box-shadow: 0px 1.87902px 46.9755px rgba(175, 173, 181, 0.3);
  }
`;

export const ProductCardImg = styled.img`
  width: inherit;
`;

export const ProductCardWrap = styled.div`
  padding: 10px 10px 20px 10px;
`;

export const ProductCardCategory = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #afadb5;
`;

export const ProductCardTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  margin: 4px 0;
`;

export const ProductCardDesc = styled.p`
  font-size: 16px;
  color: #afadb5;
`;

export const ProductCardPrice = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin-top: 10px;
`;

export const ProductCardLink = styled(Link)`
  cursore: pointer;
`;
