import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import IconLogo from '../../images/Cat-Logo.svg'
import { 
   Nav,
   NavbarContainer,
   NavLogo,
   MobileIcon,
   NavMenu,
   NavItem,
   NavLinks,
   Navbtn,
   NavBtnLink,
   ImgLogo
} from './NavbarElements';



const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect (() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  
    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
          <Nav scrollNav={scrollNav}>
            <NavbarContainer>
              <NavLogo to='/' onClick={toggleHome}>
                <ImgLogo src={IconLogo}/>
              </NavLogo>
              <MobileIcon onClick={ toggle }>
                <FaBars />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks to='about'
                  smooth={true} duration={500} spy={true} exact='true' offset={-80}>Nosotros</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='discover'
                  smooth={true} duration={500} spy={true} exact='true' offset={-80} >Vision</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='services'
                  smooth={true} duration={500} spy={true} exact='true' offset={-80}>Galeria</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to='signup'
                  smooth={true} duration={500} spy={true} exact='true' offset={-80}>Adopciones</NavLinks>
                </NavItem>
              </NavMenu>
              <Navbtn>
                <NavBtnLink to="/">Donaciones</NavBtnLink>
              </Navbtn>
            </NavbarContainer>
          </Nav>
          </IconContext.Provider>
        </>
      );
};

export default Navbar;