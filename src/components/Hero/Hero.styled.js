import styled from "styled-components";
import homeBg from "../../img/homeBg.jpg";
export const BackgroundStyled = styled.div`
  background-image: url(${homeBg});
  background-size: cover;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleStyled = styled.h1`
  font-size: 120px;
  color: white;
`;
