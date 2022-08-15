<template>
    <HeaderView />
    <h1>Home {{ name }}, welcome to the home package</h1>
    <table border="1">
        <tr>
            <td>Name:</td>
            <td>Address</td>
            <td>Contact:</td>
            <td>Update</td>
            <td>Delete</td>
        </tr>
        <tr v-for="item in resturant" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.contact }}</td>
            <td>
                <router-link :to="'/update/' + item.id">Update</router-link>
            </td>
            <td><button v-on:click="deleteResturant(item.id)">Delete</button></td>
        </tr>
    </table>
</template>

<script>
import HeaderView from '@/components/Header.vue'
import axios from 'axios';

export default {
    name: "HomeView",
    components: {
        HeaderView
    },
    data() {
        return {
            name: '',
            resturant: []
        }
    },
    methods: {
        async deleteResturant(id) {
            let result = await axios.delete(
                "http://localhost:3000/resturants/" + id
            );
            if (result.status == 200) {
                alert("Resturant deleted successfully");
                // localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                this.$router.push({ name: "Home" });
            }
            else {
                alert("Resturant Not delete.Please try again.");
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem("user-info");
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({ name: "SignUp" });
        }
        let result = await axios.get(
            `http://localhost:3000/resturants`
        );
        this.resturant = result.data;
    }
}
</script>

<style>
td {
    width: 150px;
    height: 40px;
}

table {
    margin-left: auto;
    margin-right: auto;
}
</style>