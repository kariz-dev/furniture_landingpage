import logo from "../../assets/logo.png";
import { BsHandbag } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import {
  Nav,
  NavWrapper,
  NavLogo,
  NavLogoImg,
  NavMenu,
  NavLink,
  NavLinkBtn
} from "./styled";

import data from "../../data";

function index() {
  return (
    <Nav>
      <NavWrapper className="container">
        <NavLogo to="/">
          <NavLogoImg src={logo}></NavLogoImg>
        </NavLogo>
        <NavMenu>
          {data.menus.map((menu) => (
            <NavLink px key={menu} to={`/${menu.link}`}>
              {menu.name}
            </NavLink>
          ))}
        </NavMenu>
        <NavMenu>
          <NavLinkBtn to="/"><BsHandbag /></NavLinkBtn>
          <NavLinkBtn margin to="/"><BiUser /></NavLinkBtn>
        </NavMenu>
      </NavWrapper>
    </Nav>
  );
}

export default index;