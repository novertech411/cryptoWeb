import React from "react";
import { FaTime } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLink,
  NavItem,
} from "./Nav";
import { useLocation, useHistory } from "react-router-dom";
import { data } from "../../data/NavbarData";
import { IconContext } from "react-icons/lib";

const Navbar = () => {

const [show, setShow] = useState(false);


let history = useHistory();
let location = useLocation();

const handleClick = () => {
    setShow(!show);
};

const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
        behavior:'smooth',
    })
}

const closeMobileMenu = (to,id) => {
    if (id && location.pathname === '/'){
        scrollTo(id);
    }

    history.puch(to);
    setShow(false)
}


  return (
    <IconContext.Provider value={{color:"#fff"}} >
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <navIcon src="./assets/logo.png" alt="logo">
              Delta
            </navIcon>
            <MobileIcon onclick={handleClick} >{show ? <FaTime /> : <CgMenuRight />}</MobileIcon>
            <NavMenu  show={show}>
              {data.map((el, index) => (
                <NavItem key={index}>
                  <NavLinks onClick={() => closeMobileMenu(el.to, el.id)} >{el.text}</NavLinks>
                </NavItem>
              ))}
            </NavMenu>
          </NavLogo>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
