<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CarouselBanner from '../CarouselBanner.vue'
import ReviewCarousel from '../ReviewCarousel.vue'
import Carousel from 'primevue/carousel'
import VLazyImage from 'v-lazy-image'
import WhatsappCTA from '../WhatsappCTA.vue'

const image = ref()
const carouselRef = ref()

onMounted(() => {
  const jumlahGambar = 10 // Update this to the actual number of images
  image.value = []
  const imagePath = '/image/menuimage/'
  for (let idx = 1; idx <= jumlahGambar; idx++) {
    const imgPath = `${imagePath}${idx}.webp` // Ensure the file extension matches
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
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: '425px',
    numVisible: 2,
    numScroll: 2,
  },
])
</script>

<template>
  <WhatsappCTA class="z-100" />
  <CarouselBanner />
  <section class="bg-yellow-main-3 relative py-2 lg:py-20">
    <div class="bg-petals2 absolute top-0 left-0 h-100 w-full p-0"></div>

    <div class="flex flex-col">
      <section class="py-12 px-4 w-full md:px-16 text-red-main-1">
        <h2
          class="text-2xl lg:text-5xl font-bold text-center mb-8 bg-sparkle-no-repeat bg-center bg-pos-1 p-1 relative py-5"
        >
          <p class="z-1">Perjalanan Kami</p>
        </h2>
        <div
          class="flex w-full gap-10 flex-col lg:flex-row items-center lg:items-start justify-start pt-5 lg:pt-15"
        >
          <div class="flex flex-col flex-1 items-center gap-4">
            <VLazyImage class="h-80" loading="lazy" src="/image/journeyimage/1.webp" alt="" />
            <p class="text-center text-lg">
              <b>Sushi Stop pertama kali didirikan pada tahun 2020.</b> Dengan visi menjadi Brand
              nomor satu Sushi affordable di Indonesia
            </p>
          </div>
          <VLazyImage
            class="w-20 h-10 rotate-90 lg:rotate-0 self-center"
            loading="lazy"
            src="/image/kemitraan/arrow1.webp"
            alt=""
          />
          <div class="flex flex-col flex-1 items-center gap-4">
            <VLazyImage loading="lazy" class="h-80" src="/image/journeyimage/2.webp" alt="" />
            <p class="text-center text-lg">
              Pada tahun 2021 , Sushi Stop melakukan
              <b>ekspansi melalui pembukaan outlet/booth</b> di berbagai lokasi
            </p>
          </div>
          <VLazyImage
            class="w-20 h-10 rotate-90 lg:rotate-0 self-center"
            src="/image/kemitraan/arrow1.webp"
            alt=""
          />
          <div class="flex flex-col flex-1 items-center gap-4">
            <VLazyImage loading="lazy" class="h-80" src="/image/journeyimage/3.webp" alt="" />
            <p class="text-center text-lg">
              Pada tahun 2022 , Sushi Stop <b>membuka resto dine in pertama</b> di Greenville
            </p>
          </div>
        </div>
      </section>
      <div class="block lg:hidden flex justify-center items-center">
        <VLazyImage
          loading="lazy"
          class="w-20 h-10 rotate-90 lg:rotate-0 self-center"
          src="/image/kemitraan/arrow1.webp"
          alt=""
        />
      </div>
      <section class="py-12 px-4 w-full md:px-16 text-red-main-1">
        <div
          class="flex w-full gap-10 flex-col lg:flex-row items-center lg:items-start justify-between lg:pt-15"
        >
          <div class="flex flex-col items-center gap-4 flex-1">
            <VLazyImage loading="lazy" class="h-80" src="/image/journeyimage/4.webp" alt="" />
            <p class="text-center text-lg">
              Pada tahun 2023 , Sushi Stop melakukan rebranding perubahan logo dan
              <b>berkembang hingga 25 outlet di Jabodetabek</b>
            </p>
          </div>
          <VLazyImage
            loading="lazy"
            class="w-20 h-10 rotate-90 lg:rotate-0 self-center"
            src="/image/kemitraan/arrow1.webp"
            alt=""
          />
          <div class="flex flex-col items-center gap-4 flex-1">
            <VLazyImage loading="lazy" class="h-80" src="/image/journeyimage/5.webp" alt="" />
            <p class="text-center text-lg">
              Pada tahun 2024 , Sushi Stop membuka
              <b
                >resto dine in kedua dan ketiga serta menambah varian menu seperti Ramen dan
                Donburi</b
              >
            </p>
          </div>
          <VLazyImage
            loading="lazy"
            class="w-20 h-10 rotate-90 lg:rotate-0 self-center"
            src="/image/kemitraan/arrow1.webp"
            alt=""
          />
          <div class="flex flex-col items-center gap-4 flex-1">
            <VLazyImage loading="lazy" class="h-80" src="/image/journeyimage/6.webp" alt="" />
            <p class="text-center text-lg">
              Hingga tahun 2025 , Sushi Stop <b>membuka peluang kemitraan</b>
            </p>
          </div>
        </div>

        <h3
          class="text-2xl lg:text-2xl font-bold text-center mb-8 bg-center bg-pos-1 flex justify-center pt-40 items-center flex-col relative"
        >
          <div class="bg-petals2 absolute bottom-0 left-0 h-75 w-full"></div>
          <VLazyImage loading="lazy" class="w-30" src="/image/icons/mascots/mascot7.webp" alt="" />
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
              <VLazyImage :src="slotProps.data" loading="lazy" class="rounded-full h-full" />
            </figure>
          </template>
        </Carousel>

        <div class="flex flex-col justify-center items-center">
          <h2 class="text-5xl font-bold pb-5">Order Disini</h2>
          <div class="flex flex-col lg:justify-between lg:flex-row w-full gap-10">
            <a
              class="w-full"
              href="https://www.google.com/url?q=https%3A%2F%2Fshopee.co.id%2Funiversal-link%2Fnow-food%2FstoreListing%2F39483%3Fdeep_and_deferred%3D1%26shareChannel%3Dcopy_link&sa=D&sntz=1&usg=AOvVaw0AC7bn6AVRTaRC1wFe73cZ"
            >
              <button
                class="bg-yellow-main-1 flex gap-5 md:gap-10 items-center w-full lg:gap-5 lg:justify-center lg:justify-between text-white font-bold p-4 border-b-4 border-yellow-main-2 hover:border-red-main-1 rounded"
              >
                <img class="w-20 rounded" src="/image/icons/shopeefood.webp" alt="" />
                <div class="text-xl md:text-3xl text-red-main-1">Shopee Food</div>
              </button>
            </a>
            <a
              class="w-full"
              href="https://www.google.com/url?q=https%3A%2F%2Fgrab.onelink.me%2F2695613898%3Fpid%3Dinstagram_organic%26c%3D%26is_retargeting%3Dtrue%26af_dp%3Dgrab%253A%252F%252Fopen%253FscreenType%253DGRABFOOD%2526categoryShortcutID%253D8863%26af_web_dp%3D&sa=D&sntz=1&usg=AOvVaw2X_pAj1hqlINOzAUKJXdHe"
            >
              <button
                class="bg-yellow-main-1 flex gap-5 md:gap-10 items-center w-full lg:gap-5 lg:justify-center lg:justify-between text-white font-bold p-4 border-b-4 border-yellow-main-2 hover:border-red-main-1 rounded"
              >
                <img class="w-20 rounded" src="/image/icons/grabfood.webp" alt="" />
                <div class="text-xl md:text-3xl text-red-main-1">Grab Food</div>
              </button>
            </a>
            <a
              class="w-full"
              href="https://www.google.com/url?q=https%3A%2F%2Fgofood.link%2Fa%2FCg8GMz3%23&sa=D&sntz=1&usg=AOvVaw3A2Rbisu_WEQqN7grRF9rD"
            >
              <button
                class="bg-yellow-main-1 flex gap-5 md:gap-10 items-center w-full lg:gap-5 lg:justify-center lg:justify-between text-white font-bold p-4 border-b-4 border-yellow-main-2 hover:border-red-main-1 rounded"
              >
                <img class="w-20 rounded" src="/image/icons/gofood.webp" alt="" />
                <div class="text-xl md:text-3xl text-red-main-1">Go Food</div>
              </button>
            </a>
          </div>
        </div>
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

.bg-sparkle {
  background-image: url('/image/kemitraan/sparkle.webp');
  background-repeat: repeat;
  background-size: contain;
}

.bg-sparkle-no-repeat {
  background-image: url('/image/kemitraan/sparkle.webp');
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
  background-image: url('/image/kemitraan/platter5.webp');
  background-repeat: no-repeat;
  background-size: contain;
}

.bg-sakuratree {
  background: url('/image/kemitraan/sakura1.webp') no-repeat;
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
  background: url('/image/kemitraan/place1.webp');
  background-color: var(--bg-yellow-main-3);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom left;
}
</style>
