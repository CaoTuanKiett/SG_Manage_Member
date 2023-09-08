import { defineStore } from 'pinia';


export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: '',
  }),
  actions: {
    setToken(token) {
      this.token = token;
    },     
  },
});
        
