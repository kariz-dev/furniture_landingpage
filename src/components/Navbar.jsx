import React from "react";
import styled from "styled-components";
import { FaShoppingBag, FaUser} from "react-icons/fa";

const Navbar = styled.nav`
  background: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: 2px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  border-bottom: 0.93951px solid #F5F2F0;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavbarBrand = styled.div``;

const NavbarMenu = styled.ul`
  display: flex;
  gap: 28px;
  padding: 0;
`;

const NavbarItem = styled.li`
  list-style: none;
`;

const NavbarLink = styled.a`
  color: #151411;
  text-decoration: none;
  cursor: pointer;
  font-style: normal;
  font-weight: normal;
  font-weight: 500;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
`;

const NavbarUser = styled.div`
  a {
    margin-right: 12px;

    &:not(:first-child) {
      margin-right: 0;
    }
  }
`;

export const NavbarComp = () => {
  return (
    <Navbar id="navbar">
      <NavbarContainer>
        <NavbarBrand>
          <NavbarLink href="#">Furniutre</NavbarLink>
        </NavbarBrand>
        <NavbarMenu>
          <NavbarItem>
            <NavbarLink href="#">product</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">services</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">article</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">about Us</NavbarLink>
          </NavbarItem>
        </NavbarMenu>
        <NavbarUser>
          <NavbarLink href="#"><FaShoppingBag/></NavbarLink>
          <NavbarLink href="#"><FaUser/></NavbarLink>
        </NavbarUser>
      </NavbarContainer>
    </Navbar>
  );
};

export default NavbarComp;
