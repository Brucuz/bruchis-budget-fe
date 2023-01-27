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
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async logIn() {
            const token = await signIn(this.email, this.password);
            console.log(token);
            this.store.setToken(token);
        }
    }
}
</script>

<template>
    <form @submit.prevent="logIn()">
        <!-- Email input -->
        <H1>{{ store.isLoggedIn }}</H1>
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

</style>