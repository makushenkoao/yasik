import {$api} from '@shared/api/api.ts';

interface UpdateUserArgs {
  id?: string;
  name: string;
}

export const updateUser = async (args: UpdateUserArgs) => {
  const {id, name} = args;

  try {
    const response = await $api.put(`/users/${id}`, {name});

    return response.data;
  } catch (e) {
    console.log("Updating user's name error ==>", e);
  }
};

export const deleteUserAccount = async (id?: string) => {
  try {
    const response = await $api.delete(`/users/${id}`);

    return response.data;
  } catch (e) {
    console.log("Deleting user's account error ==>", e);
  }
};

export const getUserDataByToken = async () => {
  try {
    const response = await $api.post('/auth');

    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};
