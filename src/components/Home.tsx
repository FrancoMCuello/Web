import Nav from "./Nav";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";
import BtnArrow from "./BtnArrow";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import PageWrapper from "./PageWrapper";

function Home() {
  const navigate = useNavigate();
  const navGit = () => {
    window.location.href = "https://github.com/FrancoMCuello/";
  };

  const navFormacion = () => {
    navigate("/formacion");
  };

  return (
    <>
      <PageWrapper>
        <StyledUp>
          <Nav />
        </StyledUp>
        <StyledContainerG>
          <StyledBotonesRedes className="botonesRedes">
            <IconButton
              className="botonGit"
              onClick={navGit}
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton className="botonGit" aria-label="linkedIn">
              <LinkedInIcon />
            </IconButton>
            <IconButton className="botonGit" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
          </StyledBotonesRedes>

          <StyledTitulo>
            <h1>Hola, Somos ...</h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              dicta quibusdam, alias, ab nulla nobis quae tenetur repellendus
              soluta, harum adipisci animi quasi laudantium obcaecati sit
              veritatis ea consequuntur quam.
            </h2>
          </StyledTitulo>
          <StyledBotonTraslado>
            <BtnArrow
              onClick={navFormacion}
              icon={
                <ArrowBackIosIcon
                  sx={{
                    fontSize: 60,
                    transform: "rotate(180deg)",
                  }}
                />
              }
            />
          </StyledBotonTraslado>
        </StyledContainerG>
      </PageWrapper>
    </>
  );
}

const StyledUp = styled.div`
  display: flex;
  justify-content: flex-end;
  color: white;
  z-index: 1;
  width: 100%;
  height: 4em;
`;

const StyledContainerG = styled.div`
  display: flex;
  min-height: 80vh;
  justify-content: center;
  align-items: center;
`;

const StyledBotonesRedes = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  .botonGit {
    background-color: black;
    border-radius: 0;
    padding: 0.5em;
    border: 1px solid white;
    width: 2em;
    margin: 0.3em;
    color: white;
  }
`;

const StyledTitulo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  flex-direction: column;
  color: white;
  width: 60%;
`;

const StyledBotonTraslado = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: flex-end;
`;

export default Home;
