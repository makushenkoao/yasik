import {$api} from '@shared/api/api.ts';

export const getAllSessions = async () => {
  try {
    const response = await $api.get('/sessions');
    return response.data;
  } catch (error) {
    console.log('Error fetching all sessions:', error);
    throw error;
  }
};

export const getSessionById = async (id: string) => {
  try {
    const response = await $api.get(`/sessions/${id}`);
    return response.data;
  } catch (error) {
    console.log('Error fetching session by ID:', error);
    throw error;
  }
};

export const createSession = async (sessionData: any) => {
  try {
    const response = await $api.post('/sessions', sessionData);
    return response.data;
  } catch (error) {
    console.log('Error creating session:', error);
    throw error;
  }
};

export const joinSession = async (sessionCode: string, userId?: string) => {
  console.log(sessionCode, userId);
  try {
    const response = await $api.post('/sessions/join', {userId, sessionCode});
    return response.data;
  } catch (error) {
    console.log('Error joining session:', error);
    throw error;
  }
};

export const addMatchesToSession = async (
  sessionId: string,
  matches: any[],
) => {
  try {
    const response = await $api.post(`/sessions/${sessionId}/matches`, {
      matches,
    });
    return response.data;
  } catch (error) {
    console.log('Error adding matches to session:', error);
    throw error;
  }
};
