<script setup lang="ts">
import Nav from './components/NavBar.vue'
import Foot from './components/FootBar.vue'

import 'animate.css'
import { RouterView } from 'vue-router'

// const emailJSScript = document.createElement('script')
// emailJSScript.setAttribute(
//   'src',
//   'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js',
// )
// emailJSScript.innerHTML = "(function(){ emailjs.init({ publicKey: 'YOUR_PUBLIC_KEY', }); })();"
// // emailJSScriptSetup.innerHTML = "(function(){ emailjs.init({ publicKey: 'YOUR_PUBLIC_KEY', }); })();"
// document.head.appendChild(emailJSScript)

// const emailJSScriptSetup = document.createElement('script')
// document.head.appendChild(emailJSScriptSetup)
</script>

<template>
  <Nav />
  <RouterView />
  <Foot />
</template>
