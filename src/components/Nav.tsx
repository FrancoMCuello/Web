import { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <ContainerNav>
      <ContainerIcon>
        <MenuIcon onClick={openNav} sx={{ fontSize: 50 }} />
      </ContainerIcon>
      {menuOpen && (
        <Menu>
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/formacion">Proyectos</MenuItem>
          <MenuItem href="/skills">Skills</MenuItem>
          <MenuItem href="/contact">Contacto</MenuItem>
        </Menu>
      )}
    </ContainerNav>
  );
}

const ContainerNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 1em 1em 0 0;
  position: relative;
  z-index: 2;
`;

const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #9b9393;
    box-shadow: 0 0 5px #9b9393, 0 0 25px #9b9393, 0 0 50px #9b9393,
      0 0 100px #9b9393, 0 0 300px #9b9393;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 60px;
  right: 0;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  padding: 10px;
  z-index: 100;
`;

const MenuItem = styled.a`
  display: block;
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: rgb(82, 80, 80);
  }
`;

export default Nav;
