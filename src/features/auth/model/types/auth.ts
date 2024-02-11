export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export type LoginField = keyof LoginData;
export type RegisterField = keyof RegisterData;
