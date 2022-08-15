<template>
    <HeaderView />
    <h1>Home user, welcome to the update resturant</h1>
    <form action="" class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="resturant.name">
        <input type="text" name="address" placeholder="Enter Address" v-model="resturant.address">
        <input type="text" name="contact" placeholder="Enter Contact" v-model="resturant.contact">
        <button type="button" v-on:click="updateResturant">Update Resturant</button>
    </form>
</template>

<script>
import HeaderView from '@/components/Header.vue'
import axios from 'axios';

export default {
    name: "UpdateResturant",
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
        async updateResturant() {
            let result = await axios.put(
                "http://localhost:3000/resturants/" + this.$route.params.id, {
                name: this.resturant.name,
                address: this.resturant.address,
                contact: this.resturant.contact,
            }
            );
            if (result.status == 200) {
                alert("Resturant details updated successfully");
                // localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                this.$router.push({ name: "Home" });
            }
            else {
                alert("Resturant details not updated.Please try again.");
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "SignUp" });
        }
        //Set prefill data
        let result = await axios.get("http://localhost:3000/resturants/" + this.$route.params.id);
        this.resturant.name = result.data.name;
        this.resturant.address = result.data.address;
        this.resturant.contact = result.data.contact;
    }
}
</script>