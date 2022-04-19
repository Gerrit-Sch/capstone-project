import { NavLink } from "react-router-dom";
import { GrSearch, GrBookmark, GrHome, GrAdd, GrCatalog } from "react-icons/gr";
import styled from "styled-components";
import { IconContext } from "react-icons";

export default function Navigation() {
  return (
    <Nav>
      <LinkStyled to="/">
        <IconContext.Provider value={{ size: "40px" }}>
          <GrSearch />
        </IconContext.Provider>
      </LinkStyled>

      <LinkStyled to="/bookmarked ">
        <IconContext.Provider value={{ size: "40px" }}>
          <GrBookmark />
        </IconContext.Provider>
      </LinkStyled>

      <LinkStyled to="/listings">
        <IconContext.Provider value={{ size: "40px" }}>
          <GrHome />
        </IconContext.Provider>
      </LinkStyled>

      <LinkStyled to="/add">
        <IconContext.Provider value={{ size: "40px" }}>
          <GrAdd />
        </IconContext.Provider>
      </LinkStyled>

      <LinkStyled to="/mylistings">
        <IconContext.Provider value={{ size: "40px" }}>
          <GrCatalog />
        </IconContext.Provider>
      </LinkStyled>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  height: 48px;

  padding-top: 4px;
  padding-bottom: 4px;

  background: white;
  position: fixed;

  bottom: 0;
  width: 100%;
`;

const LinkStyled = styled(NavLink)`
  &.active {
    background: lightblue;
  }
`;
