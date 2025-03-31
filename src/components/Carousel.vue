<script setup lang="ts">

import { ref, onMounted } from "vue";
import Carousel from 'primevue/carousel';

onMounted(() => {
    banner.value = [
      '/carouselimage/image13.png',
      '/carouselimage/image13.png',
      '/carouselimage/image13.png',
      '/carouselimage/image13.png',
      '/carouselimage/image13.png',
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

const getSeverity = ( status :string) => {
    switch (status) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warn';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return 'secondary';
    }

   
};
</script>

<template>
  <div class="card w-full">
      <Carousel
        ref="carouselRef" 
        :value="banner" 
        :numVisible="1" 
        :numScroll="3" 
        :responsiveOptions="responsiveOptions" 
        circular 
        
        :autoplayInterval="5000" 
        :showNavigators="false"
        :pt="{
          indicatorButton: ({ context }) => ({
            class: context.highlighted ? 'changeicon' : 'bg-gray-300',

          }),
        }">
          <template #item="slotProps">
            <div class="carousel w-full h-full">
            <div class="carousel-item w-full">
            <img
              :src="slotProps.data"
              class="w-full h-full"
              alt="Tailwind CSS Carousel component" />
              
            
          </div>
            </div>
        </template>
      </Carousel>    
  </div>
</template>

<style scoped>
::v-deep(.p-carousel-indicator-list) {
  display: flex;
  transform: translateX(-50%);
  position: absolute;
  bottom: 0;
  left:50%;

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
  
  ::v-deep(.p-carousel-indicator-active) {
  width: 40px;
  height: 40px;
  background-color: transparent;
}
</style>