import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => ({
    user: null,
    token: '',
    users: [],
  }),
  getters: {
    getUsers() {
      return this.users.filter((user) => user.age > 18 );
    },
  },
  actions: {
    
  },
})