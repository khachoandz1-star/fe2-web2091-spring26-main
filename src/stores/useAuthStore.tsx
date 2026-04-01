import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthUser = {
  id?: number;
  email?: string;
  name?: string;
};

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  setUser: (data: { user: AuthUser; token: string | null }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,

      setUser: (data) =>
        set({
          user: data.user,
          token: data.token,
        }),

      logout: () =>
        set({
          user: null,
          token: null,
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);