import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNewOutlined"; // Importar el ícono si lo necesitas
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[200],
    },
  },
});

interface BtnProps {
  onClick: () => void;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
const BtnArrow: React.FC<BtnProps> = ({
  onClick,
  icon = <ArrowBackIosIcon sx={{ fontSize: 60 }} color="primary" />,
  className,
  style,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton className={className} style={style} onClick={onClick}>
        {icon}
      </StyledButton>
    </ThemeProvider>
  );
};

const StyledButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eeeeee;
  padding: 0;

  &:hover {
    background-color: #9b9393;
    box-shadow: 0 0 5px #9b9393, 0 0 25px #9b9393, 0 0 50px #9b9393,
      0 0 100px #9b9393, 0 0 300px #9b9393;
  }
`;

export default BtnArrow;
