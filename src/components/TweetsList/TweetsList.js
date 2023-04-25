import { useState, useEffect, useMemo } from "react";
import { fetchUsers } from "../requests";
import { UserCard } from "../UserCard/UserCard";
import { TweetsListStyled, TweetsWrapper } from "./TweetsList.styled";
import { Container } from "../Container.styled";
import { Button } from "../UserCard/UserCard.styled";
import { Filter } from "../Filter/Filter";
import { getVisibleUsers } from "../../helpers/getVisibleUsers";
import { useCallback } from "react";
export const TweetsList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    fetchUsers(page).then((data) => setUsers((state) => [...state, ...data]));
  }, [page]);

  const handleFollowClick = useCallback(
    (userState) => {
      const updatedUserIndex = users.findIndex(
        (_user) => _user.id === userState.id
      );

      if (updatedUserIndex === -1) return;
      const userArrayCopy = [...users];
      userArrayCopy[updatedUserIndex] = userState;
      setUsers(userArrayCopy);
    },
    [users]
  );

  const filtredUsers = useMemo(
    () => getVisibleUsers(filterStatus, users),
    [users, filterStatus]
  );

  return (
    <Container>
      <TweetsWrapper>
        <Filter getFilterStatus={setFilterStatus} />
        <TweetsListStyled>
          {filtredUsers &&
            filtredUsers.map((user) => (
              <UserCard
                key={user.id}
                userInfo={user}
                onFollowClick={handleFollowClick}
              />
            ))}
        </TweetsListStyled>
        {users.length && users.length < 15 && (
          <Button type="button" onClick={() => setPage((state) => state + 1)}>
            Load More
          </Button>
        )}
      </TweetsWrapper>
    </Container>
  );
};
