export const getVisibleUsers = (filterStatus, users) => {
  switch (filterStatus) {
    case "Follow":
      return users.filter((user) => !user.isFollowing);
    case "Followings":
      return users.filter((user) => user.isFollowing);
    default:
      return users;
  }
};
