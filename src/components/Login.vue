<template>
    <img class="logo" src="../assets/signuplogo.png" alt="signuplogo">
    <h1>Login</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="text" v-model="password" placeholder="Enter Password">
        <button v-on:click="login">Login</button><br><br>
        <router-link class="link" to="/sign-up">Sign Up</router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "LoginView",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async login() {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            );
            if (result.status == 200 && result.data.length > 0) {
                alert("Login Successfully");
                localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                this.$router.push({ name: "Home" });
            }
            else {
                alert("Not Login.Please try again.");
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (user) {
            this.$router.push({ name: "Home" });
        }
    }
}
</script>