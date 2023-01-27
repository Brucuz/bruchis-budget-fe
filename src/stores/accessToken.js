import { defineStore } from "pinia";
import jwt_decode from "jwt-decode";

export const accessTokeStore = defineStore("accessToken", {
  state: () => ({token: JSON.stringify(localStorage.getItem("bruchisBudgetToken")) || "", expirationDate: null}),
  getters: {
    accessToken: (state) => state.accessToken,
    isLoggedIn: (state) => state.token && state.expirationDate < new Date()
  },
  actions: {
    setToken(token){
        this.token = token;
        localStorage.setItem("bruchisBudgetToken", JSON.stringify(token));
        const ts = jwt_decode(token)?.exp;
        if(ts){
          this.expirationDate = new Date(ts);
        }
    }
  }
});
