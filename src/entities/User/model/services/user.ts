import axios from 'axios';

export const updateUserName = async (id: string, name: string) => {
  try {
    const response = await axios.put(`http://localhost:8000/users/${id}`, {
      name,
    });

    return response.data;
  } catch (e) {
    console.log("Updating user's name error ==>", e);
  }
};

export const deleteUserAccount = async (id: string) => {
  try {
    const response = await axios.delete(`http://localhost:8000/users/${id}`);

    return response.data;
  } catch (e) {
    console.log("Deleting user's account error ==>", e);
  }
};
