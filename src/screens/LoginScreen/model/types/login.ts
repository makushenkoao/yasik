export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  nickname: string;
  password: string;
}

export interface LoginData {
  nickname: string;
  password: string;
}

export type LoginField = keyof LoginData;
export type RegisterField = keyof RegisterData;
