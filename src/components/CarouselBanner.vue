<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Carousel from 'primevue/carousel'

onMounted(() => {
  banner.value = [
    '/image/carouselimage/1.jpg',
    '/image/carouselimage/2.jpg',
    '/image/carouselimage/3.jpg',
    '/image/carouselimage/4.jpg',
  ]
})

const carouselRef = ref()
const banner = ref()
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: '1199px',
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1,
  },
])
</script>

<template>
  <div class="card w-full">
    <Carousel
      ref="carouselRef"
      :value="banner"
      :numVisible="1"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      pt:indicatorButton:class="w-5 h-5"
      pt:indicator:class="w-5 h-5"
      circular
      :autoplayInterval="3000"
      :showNavigators="false"
      :pt="{
        indicatorButton: ({ context }) => ({
          class: context.highlighted ? 'changeicon' : 'bg-gray-300',
        }),
      }"
    >
      <template #item="slotProps">
        <div class="carousel w-full h-full">
          <div class="carousel-item w-full">
            <img
              :src="slotProps.data"
              class="w-full h-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<style scoped>
::v-deep(.p-carousel-indicator-list) {
  display: flex;
  /* transform: translateX(-50%); */
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.bg-gray-300 {
  background-color: rgb(173, 173, 173);
}

::v-deep(.p-carousel-indicator-button) {
  background-color: #d1d5db;
  height: 100%;
  width: 100%;
}

::v-deep(.p-carousel-indicator-active .p-carousel-indicator-button) {
  background: var(--color-red-main-1);
}
</style>
