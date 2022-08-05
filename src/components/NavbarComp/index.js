import logo from "../../assets/logo.png";
import {
  Nav,
  NavWrapper,
  NavLogo,
  NavLogoImg,
  NavMenu,
  NavLink,
} from "./styled";

import menus from "../../data/menus.js";

function index() {
  return (
    <Nav>
      <NavWrapper className="container">
        <NavLogo>
          <NavLink href="/">
            <NavLogoImg src={logo}></NavLogoImg>
          </NavLink>
        </NavLogo>
        <NavMenu>
          {menus.map((menu) => (
            <NavLink key={menu} href={`/${menu.link}`}>
              {menu.name}
            </NavLink>
          ))}
        </NavMenu>
        <NavMenu>
          <NavLink href="/">test</NavLink>
          <NavLink href="/">tests</NavLink>
        </NavMenu>
      </NavWrapper>
    </Nav>
  );
}

export default index;
