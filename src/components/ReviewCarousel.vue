<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Carousel from 'primevue/carousel'

onMounted(() => {
  banner.value = [
    {
      title: 'NANAKOOT',
      description:
        '"Tempatnya cozzy, ada dekorasi Jepang bisa buat foto-foto, varian sushinya bervarian dan cocok di lidah kita! Dengan harga yang affordable, rasanya enak dan berkualitas, ini sih WORTH BANGET!"',
    },
    {
      title: 'TYASMIRASIH',
      description:
        '"Aku ambil yang paketan jadi udah termasuk minumannya. Rasanya enak banget!!! Crunchy didalam! Menunya juga banyak banget!"',
    },
    {
      title: 'KULINERSAMACICI',
      description:
        'Korean Daebak Combo Roll ini adalah kesukaan aku dan suami. Rasanya juga enak-enak semua!',
    },
    {
      title: 'MAKANLURR',
      description: '"Wah murah banget, sushinya enak-enak semua!"',
    },
    {
      title: 'Agakenyang',
      description: '"Sushinya enak, fresh,dan ga amis sama sekali"',
    },
    {
      title: 'Sensen Rans Entertaiment',
      description: '"Endul! enak banget!!"',
    },
    {
      title: 'Prambors',
      description: '"Aku si paling suka Unagi nya! Enak aku suka"',
    },
  ]
})

const carouselRef = ref()
const banner = ref()
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: '767px',
    numVisible: 3,
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
  <div>
    <div class="text-center pt-20">
      <h1 class="text-red-main-1 text-2xl lg:text-5xl font-bold inline-block align-top">
        KATA MANTAN KAMI
      </h1>
      <span class="text-red-main-1 text-sm lg:text-xl font-semibold align-top">* Pelanggan</span>
    </div>
    <div class="card py-20">
      <Carousel
        ref="carouselRef"
        :value="banner"
        :numVisible="3"
        :numScroll="3"
        :responsiveOptions="responsiveOptions"
        circular
        :autoplayInterval="5000"
        pt:indicatorList:class="pt-20"
        :showNavigators="false"
      >
        <template #item="slotProps">
          <div class="w-full flex justify-center items-center">
            <div class="card bg-yellow-main-2 w-5/6 shadow-sm resizer">
              <div class="pl-5 justify-start pl pt-5 flex gap-1">
                <img src="/image/icons/Star.png" class="w-5" alt="Shoes" />
                <img src="/image/icons/Star.png" class="w-5" alt="Shoes" />
                <img src="/image/icons/Star.png" class="w-5" alt="Shoes" />
                <img src="/image/icons/Star.png" class="w-5" alt="Shoes" />
                <img src="/image/icons/Star.png" class="w-5" alt="Shoes" />
              </div>
              <div class="p-5 pt-2 text-black-main-1">
                <h2 class="card-title">
                  {{ slotProps.data.title }}
                </h2>
                <p class="pt-2">{{ slotProps.data.description }}</p>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style scoped>
::v-deep(.p-carousel-indicator-list) {
  display: flex;
  padding-top: 50px;
  /* transform: translateX(-50%);
  position: absolute;
  bottom: 0;
  left:50%; */
}

.bg-gray-300 {
  background-color: rgb(173, 173, 173);
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
