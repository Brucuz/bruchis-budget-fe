<script>
import { routerKey } from "vue-router";
import { signIn } from "../services/firebase";
import { accessTokeStore } from "../stores/accessToken";

export default {
    setup() {
        const store = accessTokeStore()

        return {
            store,
        }
    },
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async logIn() {
            const token = await signIn(this.email, this.password);
            this.store.setToken(token);
            this.$router.push('/');
        }
    }
}
</script>

<template>
    <form @submit.prevent="logIn()" class="login-form">
        <!-- Email input -->
        <div class="form-outline mb-4">
            <input v-model="email" type="email" id="form2Example1" class="form-control" />
            <label class="form-label" for="form2Example1">Email</label>
        </div>

        <!-- Password input -->
        <div class="form-outline mb-4">
            <input v-model="password" type="password" id="form2Example2" class="form-control" />
            <label class="form-label" for="form2Example2">Password</label>
        </div>

        <!-- Submit button -->
        <button @click="logIn()" type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

    </form>
</template>

<style>
.login-form{
    margin: 50px
}
</style>