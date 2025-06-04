import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BtnArrow from "./BtnArrow";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import Nav from "./Nav";
import PageWrapper from "./PageWrapper";
function Formacion() {
  const navigate = useNavigate();

  const navHome = () => {
    navigate("/");
  };

  const navSkills = () => {
    navigate("/skills");
  };

  return (
    <PageWrapper>
      <StyledUp>
        <h1
          style={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "100%",
          }}
        >
          Desarrollos dev
        </h1>
        <Nav />
      </StyledUp>

      <StyledContainerG>
        <StyledBotonN>
          <BtnArrow onClick={navHome} />
        </StyledBotonN>

        <StyledContainerF>
          <div className="containerF">
            <img
              src="https://i.ibb.co/SXNzYrZc/Imagen-de-Whats-App-2025-06-03-a-las-10-54-36-4a50ec30.jpg"
              alt=""
            />
            <h3 className="activateF">
              Aca se agregaria la informacion extendida sobre el proyecto del
              lavadero
            </h3>
          </div>
          <div className="containerF">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoHMf7EFEC2MgIyuwkt3vuyq30PcKvuqu3g&s"
              alt=""
            />
            <h3 className="activateF">
              Aca se agregaria la informacion extendida
            </h3>
          </div>
        </StyledContainerF>

        <StyledBotonB>
          <BtnArrow
            onClick={navSkills}
            icon={
              <ArrowBackIosIcon
                sx={{ fontSize: 60, transform: "rotate(180deg)" }}
              />
            }
          />
        </StyledBotonB>
      </StyledContainerG>
    </PageWrapper>
  );
}

const StyledUp = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  position: relative;
  z-index: 1;
  width: 100%;
  justify-content: space-between;
  height: 4em;
`;

const StyledContainerG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 80vh;
`;

const StyledContainerF = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  max-height: 80vh;
  justify-content: center;
  align-items: flex-start;
  gap: 1em;

  .containerF {
    position: relative;
    border: 1px solid white;
    margin: 0.5em;
    width: 50%;
    height: 15em;
    overflow: hidden;
    transition: height 0.3s ease;
    margin-bottom: 0;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1); /* La imagen se agranda ligeramente */
      }
    }

    .activateF {
      opacity: 0;
      position: absolute;
      left: 0;
      right: 0;
      padding: 0.5em;
      margin: 0;
      background-color: rgba(0, 0, 0, 0.6);
      color: white;
      text-align: center;
      transition: opacity 0.3s ease;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    &:hover .activateF {
      opacity: 1;
    }
  }
`;

const StyledBotonB = styled.div`
  display: flex;
  width: 10%;
  align-items: center;
  justify-content: end;
`;

const StyledBotonN = styled.div`
  display: flex;
  width: 10%;
  align-items: center;
`;

export default Formacion;
