<template>
<nav class="container flex justify-around py-8 mx-auto bg-white border">
    <div>
        <h3 class="text-2xl font-medium text-blue-500">LOGO</h3>
    </div>
    <div class="flex items-center space-x-8">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
        <button @click="Logout">Logout</button>
    </div>
</nav>
</template>


<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();

const Logout = () => {
    localStorage.clear();
    router.push({ path: '/login'})
}

</script>