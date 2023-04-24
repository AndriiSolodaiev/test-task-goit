import { useState, useEffect } from "react";
import { fetchUsers } from "../requests";
import { UserCard } from "../UserCard/UserCard";
import { TweetsListStyled, TweetsWrapper } from "./TweetsList.styled";
import { Container } from "../Container.styled";
import { Button } from "../UserCard/UserCard.styled";
import { Filter } from "../Filter/Filter";
import { getVisibleUsers } from "../../helpers/getVisibleUsers";

export const TweetsList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState("");
  useEffect(() => {
    fetchUsers(page).then((data) => setUsers((state) => [...state, ...data]));
  }, [page]);

  const filtredUsers = getVisibleUsers(filterStatus, users);
  return (
    <Container>
      <TweetsWrapper>
        <Filter getFilterStatus={setFilterStatus} />
        <TweetsListStyled>
          {filtredUsers &&
            filtredUsers.map((user) => (
              <UserCard key={user.id} userInfo={user} />
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
