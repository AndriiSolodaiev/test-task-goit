import axios from "axios";

axios.defaults.baseURL = "https://6441ccae76540ce2257e8e24.mockapi.io";

export const fetchUsers = async (page) => {
  try {
    const res = await axios(`/users?page=${page}&limit=3`);
    return res.data;
  } catch (error) {
    return console.log(error.message);
  }
};

export const updateFollowers = async (newUserInfo) => {
  try {
    const { data } = await axios.put(`/users/${newUserInfo.id}`, {
      ...newUserInfo,
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
