import { useNavigate } from "react-router-dom";
import { BackButtonStyled } from "./BackButton.styled";
import { RiDeleteBack2Fill } from "react-icons/ri";
export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <BackButtonStyled type="button" onClick={() => navigate("/")}>
      {<RiDeleteBack2Fill size={28} color="#502E9C" />} Back
    </BackButtonStyled>
  );
};
