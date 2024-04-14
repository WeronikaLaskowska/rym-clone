import { defineStore } from "pinia";

interface UserState {
  token: string | null;
}

export const useUserStore = defineStore({
  id: "user",
  state: (): UserState => ({
    token: null,
  }),
  actions: {
    getToken() {
      return this.token;
    },
    setToken(token: string) {
      this.token = token;
    },
    clearToken() {
      this.token = null;
    },
  },
  getters: {
    isAuthenticated(): boolean {
      return !!this.token;
    },
  },
});
