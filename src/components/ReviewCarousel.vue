<script setup lang="ts">

import { ref, onMounted } from "vue";
import Carousel from 'primevue/carousel';

onMounted(() => {
    banner.value = [
      {
        image: '/icons/profile1.png',
        title: 'Alexandra Tan',
        description: 'Pelayanan di sini sangat ramah dan cepat. Sushi-nya juga segar dan lezat!',
        badge: 'Cabang Central Park',
        tag: 'Food Blogger'
      },
      {
        image: '/icons/profile2.png',
        title: 'Michael Wijaya',
        description: 'Tempat yang nyaman untuk makan bersama keluarga. Menu sushi-nya sangat variatif.',
        badge: 'Cabang Kelapa Gading',
        tag: 'Chef'
      },
      {
        image: '/icons/profile3.png',
        title: 'Stephanie Lim',
        description: 'Sushi terbaik yang pernah saya coba! Sangat puas dengan kualitas dan rasanya.',
        badge: 'Cabang Senayan',
        tag: 'Traveler'
      },
      {
        image: '/icons/profile3.png',
        title: 'Jonathan Pratama',
        description: 'Harga terjangkau dengan kualitas yang luar biasa. Pasti akan kembali lagi!',
        badge: 'Cabang BSD',
        tag: 'Entrepreneur'
      },
      {
        image: '/icons/profile2.png',
        title: 'Catherine Wong',
        description: 'Sushi di sini benar-benar memanjakan lidah. Sangat direkomendasikan!',
        badge: 'Cabang PIK',
        tag: 'Food Enthusiast'
      },
      {
        image: '/icons/profile1.png',
        title: 'David Santoso',
        description: 'Tempat favorit saya untuk menikmati sushi. Selalu puas dengan pelayanannya.',
        badge: 'Cabang Thamrin',
        tag: 'Photographer'
      },
    ]
})


const carouselRef = ref();
const banner = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

</script>

<template>
  <h1 class="text-red-main-1 text-center text-5xl font-bold pb-10">What people say about us?</h1>
  <div class="card pb-20">
      <Carousel
        ref="carouselRef" 
        :value="banner" 
        :numVisible="3" 
        :numScroll="3" 
        :responsiveOptions="responsiveOptions" 
        circular 
        :autoplayInterval="5000" 
        :showNavigators="false">
          <template #item="slotProps">
            <div class="flex justify-center items-center">
              <div class="card bg-red-main-1  shadow-sm resizer w-92">
                <figure class="pt-5">
                  <img
                    :src="slotProps.data.image"
                    class="w-40"
                    alt="Shoes" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title text-white-main-1">
                    {{slotProps.data.title}}
                    <div class="badge badge-secondary bg-red-main-2 border-none">{{slotProps.data.tag}}</div>
                  </h2>
                  <p>{{slotProps.data.description}}</p>
                  <div class="card-actions justify-end">
                    <div class="badge badge-outline border-red-main-2">{{slotProps.data.badge}}</div>
                  </div>
                </div>
              </div>
            </div>
        </template>
      </Carousel>    
  </div>
</template>

<style scoped>
::v-deep(.p-carousel-indicator-list) {
  display: flex;
  /* transform: translateX(-50%);
  position: absolute;
  bottom: 0;
  left:50%; */

}

::v-deep(.changeicon) {
  background: url('/icons/CarouselIcon.png') no-repeat !important;
  background-color: transparent !important;
  background-size: contain !important;
  background-position: center !important;
  
}

.bg-gray-300 {
  background-color:rgb(173, 173, 173);
}

::v-deep(.p-carousel-indicator-button) {
    width: 40px;
    height: 40px; 
    background-color: #d1d5db; 
  }
  
  ::v-deep(.p-carousel-indicator-active .p-carousel-indicator-button) {
  width: 40px;
  height: 40px;
  background: var(--color-red-main-1);
}
</style>