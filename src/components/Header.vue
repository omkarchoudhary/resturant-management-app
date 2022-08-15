<template>
    <div class="topnav">
        <router-link class="active" to="/">Home</router-link>
        <router-link to="/add">Add Resturant</router-link>
        <!-- <router-link to="/update">Update Resturant</router-link> -->
        <button v-on:click="logout" href="#">Logout</button>
    </div>
</template>

<script>
export default {
    name: "HeaderView",
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: "Login" });
        }
    }
}
</script>

<style>
/* Add a black background color to the top navigation */
.topnav {
    background-color: #333;
    overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
    background-color: #ddd;
    color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
    background-color: #04AA6D;
    color: white;
}
</style>