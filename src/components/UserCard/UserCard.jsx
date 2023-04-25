import { updateFollowers } from "../requests";
import {
  Avatar,
  AvatarWrapper,
  BgImgWrapper,
  Button,
  CardContainerStyled,
  CardLogo,
  HorizontalLine,
  StatisticsList,
  UserStatistics,
} from "./UserCard.styled";

export const UserCard = ({ userInfo, onFollowClick }) => {
  const handleClick = () => {
    updateFollowers({
      ...userInfo,
      isFollowing: !userInfo.isFollowing,
      followers: userInfo.isFollowing
        ? userInfo.followers - 1
        : userInfo.followers + 1,
    }).then(onFollowClick);
  };

  return (
    <CardContainerStyled>
      <CardLogo></CardLogo>
      <BgImgWrapper></BgImgWrapper>
      <HorizontalLine>
        <AvatarWrapper>
          <Avatar src={userInfo.avatar} alt={userInfo.user} />
        </AvatarWrapper>
      </HorizontalLine>
      <StatisticsList>
        <UserStatistics>
          {new Intl.NumberFormat("en-US").format(userInfo.tweets)} Tweets
        </UserStatistics>
        <UserStatistics>
          {new Intl.NumberFormat("en-US").format(userInfo.followers)} Followers
        </UserStatistics>
      </StatisticsList>
      <Button
        type="button"
        onClick={handleClick}
        isFollowing={userInfo.isFollowing}
      >
        {userInfo.isFollowing ? "Following" : "Follow"}
      </Button>
    </CardContainerStyled>
  );
};
