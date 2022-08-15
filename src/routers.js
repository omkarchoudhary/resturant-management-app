import SignUp from "./components/SignUp.vue";
import HomeView from "./components/Home.vue";
import LoginView from "./components/Login.vue";
import AddResturant from "./components/Add.vue";
import UpdateResturant from "./components/Update.vue";

import {
    createRouter,
    createWebHistory
} from "vue-router";

const routes = [{
        name: "Home",
        component: HomeView,
        path: "/",
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up",
    },
    {
        name: "Login",
        component: LoginView,
        path: "/login",
    },
    {
        name: "Add",
        component: AddResturant,
        path: "/add",
    },
    {
        name: "Update",
        component: UpdateResturant,
        path: "/update/:id",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
