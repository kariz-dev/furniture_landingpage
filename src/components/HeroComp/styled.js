import styled from "styled-components";

export const HeroWrapper = styled.div`
  text-align: center;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 55px;
  position: relative;
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
`;

export const HeroStarVector = styled.img`
  position: absolute;
  top: 65px;
  right: 40px;
  width: 60px;
`;

export const HeroArrowVector = styled.img`
  position: absolute;
  bottom: -100px;
  left: -165px;
  width: 250px;
`;
