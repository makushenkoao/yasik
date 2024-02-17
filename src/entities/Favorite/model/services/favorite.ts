import {$api} from '@shared/api/api.ts';
import {Favorite} from '@entities/Favorite';

interface AddToFavoritesArgs {
  userId: string;
  movieId: number;
  title: string;
  backdrop_path: string;
}
interface RemoveFromFavoritesArgs {
  movieId: number;
  userId: string;
}
interface GetFavoritesByUserIdArgs {
  userId: string;
}

export const addToFavorites = async (args: AddToFavoritesArgs) => {
  const {userId, movieId, backdrop_path, title} = args;

  try {
    const response = await $api.post('/favorites', {
      userId,
      movieId,
      title,
      backdrop_path,
    });

    return response.data;
  } catch (error) {
    console.error('Error adding to favorites:', error);
    throw error;
  }
};

export const removeFromFavorites = async (args: RemoveFromFavoritesArgs) => {
  const {userId, movieId} = args;

  try {
    const response = await $api.delete('/favorites', {
      data: {userId, movieId},
    });

    return response.data;
  } catch (error) {
    console.error('Error removing from favorites:', error);
    throw error;
  }
};

export const getFavoritesByUserId = async (
  args: GetFavoritesByUserIdArgs,
): Promise<Favorite[]> => {
  const {userId} = args;

  try {
    const response = await $api.get(`/favorites/${userId}`);

    return response.data;
  } catch (error) {
    console.error('Error fetching favorites:', error);
    throw error;
  }
};
