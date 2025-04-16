<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CarouselBanner from '../CarouselBanner.vue'
import ReviewCarousel from '../ReviewCarousel.vue'
import Carousel from 'primevue/carousel'
import { useElementVisibility } from '@vueuse/core'
import { vElementVisibility } from '@vueuse/components'
import { useTemplateRef } from 'vue'

const target = useTemplateRef<HTMLDivElement>('target')
const targetIsVisible = useElementVisibility(target)

const image = ref()
const carouselRef = ref()

onMounted(() => {
  const jumlahGambar = 59 // Update this to the actual number of images
  image.value = []
  const imagePath = '/image/menuimage/'
  for (let idx = 1; idx <= jumlahGambar; idx++) {
    const imgPath = `${imagePath}${idx}.JPG` // Ensure the file extension matches
    image.value.push(imgPath)
  }
})

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 6,
    numScroll: 1,
  },
  {
    breakpoint: '1199px',
    numVisible: 5,
    numScroll: 1,
  },
  {
    breakpoint: '767px',
    numVisible: 5,
    numScroll: 1,
  },
  {
    breakpoint: '575px',
    numVisible: 2,
    numScroll: 2,
  },
])
</script>

<template>
  <CarouselBanner />
  <section class="bg-yellow-main-3 relative py-2 lg:py-20">
    <div class="bg-petals2 absolute top-0 left-0 h-100 w-full"></div>
    <div class="bg-petals2 absolute bottom-150 left-0 h-50 w-full"></div>
    <div class="flex flex-col">
      <section class="py-12 px-4 w-full md:px-16 text-red-main-1">
        <h2
          class="text-2xl lg:text-5xl font-bold text-center mb-8 bg-sparkle-no-repeat bg-center bg-pos-1"
        >
          Perjalanan Kami
        </h2>
        <div
          class="flex w-full gap-10 flex-col lg:flex-row items-center justify-center pt-5 lg:pt-15"
        >
          <div class="flex flex-col flex-1 items-center gap-4">
            <img class="h-80" src="/image/journeyimage/1.png" alt="" />
            <p class="text-center text-lg">
              Sushi Stop pertama kali didirikanpada tahun 2020 , dengan visi menjadikan sushi yang
              affordable pertama di lndonesia
            </p>
          </div>
          <img class="w-20 h-10 rotate-90 lg:rotate-0" src="/image/kemitraan/arrow1.png" alt="" />
          <div class="flex flex-col flex-1 items-center gap-4">
            <img class="h-80" src="/image/journeyimage/2.png" alt="" />
            <p class="text-center text-lg">
              Pada tahun 2021 , Sushi Stop melakukan ekspansi melalui pembukaan outlet/booth di
              berbagai lokasi
            </p>
          </div>
          <img class="w-20 h-10 rotate-90 lg:rotate-0" src="/image/kemitraan/arrow1.png" alt="" />
          <div class="flex flex-col flex-1 items-center gap-4">
            <img class="h-80" src="/image/journeyimage/3.png" alt="" />
            <p class="text-center text-lg">
              Pada tahun 2022 , Sushi Stop membuka resto dinein pertama di GreenviIIe
            </p>
          </div>
        </div>
      </section>
      <div class="block lg:hidden flex justify-center items-center">
        <img class="w-20 h-10 rotate-90 lg:rotate-0" src="/image/kemitraan/arrow1.png" alt="" />
      </div>
      <section class="py-12 px-4 w-full md:px-16 text-red-main-1">
        <div class="flex w-full gap-10 flex-col lg:flex-row items-center justify-between lg:pt-15">
          <div class="flex flex-col items-center gap-4 flex-1">
            <img class="h-80" src="/image/journeyimage/4.png" alt="" />
            <p class="text-center text-lg">
              Pada tahun 2023 , Sushi Stop berkembang hingga 25 outlet di Jabodetabek
            </p>
          </div>
          <img class="w-20 h-10 rotate-90 lg:rotate-0" src="/image/kemitraan/arrow1.png" alt="" />
          <div class="flex flex-col items-center gap-4 flex-1">
            <img class="h-80" src="/image/journeyimage/5.png" alt="" />
            <p class="text-center text-lg">
              Pada tahun 2024 , Sushi Stop membuka resto dine in kedua dan ketiga serta menambah
              varian menu seperti Ramen dan Donburi
            </p>
          </div>
          <img class="w-20 h-10 rotate-90 lg:rotate-0" src="/image/kemitraan/arrow1.png" alt="" />
          <div class="flex flex-col items-center gap-4 flex-1">
            <img class="h-80" src="/image/journeyimage/6.png" alt="" />
            <p class="text-center text-lg">
              Hingga tahun 2025 , Sushi Stop membuka peluang kemitraan
            </p>
          </div>
        </div>

        <h3
          class="text-2xl lg:text-2xl font-bold text-center mb-8 bg-center bg-pos-1 flex justify-center pt-40 items-center flex-col relative"
        >
          <img class="w-30" src="/image/icons/mascots/mascot7.png" alt="" />
          <p class="md:w-100 lg:w-200">
            Dengan pengalaman lebih dari 5 tahun, sekarang Sushi Stop memiliki +- 30 Gerai Self
            Owned!
          </p>
        </h3>

        <Carousel
          ref="carouselRef"
          class="py-20"
          :value="image"
          :numVisible="6"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          circular
          :autoplayInterval="5000"
          :showNavigators="false"
          :showIndicators="false"
        >
          <template #item="slotProps">
            <figure class="h-45 lg:h-75 px-4">
              <img :src="slotProps.data" class="rounded-full h-full" alt="Shoes" />
            </figure>
          </template>
        </Carousel>
      </section>
    </div>
  </section>
  <ReviewCarousel class="bg-yellow-main-1" />
</template>

<style scoped>
h2 {
  margin-bottom: 1rem; /* Tambahkan jarak bawah pada header */
}
button.btn {
  margin-top: 1rem; /* Ensure margin-top is applied */
}

.white-outline {
  text-shadow:
    -2px -2px 0 #fff,
    2px -2px 0 #fff,
    -2px 2px 0 #fff,
    2px 2px 0 #fff;
}

.bg-sparkle {
  background-image: url('/image/kemitraan/sparkle.png');
  background-repeat: repeat;
  background-size: contain;
}

.bg-sparkle-no-repeat {
  background-image: url('/image/kemitraan/sparkle.png');
  background-repeat: no-repeat;
  background-size: contain;
}

.bg-pos-1 {
  background-position-x: 54%;
}

.bg-pos-2 {
  background-position-x: 70%;
}

.bg-platter {
  background-image: url('/image/kemitraan/platter5.png');
  background-repeat: no-repeat;
  background-size: contain;
}

.bg-petals2 {
  background: url('/image/kemitraan/sakura2.png');
  background-color: var(--bg-yellow-main-3);
  background-size: cover;
}

.bg-petals3 {
  background: url('/image/kemitraan/sakura2.png') no-repeat;
  background-size: cover;
}

.bg-sakuratree {
  background: url('/image/kemitraan/sakura1.png') no-repeat;
  background-size: cover;
}

.chatbox {
  background: white;
  border-radius: 20px;
}
.white-outline-box {
  box-shadow: 0px 0px 0px 3px #fff;
}

.no-outline {
  box-shadow: none;
}

.bg-outlet {
  background: url('/image/kemitraan/place1.png');
  background-color: var(--bg-yellow-main-3);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom left;
}
</style>
