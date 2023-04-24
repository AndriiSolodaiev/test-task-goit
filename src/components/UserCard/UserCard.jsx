import { useCallback, useState } from "react";
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

export const UserCard = ({ userInfo }) => {
  const [user, setUser] = useState(userInfo);

  const handleClick = useCallback(() => {
    updateFollowers({
      ...user,
      isFollowing: !user.isFollowing,
      followers: user.isFollowing ? user.followers - 1 : user.followers + 1,
    }).then((data) => setUser(data));
  }, [user]);

  return (
    <CardContainerStyled>
      <CardLogo></CardLogo>
      <BgImgWrapper></BgImgWrapper>
      <HorizontalLine>
        <AvatarWrapper>
          <Avatar src={user.avatar} alt={user.user} />
        </AvatarWrapper>
      </HorizontalLine>
      <StatisticsList>
        <UserStatistics>
          {new Intl.NumberFormat("en-US").format(user.tweets)} Tweets
        </UserStatistics>
        <UserStatistics>
          {new Intl.NumberFormat("en-US").format(user.followers)} Followers
        </UserStatistics>
      </StatisticsList>
      <Button
        type="button"
        onClick={handleClick}
        isFollowing={user.isFollowing}
      >
        {user.isFollowing ? "Following" : "Follow"}
      </Button>
    </CardContainerStyled>
  );
};
