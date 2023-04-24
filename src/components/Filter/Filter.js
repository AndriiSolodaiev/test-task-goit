import "react-dropdown/style.css";
import { DropdownStyled, DropdownWrapperStyled } from "./Filter.styled";

export const Filter = ({ getFilterStatus }) => {
  const options = ["Show all", "Follow", "Followings"];
  const defaultOption = options[0];
  const filterUsers = (e) => {
    getFilterStatus(e.value);
  };

  return (
    <DropdownWrapperStyled>
      <DropdownStyled
        options={options}
        onChange={filterUsers}
        value={defaultOption}
        placeholder="Select an option"
      />
    </DropdownWrapperStyled>
  );
};
