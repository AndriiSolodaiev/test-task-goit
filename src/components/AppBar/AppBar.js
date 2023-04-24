import { HeaderBg, NavigationList, BarLinks, NavStyled } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <HeaderBg>
      <NavStyled>
        <NavigationList>
          <li>
            <BarLinks to="/">Home</BarLinks>
          </li>
          <li>
            <BarLinks to="/tweets">Tweets</BarLinks>
          </li>
        </NavigationList>
      </NavStyled>
    </HeaderBg>
  );
};
