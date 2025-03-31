<script setup lang="ts">

import { ref, onMounted } from "vue";
import Carousel from "../Carousel.vue";
import ReviewCarousel from "../ReviewCarousel.vue";

</script>

<template>
      <Carousel />

      <div class="flex items-center justify-center py-30">
    <div class="two-column-layout flex justify-center w-full max-w-4xl">
      <div class="column p-4">
        <div class="flex flex-row items-center">
            <h2 class="text-red-main-1 font-bold m-0 text-4xl flex items-center gap-4">
              <img src="/icons/profile1.png" alt="Profile 1" class="h-10 w-10 rounded-full mr-2 animate-bounce">
              SEJARAH KAMI!
            </h2>
        </div>
        
        <p class="text-black">
          <span class="text-red-main-1">Sushi Stop</span> didirikan pada tahun 2020 dengan visi menjadi brand sushi affordable nomor satu di Indonesia. Dengan komitmen untuk menyajikan sushi yang lezat, berkualitas, dan tetap ramah di kantong, <span class="text-red-main-1">Sushi Stop</span> ingin memastikan bahwa semua kalangan dapat menikmati hidangan Jepang dengan harga terjangkau.
        </p>
        <br>
        <p class="text-black">
          Sebagai brand yang selalu menjunjung tinggi kepuasan customer, kami selalu menjaga kualitas product product kami, oleh karena itu kami hanya menggunakan bahan bahan berkualitas yang telah di racik khusus untuk menciptakan pengalaman memakan Sushi yang tak terlupakan.
        </p>
      </div>
      <div class="column p-4">
        <div class="flex flex-row items-center">
            <h2 class="text-red-main-1 font-bold m-0 text-4xl flex items-center gap-4">
              THE SUSHI STOP
              <img src="/icons/profile2.png" alt="Profile 1" class="h-10 w-10 rounded-full mr-2 animate-bounce">
            </h2>
        </div>
        <p class="text-black">
          Dengan bekal pengalaman lebih dari 5 tahun, kini <span class="text-red-main-1">Sushi Stop</span> telah memiliki 30 Gerai SELF OWNED di Jakarta dan Depok. Kami percaya 5 tahun bukan hal yang mudah dan waktu yang singkat dalam mengelola 30 cabang, sehingga di tahun 2025 ini kami ingin membuka PELUANG kepada anda untuk bergabung dalam perkembangan perjalanan kami.
        </p>
        <button class="btn btn-primary w-full bg-red-main-1 text-2xl h-auto py-4 mt-4" style="box-shadow: 0 2px 0 rgba(0, 0, 0, 1); border: none;">BERMITRA!</button>
      </div>
    </div>
  </div>

      <ReviewCarousel />
</template>

<style scoped>
h2 {
  margin-bottom: 1rem; /* Tambahkan jarak bawah pada header */
}
button.btn {
  margin-top: 1rem; /* Ensure margin-top is applied */
}
</style>