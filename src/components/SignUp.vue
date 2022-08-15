<template>
    <img class="logo" src="../assets/signuplogo.png" alt="signuplogo">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="text" v-model="password" placeholder="Enter Password">
        <button v-on:click="signup">Sign Up</button><br><br>
        <router-link class="link" to="/login">Login</router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SignUp',
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        async signup() {
            let result = await axios.post("http://localhost:3000/users",
                {
                    email: this.email,
                    name: this.name,
                    password: this.password

                });
            if (result.status == 201) {
                alert("Sign Up Successfully");
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({ name: "Home" });
            }
            else {
                alert("Sign Up Not Done");
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