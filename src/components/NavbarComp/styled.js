import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  padding: 20px 0;
  border-bottom: 0.93951px solid #f5f2f0;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavLogo = styled(Link)``;

export const NavLogoImg = styled.img`
  width: 80px;
  height: auto;
`;

export const NavMenu = styled.div``;

export const NavLink = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-weight: 400;

  padding: ${(props) => (props.px ? "0 10px" : "0")};
`;

export const NavLinkBtn = styled.a`
  margin-left: ${(props) => (props.margin ? "14px" : "0")};
`;
