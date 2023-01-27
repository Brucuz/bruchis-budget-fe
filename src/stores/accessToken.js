import { defineStore } from "pinia";

export const accessTokeStore = defineStore("accessToken", {
  state: () => ({accessToken: "", expirationDate: null}),
  getters: {
    accessToken: (state) => state.accessToken
  },
  actions: {
    setToken(token){
        this.accessToken = token
    }
  }
});
