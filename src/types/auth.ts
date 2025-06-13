// types/auth.ts
export type AuthResponse = {
  fullName: string;
} | {
  error: string;
  message?: string;
};