import styled from "styled-components";

export const ServiceWrap = styled.div`
  margin-top: 100px;
`;

export const ServiceTitle = styled.h2`
  color: #ffb23f;
  font-size: 18px;
  font-weight: 600;
`;

export const ServiceSubtitle = styled.p`
  font-size: 40px;
  line-height: 1em;
  font-weight: 600;
  width: 450px;
  margin-top: 10px;
`;

export const ServiceDesc = styled.p`
  width: 450px;
`;

export const ServiceRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const ServiceCol = styled.div``;

export const ServiceCard = styled.div`
  box-shadow: 0px 1.87902px 46.9755px rgba(175, 173, 181, 0.1);
  border-radius: 10px;
  width: 375px;
  padding: 20px 20px 30px 20px;
  cursor: pointer;

  &:hover {
    background: #518581;
    color: #fff !important;
  }
`;

export const ServiceCardImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const ServiceCardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 8px 0;
`;

export const ServiceCardDesc = styled.p``;