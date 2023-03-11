<template>
  <div>
    <NavBar />
  </div>
  <RouterView />
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';

</script>