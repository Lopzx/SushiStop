<script setup lang="ts">
import { onMounted, ref } from 'vue'
import VLazyImage from 'v-lazy-image'

const menuImage = ref([])

onMounted(() => {
  const jumlahHalaman = 24
  const imagePath = '/image/menu/HalamanMenu'
  const extension = '.webp'
  menuImage.value = []
  for (let x = 1; x <= jumlahHalaman; x++) {
    menuImage.value.push(imagePath + x + extension)
  }
})
</script>

<template>
  <header
    class="overflow-hidden flex flex-col justify-center items-center bg-yellow-main-2 text-red-main-1 relative"
  >
    <img
      src="/image/kemitraan/sakura1.webp"
      class="z-0 absolute top-30 lg:-top-60 md:top-0 right-0 h-50 md:h-100 lg:h-150"
      alt=""
    />

    <div class="bg-petals4 absolute bottom-20 right-0 h-50 w-20 p-0"></div>
    <div class="bg-petals4 absolute -top-20 left-100 h-50 w-20 p-0"></div>
    <div class="container pt-10 lg:pt-40 pb-10 lg:pb-20">
      <div class="flex flex-col lg:flex-row justify-center items-center gap-15">
        <div class="left relative">
          <img class="w-50 lg:w-100 xl:w-150" src="/image/kemitraan/mascot7.webp" />
          <div
            class="flex items-center justify-center p-5 lg:p-10 w-full absolute -top-5 lg:-top-20 left-1/2 -translate-x-1/2"
          >
            <img src="/image/kemitraan/heart.webp" class="w-5 lg:w-20" />
            <h1 class="text-red-main-1 font-bold text-xl lg:text-4xl">At Every Bite</h1>
          </div>
        </div>
        <div class="right text-center items-center justify-center font-bold flex flex-col gap-10">
          <h2 class="text-5xl lg:text-9xl white-outline-lg lg:white-outline-xl">
            Our<br />
            Menu
          </h2>
          <p class="text-sm lg:text-2xl white-outline lg:white-outline-lg flex gap-4 lg:gap-5">
            <span>Donburi</span> <span>Sushi</span> <span>Ramen</span> <span>Snacks</span>
          </p>
        </div>
      </div>
    </div>

    <div class="bg-red-main-1 py-2 px-5 lg:p-6 flex items-center gap-5 rounded-full">
      <p class="font-bold text-white text-xl lg:text-4xl">Browse</p>
      <img src="/image/kemitraan/arrow.webp" class="h-5 lg:h-10" />
    </div>
  </header>

  <div class="Menu w-full flex justify-center items-center bg-yellow-main-2 pt-15 lg:pt-30">
    <div class="container flex flex-col items-center justify-center">
      <VLazyImage
        v-bind:key="index"
        v-for="(image, index) in menuImage"
        class="w-full lg:w-1/2"
        loading="lazy"
        :src="image"
      />
    </div>
  </div>
</template>
