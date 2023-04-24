import styled from "styled-components";
import bgImg from "../../img/bgImg.png";
import cardLogo from "../../img/cardLogo.png";
export const CardContainerStyled = styled.li`
  max-width: 380px;
  max-height: 460px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 28px;
  padding-bottom: 36px;
  position: relative;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const CardLogo = styled.div`
  background-image: url(${cardLogo});
  background-size: cover;
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const BgImgWrapper = styled.div`
  background-image: url(${bgImg});
  background-size: cover;

  width: 308px;
  height: 168px;
  margin-bottom: 18px;
`;

export const HorizontalLine = styled.div`
  width: 380px;
  height: 8px;
  position: relative;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  margin-bottom: 62px;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 150px;
  top: -36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50px;
`;
export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 26px;
  flex-wrap: wrap;
`;

export const UserStatistics = styled.li`
  text-transform: uppercase;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  color: #ebd8ff;
`;

export const Button = styled.button`
  font-family: inherit;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  border: none;
  text-transform: uppercase;
  width: 196px;
  color: #373737;
  padding: 14px 0;

  background-color: ${(prop) => (prop.isFollowing ? "#5CD3A8" : "#ebd8ff")};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
