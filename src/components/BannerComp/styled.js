import styled from "styled-components";

export const BannerSearch = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 55px;
  width: 600px;
  height: 50px;
  display: flex;
  justify-content: center;

  box-shadow: 0px 1.87902px 37.5804px rgba(175, 173, 181, 0.2);
  z-index: 1;
`;

export const BannerInput = styled.input`
  border: 2px solid #518581;
  padding: 10px 22px;
  border-radius: 10px 0 0 10px;
  width: inherit;
  font-size: 14px;

  &:focus {
    outline: none;
    color: #518581;
  }
`;

export const BannerButton = styled.button`
  border: 2px solid #518581;
  background: #518581;
  color: #fff;
  padding: 10px 40px;
  cursor: pointer;
  border-radius: 0 10px 10px 0;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    border: 2px solid #151411;
    background: #151411;
    color: #fff;
  }
`;

export const BannerImg = styled.img`
  width: inherit;
  border-radius: 8px;
  margin-top: -25px;
  z-index: -1;
  position: relative;
`;