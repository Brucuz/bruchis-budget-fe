<script>
import { signIn } from "../services/firebase";
import { accessTokeStore } from "../stores/accessToken";

export default {
    setup() {
        const store = accessTokeStore()

        return {
            store,
        }
    },
    methods: {
        logIn: async () => {
            const token = await signIn("bertodaniele83@gmail.com", "Puppazza1!");
            this.setToken(token);
            setTimeout(() => {
                console.log(this.accessToken);
            }, 1000)
        }
    }
}
</script>

<template>
    <button v-on:click="logIn()">Login</button>
</template>

<style>

</style>