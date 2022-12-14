import styled from "styled-components";

export const HeroWrapper = styled.div`
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 55px;
  position: relative;
  z-index: 1;
`;

export const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 45px;
  line-height: 1.3em;
`;

export const HeroDesc = styled.p`
  margin-top: 20px;
  font-weight: 400;
  line-height: 1.6em;
  color: #AFADB5;
`;

export const HeroStarVector = styled.img`
  position: absolute;
  top: 60px;
  right: 40px;
  width: 60px;
  z-index: -1;
`;

export const HeroArrowVector = styled.img`
  position: absolute;
  bottom: -100px;
  left: -165px;
  width: 250px;
  z-index: -2;
`;
