<template>
    <HeaderView />
    <h1>Home user, welcome to the add resturant</h1>
    <form action="" class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="resturant.name">
        <input type="text" name="address" placeholder="Enter Address" v-model="resturant.address">
        <input type="text" name="contact" placeholder="Enter Contact" v-model="resturant.contact">
        <button type="button" v-on:click="addResturant">Add new resturant</button>
    </form>
</template>

<script>
import HeaderView from '@/components/Header.vue'
import axios from 'axios';

export default {
    name: "AddResturant",
    components: {
        HeaderView
    },
    data() {
        return {
            resturant: {
                name: "",
                address: "",
                contact: "",
            }
        }
    },
    methods: {
        async addResturant() {
            let result = await axios.post(
                "http://localhost:3000/resturants", {
                name: this.resturant.name,
                address: this.resturant.address,
                contact: this.resturant.contact,
            }
            );
            if (result.status == 201) {
                alert("Resturant added successfully");
                // localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                this.$router.push({ name: "Home" });
            }
            else {
                alert("Resturant not added.Please try again.");
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "SignUp" });
        }
    }
}
</script>