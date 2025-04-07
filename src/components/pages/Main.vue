<script setup lang="ts">

import { ref, onMounted } from "vue";
import CarouselBanner from "../CarouselBanner.vue";
import ReviewCarousel from "../ReviewCarousel.vue";
import Carousel from 'primevue/carousel';

const image = ref()
const carouselRef = ref()

onMounted(() => {
  const jumlahGambar = 59; // Update this to the actual number of images
  image.value = [];
  const imagePath = '/image/menuimage/';
  for (let idx = 1; idx <= jumlahGambar; idx++) {
    const imgPath = `${imagePath}${idx}.JPG`; // Ensure the file extension matches
    image.value.push(imgPath);
  }
})


const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 6,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 6,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 5,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 2,
        numScroll: 2
    }
]);


</script>

<template>
      <div class="flex items-center py-20 bg-yellow-main-1 justify-start w-full">
        <div class="two-column-layout flex flex-col xl:flex-row-reverse justify-between w-full px-6 lg:px-30">
          <div class="column w-full xl:w-2/5 flex items-center pl-4 xl:pl-0 xl:justify-center relative mt-10 xl:mt-0"> <!-- Adjusted width -->
        <div class="w-3/4 md:w-1/2 xl:w-full 2xl:w-200 h-auto relative">
          <img src="/image/icons/Logo.png" alt="Large Logo" class="w-full"> <!-- Ensure responsiveness -->
          <img src="/image/icons/BlackStar.png" alt="Top Right Logo" class="absolute top-0 right-1/7 w-1/7 animate__animated animate__bounce animate__infinite infinite">
          <img src="/image/icons/BlackStar.png" alt="Bottom Left Logo" class="absolute bottom-2/6 left-0 w-1/10 animate__animated animate__bounce animate__infinite infinite">
        </div>
          </div>
          <div class="column p-4 flex flex-col justify-start w-full xl:w-3/5"> <!-- Adjusted width -->
        <h2 class="text-red-main-1 font-bold text-2xl md:text-4xl lg:text-[4rem] leading-tight text-left animate__animated animate__bounceInLeft">
          <p>THE BEST SUSHI</p>
          <p>IN TOWN!</p>
        </h2>
        <p class="text-black text-sm md:text-base lg:text-lg w-full md:w-3/4 py-5 text-red-main-1 font-semibold text-left">
          Browse through our diverse range of meticulously crafted Sushi, designed to bring out your individuality and cater to your sense of taste.
        </p>
        <button class="btn btn-primary w-full md:w-auto lg:w-94 bg-red-main-1 text-sm md:text-lg lg:text-2xl h-auto py-4 rounded-full text-left" style="box-shadow: 0 2px 0 rgba(0, 0, 0, 1); border: none;">
          BERMITRA
        </button>
        <div class="flex flex-wrap lg:flex-nowrap justify-start py-8 lg:py-16 text-left gap-4 lg:gap-8">
          <div class="flex flex-col mr-4 lg:mr-8 animate__animated animate__bounceIn">
            <span class="text-lg md:text-xl lg:text-2xl font-bold text-red-main-1">30+</span>
            <span class="text-red-main-1 text-xs md:text-sm lg:text-xl">Cabang Self Owned</span>
          </div>
          <div class="hidden lg:block w-2 bg-red-main-1 mx-4"></div>
          <div class="flex flex-col mr-4 lg:mr-8 animate__animated animate__bounceIn animate__delay-1s">
            <span class="text-lg md:text-xl lg:text-2xl font-bold text-red-main-1">50,000</span>
            <span class="text-red-main-1 text-xs md:text-sm lg:text-xl">Pelanggan Setia</span>
          </div>
          <div class="hidden lg:block w-2 bg-red-main-1 mx-4"></div>
          <div class="flex flex-col animate__animated animate__bounceIn animate__delay-2s">
            <span class="text-lg md:text-xl lg:text-2xl font-bold text-red-main-1">RP 10JT</span>
            <span class="text-red-main-1 text-xs md:text-sm lg:text-xl">Potensi Cuan</span>
          </div>
        </div>
          </div>
        </div>
      </div>
      <CarouselBanner />

      <div class="py-10 lg:py-30 bg-yellow-main-2 w-full" style="background-image: url('/image/icons/SushiOverlay.png');  background-size: cover; background-position: bottom right; background-repeat: no-repeat;">
        <div class="text-center mb-10">
          <h2 class="text-4xl font-bold text-red-main-1">PERJALANAN KAMI</h2>
        </div>
        <div class="flex items-center justify-center py-20">
          <div class="flex items-center w-full max-w-4xl gap-0"> <!-- Removed gap -->
            <div class="flex items-center justify-center w-full flex-wrap lg:flex-nowrap">
              <div class="flex items-center w-full max-w-4xl flex-col lg:justify-center lg:flex-row">
              <div class="flex items-center mb-8 lg:mb-0">
                <div class="flex flex-col items-center relative">
                <span class="text-lg text-red-main-1 font-bold absolute -left-15 -translate-y-1/2 top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:-top-10">2020</span>
                <div class="w-16 h-16 bg-red-main-1 rounded-full flex items-center justify-center text-white font-bold py-2">
                  <img src="/image/icons/mascots/mascot1.png" alt="Icon 1" class="w-8">
                </div>
                <span class="text-xs text-red-main-1 font-semibold mt-2 absolute left-10/8 -translate-y-1/2 lg:left-auto lg:top-auto  left-1/2 top-1/2   lg:-bottom-10">Start</span>
                </div>
              </div>
              <div class="h-10 w-1 lg:h-1 lg:w-10 bg-red-main-1"></div>
              <div class="flex items-center mb-8 lg:mb-0">
                <div class="flex flex-col items-center relative">
                <span class="text-lg text-red-main-1 font-bold absolute -left-15 -translate-y-1/2 top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:-top-10">2021</span>
                <div class="w-16 h-16 bg-red-main-1 rounded-full flex items-center justify-center text-white font-bold py-2">
                  <img src="/image/icons/mascots/mascot2.png" alt="Icon 1" class="h-8">
                </div>
                <span class="text-xs text-red-main-1 font-semibold mt-2 absolute left-10/8 -translate-y-1/2 lg:left-auto lg:top-auto  left-1/2 top-1/2   lg:-bottom-10">Growth</span>
                </div>
              </div>
              <div class="h-10 w-1 lg:h-1 lg:w-10 bg-red-main-1"></div>
              <div class="flex items-center mb-8 lg:mb-0">
                <div class="flex flex-col items-center relative">
                <span class="text-lg text-red-main-1 font-bold absolute -left-15 -translate-y-1/2 top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:-top-10">2022</span>
                <div class="w-16 h-16 bg-red-main-1 rounded-full flex items-center justify-center text-white font-bold py-2">
                  <img src="/image/icons/mascots/mascot3.png" alt="Icon 1" class="h-8">
                </div>
                <span class="text-xs text-red-main-1 font-semibold mt-2 absolute left-10/8 -translate-y-1/2 lg:left-auto lg:top-auto  left-1/2 top-1/2   lg:-bottom-10">Expansion</span>
                </div>
              </div>
              <div class="h-10 w-1 lg:h-1 lg:w-10 bg-red-main-1"></div>
              <div class="flex items-center mb-8 lg:mb-0">
                <div class="flex flex-col items-center relative">
                <span class="text-lg text-red-main-1 font-bold absolute -left-15 -translate-y-1/2 top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:-top-10">2023</span>
                <div class="w-16 h-16 bg-red-main-1 rounded-full flex items-center justify-center text-white font-bold py-2">
                  <img src="/image/icons/mascots/mascot4.png" alt="Icon 1" class="h-8">
                </div>
                <span class="text-xs text-red-main-1 font-semibold mt-2 absolute left-10/8 -translate-y-1/2 lg:left-auto lg:top-auto  left-1/2 top-1/2   lg:-bottom-10">Innovation</span>
                </div>
              </div>
              <div class="h-10 w-1 lg:h-1 lg:w-10 bg-red-main-1"></div>
              <div class="flex items-center mb-8 lg:mb-0">
                <div class="flex flex-col items-center relative">
                <span class="text-lg text-red-main-1 font-bold absolute -left-15 -translate-y-1/2 top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:-top-10">2024</span>
                <div class="w-16 h-16 bg-red-main-1 rounded-full flex items-center justify-center text-white font-bold py-2">
                  <img src="/image/icons/mascots/mascot5.png" alt="Icon 1" class="h-8">
                </div>
                <span class="text-xs text-red-main-1 font-semibold mt-2 absolute left-10/8 -translate-y-1/2 lg:left-auto lg:top-auto  left-1/2 top-1/2   lg:-bottom-10">Milestone</span>
                </div>
              </div>
              <div class="h-10 w-1 lg:h-1 lg:w-10 bg-red-main-1"></div>
              <div class="flex items-center mb-8 lg:mb-0">
                <div class="flex flex-col items-center relative">
                <span class="text-lg text-red-main-1 font-bold absolute -left-15 -translate-y-1/2 top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:-top-10">2025</span>
                <div class="w-16 h-16 bg-red-main-1 rounded-full flex items-center justify-center text-white font-bold py-2">
                  <img src="/image/icons/mascots/mascot6.png" alt="Icon 1" class="h-8">
                </div>
                <span class="text-xs text-red-main-1 font-semibold mt-2 absolute left-10/8 -translate-y-1/2 lg:left-auto lg:top-auto  left-1/2 top-1/2   lg:-bottom-10">Future</span>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mb-6">
          <h3 class="text-2xl font-bold text-red-main-1 py-10">Sedikit Cerita...</h3>
        </div>
        <div class=" mx-auto text-sm lg:text-lg text-black-main-1 px-8 leading-relaxed flex flex-col items-center justify-center w-full">
          <p class="max-w-4xl">
            <span class="text-red-main-1 font-bold">Sushi Stop</span> didirikan pada tahun 2020 dengan visi menjadi brand sushi affordable nomor satu di Indonesia. Dengan komitmen untuk menyajikan sushi yang lezat, berkualitas, dan tetap ramah di kantong, <span class="text-red-main-1 font-bold">Sushi Stop</span> ingin memastikan bahwa semua kalangan dapat menikmati hidangan Jepang dengan harga terjangkau.
          </p>
          <p class="max-w-4xl pt-10">
            Sebagai brand yang selalu menjunjung tinggi kepuasan customer, kami selalu menjaga kualitas produk kami. Oleh karena itu, kami hanya menggunakan bahan-bahan berkualitas yang telah diracik khusus untuk menciptakan pengalaman memakan Sushi yang tak terlupakan.
          </p>
        </div>

        <Carousel
          ref="carouselRef" 
          class=" py-20"
          :value="image" 
          :numVisible="6" 
          :numScroll="1" 
          :responsiveOptions="responsiveOptions" 
          circular 
          :autoplayInterval="5000" 
          :showNavigators="false"
          :showIndicators="false">
            <template #item="slotProps">
                  <figure class="h-full px-4">
                    <img
                      :src="slotProps.data"
                      class="rounded-full h-full"
                      alt="Shoes" />
                  </figure>
          </template>
        </Carousel>    
      </div>

       


      <ReviewCarousel class="bg-yellow-main-1" />
</template>

<style scoped>
h2 {
  margin-bottom: 1rem; /* Tambahkan jarak bawah pada header */
}
button.btn {
  margin-top: 1rem; /* Ensure margin-top is applied */
}
</style>