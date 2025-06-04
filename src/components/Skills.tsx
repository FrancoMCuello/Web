import styled from "styled-components";
import Stack from "@mui/material/Stack";
import MuiSlider from "@mui/material/Slider";
import { useNavigate } from "react-router-dom";
import BtnArrow from "./BtnArrow";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import Nav from "./Nav";
import PageWrapper from "./PageWrapper";

function Skills() {
  const navigate = useNavigate();
  const navForm = () => {
    navigate("/formacion");
  };
  const navContact = () => {
    navigate("/contact");
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
          Skills
        </h1>
        <Nav />
      </StyledUp>

      <StyledContainerG>
        <StyledBotonN>
          <BtnArrow onClick={navForm} />
        </StyledBotonN>

        <StyledContainerSkills>
          <div className="skillsH">
            <h3>Skills Hard</h3>
            <Stack sx={{ height: 300 }} spacing={1} padding={2} direction="row">
              <StyledSlider
                orientation="vertical"
                /* aria-label="Always visible" */
                /*  valueLabelDisplay="on" */
                defaultValue={0}
                aria-label="Small"
                valueLabelDisplay="auto"
              />
            </Stack>
            <h4>Logo Skill</h4>
          </div>
          <div className="skillsH">
            <h3>Skills Blandas</h3>
            <Stack sx={{ height: 300 }} spacing={1} padding={2} direction="row">
              <StyledSlider
                orientation="vertical"
                /* aria-label="Always visible" */
                /*  valueLabelDisplay="on" */
                defaultValue={0}
                aria-label="Small"
                valueLabelDisplay="auto"
              />
            </Stack>
            <h4>Logo Skill</h4>
          </div>
        </StyledContainerSkills>

        <StyledBotonB>
          <BtnArrow
            onClick={navContact}
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

const StyledContainerSkills = styled.div`
  display: flex;
  width: 90%;
  max-height: 80vh;
  padding: 0.5em;
  color: white;
  justify-content: center;
  align-items: center;

  .skillsH {
    display: flex;
    width: 50%;
    border: 1px solid white;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const StyledBotonN = styled.div`
  display: flex;
  width: 10%;
  align-items: center;
`;

const StyledBotonB = styled.div`
  display: flex;
  width: 10%;
  align-items: center;
  justify-content: end;
`;

const StyledSlider = styled(MuiSlider)`
  & .MuiSlider-thumb {
    display: none;
  }
`;

export default Skills;
