<script setup>
import { onMounted, ref } from 'vue';

const menuImage = ref([]);

onMounted(()=> {
  let jumlahHalaman = 24;
  let imagePath = "/image/menu/HalamanMenu"
  let extension = ".png"
  menuImage.value = [];
  for(let x = 1; x <= jumlahHalaman; x++){
    menuImage.value.push(imagePath+x+extension)
  }
})
</script>

<template>

  <div class="flex items-center justify-start bg-yellow-main-2 p-5 lg:p-10">
    <img src="/image/icons/Heart.png" class="w-5 lg:w-20">
    <h1 class="text-red-main-1 font-bold lg:text-4xl">AT EVERY BITE</h1>
  </div>
  <div class="bg-yellow-main-2 flex flex-col items-center justify-center text-center relative gap-2">
      <div class="flex items-center justify-center gap-5 w-1/2 lg:w-1/4">
        <div class="border-t-2 border-red-main-1 flex-1"></div>
        <span class=" text-m lg:text-lg font-bold text-black-main-1">our</span>
        <div class="border-t-2 border-red-main-1 flex-3"></div>
      </div>
      <h2 class="text-red-main-1 pb-10 font-bold text-6xl lg:text-9xl mb-6">MENU</h2>
      <div class="bg-red-main-1 text-white font-bold text-4xl w-full py-5 px-8 mb-6">SUSHI</div>
      <div class="flex items-center justify-center py-10 gap-2 lg:gap-10">
        <span class="text-black-main-1 font-bold">RAMEN</span>
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 rotate-45 bg-red-main-1"></div>
          <div class="border-t-5  border-red-main-1 w-5 lg:w-16"></div>
          <div class="w-2 h-2 rotate-45 bg-red-main-1"></div>
        </div>
        <span class="text-black-main-1 font-bold">DONBURI</span>
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 rotate-45 bg-red-main-1"></div>
          <div class="border-t-5  border-red-main-1 w-5 lg:w-16"></div>
          <div class="w-2 h-2 rotate-45 bg-red-main-1"></div>
        </div>
        <span class="text-black-main-1 font-bold">SNACKS</span>
      </div>
      <div class="text-center py-10">
        <p class="text-black-main-1 font-bold ">BROWSE</p>
        <div class="text-black-main-1 text-2xl">&#x25BC;</div>
      </div>
    </div>

    <div class="Menu w-full flex flex-col items-center bg-yellow-main-2">
      <img v-for="image in menuImage" class="w-full lg:w-1/2" :src="image">
    </div>
</template>

