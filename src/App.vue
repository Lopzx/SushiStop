<script setup lang="ts">
  import Nav from './components/NavBar.vue';
  import Foot from './components/FootBar.vue'; 
  import Main from './components/pages/Main.vue';
  import 'animate.css';
import { RouterView } from 'vue-router';
  
</script>

<template>
  <Nav />
    <RouterView/>
  <Foot />
</template>