<script setup lang="ts">
import { ref } from 'vue';
import emailjs from "@emailjs/browser"
import { Notivue, Notification, push, NotificationProgress } from 'notivue'


const name = ref('');
const whatsapp = ref('');
const email1 = ref('');
const targetTempat = ref('');


emailjs.init({ publicKey: 'nMbT1rYxofp1KmPdN' })


function sendMail() {
  const templateParams = {
                  nama: name.value,
                  nowa: whatsapp.value,
                  email: email1.value,
                  location: targetTempat.value
                };


            if (           name.value == ''
            ||           whatsapp.value == ''
            ||              email1.value == ''
            ||              targetTempat.value == '') {
    push.error('Mohon isi semua data sebelum menekan kirim')
    return
  }
    emailjs.send('service_kqv7d61', 'template_hylf8kv', templateParams).then(
      () => {
      push.success('Email berhasil dikirim')
    },
    () => {
      push.error('Email gagal dikirim')
    }
    );
}

</script>

<template>
  <Notivue v-slot="item">
    <Notification :item="item">
      <NotificationProgress :item="item" />
    </Notification>
  </Notivue>
  <body class="bg-yellow-main-2">
    <!-- Header Section -->
    <header class=" overflow-hidden flex justify-center items-center bg-yellow-main-3">
      <div class="w-full  bg-header py-20 lg:px-20 px-5 relative">
        <img src="/image/kemitraan/sakura1.png" class="z-0 absolute top-0 right-0 h-50 md:h-100 lg:h-150" alt="" />
        <img src="/image/kemitraan/platter1.png" class="z-0 absolute bottom-0 lg:-bottom-1/5 -right-25 h-50 md:h-75 lg:h-150" alt="" />
      <div class="flex flex-col gap-10 text-red-main-1 z-2">
        <!-- <img class="w-50 z-2" src="/image/icons/Logo.png" alt="" /> -->
        <h1 class="font-bold white-outline flex flex-col gap-2 lg:gap-5 z-2">
          <p class="text-3xl lg:text-8xl w-fit">Raih Keuntungan</p>
          <p class="text-3xl lg:text-8xl w-fit relative">
            <span class="z-1">PuIuhan Hingga</span>
            <img class="w-10 lg:w-20 absolute -bottom-3/4 z-0" src="/image/kemitraan/sparkle.png" alt="">
            <img class="w-10 lg:w-20 absolute left-3/7 top-0 z-0" src="/image/kemitraan/sparkle.png" alt="">
          </p>
          <p class="text-3xl lg:text-8xl w-fit relative">
            Ratusan Juta/Bulan
            <img class="w-10 lg:w-20 absolute left-1/1 top-0 z-0" src="/image/kemitraan/sparkle.png" alt="">
          </p>
          <p>
            <p class="text-md lg:text-3xl w-100 lg:w-200">Yuk jadi Sushi Preneur tanpa harus memikirkan branding marketing, dan operasional yang ribet!</p>
          </p>
        </h1>
        <div class="card w-full lg:w-fit bg-linear-to-r from-yellow-main-1 to-yellow-main-3 p-3">
          <a href="#Daftar">
            <div class="text-md lg:text-4xl white-outline py-2 lg:py-5 lg:px-40 font-bold text-center white-outline-box rounded-lg">
              Daftar
            </div>

          </a>
        </div>
      </div>
      </div>
    </header>

    <!-- Main Value Proposition -->
    <section class="pt-5 px-4 md:px-16 bg-yellow-main-2 text-red-main-1 relative flex justify-center">
      <div class="container mx-auto z-1 bg-petals2">
        <h2 class="text-2xl pt-20 lg:text-7xl font-bold text-center mb-8">Jadilah Bagian Dari Sushi Stop!</h2>
        <h3 class="text-md lg:text-4xl text-center pt-4">Kalian tidak <b>perlu lagi khawatir</b> lagi tentang...</h3>
        <div class="flex flex-col md:flex-row gap-5 items-center justify-center pt-15">
          <div class="self-end">
            <img src="/image/kemitraan/chef.png" alt="Chef Preparing Sushi" class="w-200 z-0" />
          </div>
          <div class="order-first lg:order-last lg:w-150 bg-white rounded-lg p-10 relative">
            <div class="left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 absolute z-0">
              <img src="/image/kemitraan/mascotandbulb.png" alt="Chef Preparing Sushi" class="w-40 z-0" />
            </div>
            <ul class="flex flex-col gap-5 pt-5 z-3 text-xl">
              <li class="flex items-start gap-4">
                <p>
                  •
                </p>
                <p>
                  Ribet membuat usaha dari 0 dan mengurus operasional, karyawan, dll
                </p>
         </li>
              <li class="flex items-start gap-4">
                <p>
                  •
                </p>
                <p>
                  Bingung menciptakan produk yang
                  autentik, bervariasi, dan tidak
                  ketinggalan zaman.
                </p>
         </li>
              <li class="flex items-start gap-4">
                <p>•</p>
                <p>Trial error dalam membangun usaha F&B</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>


    <!-- Journey Section -->
    <!-- <section class="py-12 px-4 w-full md:px-16 bg-yellow-main-3 text-red-main-1">
      <h2 class="text-2xl lg:text-7xl font-bold text-center mb-8 bg-sparkle-no-repeat bg-center bg-pos-1">Perjalanan Kami</h2>
      <div class="flex w-full gap-10 flex-col lg:flex-row items-center justify-center pt-15 bg-petals2">
        <div class="flex flex-col items-center gap-4">
          <img class="w-80 h-50" src="/image/kemitraan/platter2.png" alt="">
          <p class="text-center text-lg">Sushi Stop pertama kali didirikan
              pada tahun 2020, dengan visi
              menjadikan sushi yang
              affordable pertama di Indonesia</p>
        </div>
        <img class="w-20 h-10 rotate-90 lg:rotate-0" src="/image/kemitraan/arrow1.png" alt="">
        <div class="flex flex-col items-center gap-4">
          <img class="w-80 h-50" src="/image/kemitraan/platter1.png" alt="">
          <p class="text-center text-lg">Sushi Stop berkembang
              dengan menciptakan
              varian menu lainnya,
              seperti ramen dan dounburi</p>
        </div>
        <img class="w-20 h-10 rotate-90 lg:rotate-0" src="/image/kemitraan/arrow1.png" alt="">
        <div class="flex flex-col items-center gap-4">
          <img class="w-50 h-50" src="/image/kemitraan/tempat1.png" alt="">
          <p class="text-center text-lg">Dengan pengalaman lebih
dari 5 tahun, sekarang
Sushi Stop memiliki
30 Gerai Self Owned!</p>
        </div>
      </div>
    </section> -->

    <!-- Advantages Section -->
    <section class="py-20 px-4 flex flex-col justify-center items-center bg-yellow-main-3 relative">
      <h2 class="text-2xl lg:text-7xl font-bold text-center py-8 text-red-main-1 bg-sparkle-no-repeat bg-pos-2">Keunggulan Kami</h2>
      <div class="bg-petals2 lg:hidden absolute top-0 left-0 h-100 w-full"></div>
      <div class="bg-petals2 lg:hidden absolute bottom-0 left-0 h-50 w-full"></div>
      <div class="container flex justify-center items-center mx-auto bg-petals3">
        <div class="flex gap-1 flex-col lg:flex-row items-center justify-center">
          <div class="bg-yellow-main-3 p-6 rounded-lg">
            <img src="/image/kemitraan/trophy.png" alt="Support Icon" class="w-60 lg:w-200" />
          </div>
          <div class="p-6 rounded-lg text-red-main-1 flex flex-col gap-5 items-end">
              <div class="card  bg-linear-to-r from-yellow-main-1 to-yellow-main-3 p-3">
                <div class="p-2 text-md lg:text-xl lg:w-150 font-bold text-center white-outline-box rounded-lg">
                  Sebagai pelopor sushi affordable pertama di lndonesia, Kami melihat potensi dan antusiasme pasar masih sangatlah besar.
                </div>
              </div>
              <div class="card  bg-linear-to-r from-yellow-main-1 to-yellow-main-3 p-3">
                <div class="p-2 text-md lg:text-xl lg:w-200 font-bold text-center white-outline-box rounded-lg">
                  Dengan pengalaman lebih dari 5 tahun dan keberhasilan melewati masa pandemi, Sushi Stop hadir sebagai brand yang kuat dengan support system yang siap mendukung setiap mitra untuk berkembang bersama.
                </div>
              </div>
              <div class="card  bg-linear-to-r from-yellow-main-1 to-yellow-main-3 p-3">
                <div class="p-2 text-md lg:text-xl lg:w-150 font-bold text-center white-outline-box rounded-lg">
                  Peluang bisnis dengan ROI yang menarik dengan potensi income puluhan hingga ratusan juta perbulan
                </div>
              </div>
              <div class="card  bg-linear-to-r from-yellow-main-1 to-yellow-main-3 p-3">
                <div class="p-2 text-md lg:text-xl lg:w-150 font-bold text-center white-outline-box rounded-lg">
                  Telah meraih banyak penghargaan dari platform Shopee, Grabfood, dan Gofood
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
     <section class="py-12 bg-yellow-main-2 flex justify-center items-center text-black-main-1">
      <div class="flex-col flex gap-5 lg:justify-between items-center ">
        <div class="bg-white w-3/4 lg:w-150 p-5 px-10 rounded-4xl relative flex flex-col gap-2 lg:self-end">
          <img class="w-10 lg:w-20 absolute left-3/4 -bottom-4 z-0" src="/image/kemitraan/sparkle.png" alt="">
          <div class="justify-center items-center text-2xl text-red-main-1 font-bold gap-5 instagram-wrapper flex z-5">
            <img class="w-4 lg:w-8" src="/image/icons/instagram2.png" alt="">
            <p>NANAKOOT</p>
          </div>
          <div class="z-4 text-[10px] lg:text-2xl text-center">"Tempatnya cozzy, ada dekorasi Jepang bisa buat foto-foto, varian sushinya bervarian dan cocok di lidah kita! Dengan harga yang affordable, rasanya enak dan berkualitas, ini sih WORTH BANGET!"</div>
          <svg class="absolute -bottom-5 -right-7 w-20" viewBox="0 0 79 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M48.3791 0C48.3791 0 -5.95735 61 0.539388 53.5C7.03613 46 79 74 79 74C79 74 62.7229 63.4841 56.0115 53.5C44.2394 35.9874 48.3791 0 48.3791 0Z" fill="white"/>
          </svg>
        </div>
      <div class="flex items-center lg:gap-15 justify-center w-full">
        <div class="bg-white w-3/4 lg:w-150 h-fit p-5 px-10 rounded-4xl relative flex flex-col gap-2">
          <img class="w-10 lg:w-20 absolute -left-5 -top-4 z-0" src="/image/kemitraan/sparkle.png" alt="">
          <div class="justify-center  items-center text-sm lg:text-2xl text-red-main-1 font-bold gap-5 instagram-wrapper flex z-5">
            <img class="w-4 lg:w-8" src="/image/icons/instagram2.png" alt="">
            <p>KULINERSAMACICI</p>
          </div>
          <div class="z-4 text-[10px] lg:text-2xl text-center">"Korean Daebak Combo Roll ini adalah kesukaan aku dan suami. Rasanya juga enak-enak semua!"</div>

          <svg class="-bottom-5 -left-7 absolute z-0" width="80" height="74" viewBox="0 0 80 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.6363 0C30.6363 0 85 61 78.5 53.5C72 46 0 74 0 74C0 74 16.2852 63.4841 23 53.5C34.778 35.9874 30.6363 0 30.6363 0Z" fill="white"/>
        </svg>
        </div>
        <img class="w-25 md:w-25 lg:w-auto lg:h-50 hidden md:block" src="/image/kemitraan/platter3.png" alt="">
      </div>

      <div class="flex items-center lg:gap-15 justify-center w-full">
        <img class="w-25 md:w-25 lg:w-auto lg:h-30 hidden md:block" src="/image/kemitraan/mascot1.png" alt="">
        <div class="bg-white w-3/4 lg:w-150 h-fit p-5 px-10 rounded-4xl relative flex flex-col gap-2">
          <img class="w-10 lg:w-20 absolute -left-20 -top-4 z-0" src="/image/kemitraan/sparkle.png" alt="">
          <img class="w-10 lg:w-20 absolute -right-1/30 -bottom-20 z-0" src="/image/kemitraan/sparkle.png" alt="">
          <div class="justify-center  items-center text-sm lg:text-2xl text-red-main-1 font-bold gap-5 instagram-wrapper flex z-5">
            <img class="w-4 lg:w-8" src="/image/icons/instagram2.png" alt="">
            <p>⁠lululahfah</p>
          </div>
          <div class="z-4 text-[10px] lg:text-2xl text-center">“Asik makan sushiStop!”</div>

          <svg class="absolute -bottom-5 -right-7 w-20" viewBox="0 0 79 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M48.3791 0C48.3791 0 -5.95735 61 0.539388 53.5C7.03613 46 79 74 79 74C79 74 62.7229 63.4841 56.0115 53.5C44.2394 35.9874 48.3791 0 48.3791 0Z" fill="white"/>
        </svg>
        </div>
      </div>

      <div class="flex items-center lg:gap-15 justify-center w-full">
        <div class="bg-white w-3/4 lg:w-150 h-fit p-5 px-10 rounded-4xl relative flex flex-col gap-2">
          <div class="justify-center  items-center text-sm lg:text-2xl text-red-main-1 font-bold gap-5 instagram-wrapper flex z-5">
            <img class="w-4 lg:w-8" src="/image/icons/instagram2.png" alt="">
            <p>foodierectory</p>
          </div>
          <div class="z-4 text-[10px] lg:text-2xl text-center">“sushinya sih udah enak, affordable pula!”</div>

          <svg class="-bottom-5 -left-7 absolute z-0 w-20" viewBox="0 0 80 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.6363 0C30.6363 0 85 61 78.5 53.5C72 46 0 74 0 74C0 74 16.2852 63.4841 23 53.5C34.778 35.9874 30.6363 0 30.6363 0Z" fill="white"/>
        </svg>
        </div>
        <img class="w-25 md:w-25 lg:w-auto lg:h-50 hidden md:block" src="/image/kemitraan/mascot3.png" alt="">
      </div>



      <div class="flex items-center lg:gap-15 justify-center w-full">
        <img class="w-25 md:w-25 lg:w-auto lg:h-30 hidden md:block" src="/image/kemitraan/platter2.png" alt="">
        <div class="bg-white w-3/4 lg:w-150 h-fit p-5 px-10 rounded-4xl relative flex flex-col gap-2">
          <img class="w-10 lg:w-20 absolute -left-20 -top-4 z-0" src="/image/kemitraan/sparkle.png" alt="">
          <img class="w-10 lg:w-20 absolute -right-1/30 -bottom-20 z-0" src="/image/kemitraan/sparkle.png" alt="">
          <div class="justify-center  items-center text-sm lg:text-2xl text-red-main-1 font-bold gap-5 instagram-wrapper flex z-5">
            <img class="w-4 lg:w-8" src="/image/icons/instagram2.png" alt="">
            <p>heyitsmomochan</p>
          </div>
          <div class="z-4 text-[10px] lg:text-2xl text-center">“Nemuin Sushi yang enak bngt tapi harganya terjangkau cuma di Sushi Stop!”</div>

          <svg class="absolute -bottom-5 -right-7 w-20" viewBox="0 0 79 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M48.3791 0C48.3791 0 -5.95735 61 0.539388 53.5C7.03613 46 79 74 79 74C79 74 62.7229 63.4841 56.0115 53.5C44.2394 35.9874 48.3791 0 48.3791 0Z" fill="white"/>
        </svg>
        </div>
      </div>

      <div class="flex items-center lg:gap-15 justify-center w-full">
        <div class="bg-white w-3/4 lg:w-150 h-fit p-5 px-10 rounded-4xl relative flex flex-col gap-2">
          <div class="justify-center  items-center text-sm lg:text-2xl text-red-main-1 font-bold gap-5 instagram-wrapper flex z-5">
            <img class="w-4 lg:w-8" src="/image/icons/instagram2.png" alt="">
            <p>Kulinersamaagam</p>
          </div>
          <div class="z-4 text-[10px] lg:text-2xl text-center">"Pas aku cobain wah enak banget walapun harga murah tapi rasanya berkelas gitu. Favorite aku yang Chicken Katsu dan Salmon Roll."</div>

          <svg class="-bottom-5 -left-7 absolute z-0 w-20" viewBox="0 0 80 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.6363 0C30.6363 0 85 61 78.5 53.5C72 46 0 74 0 74C0 74 16.2852 63.4841 23 53.5C34.778 35.9874 30.6363 0 30.6363 0Z" fill="white"/>
        </svg>
        </div>
        <img class="w-25 md:w-25 lg:w-auto lg:h-50 hidden md:block" src="/image/kemitraan/mascot2.png" alt="">
      </div>
      <div class="flex items-center lg:gap-15 justify-center w-full">
        <img class="w-25 md:w-25 lg:w-auto lg:h-30 hidden md:block" src="/image/kemitraan/mascot4.png" alt="">
        <div class="bg-white w-3/4 lg:w-150 h-fit p-5 px-10 rounded-4xl relative flex flex-col gap-2">
          <img class="w-10 lg:w-20 absolute -left-20 -top-4 z-0" src="/image/kemitraan/sparkle.png" alt="">
          <img class="w-10 lg:w-20 absolute -right-1/30 -bottom-20 z-0" src="/image/kemitraan/sparkle.png" alt="">
          <div class="justify-center  items-center text-sm lg:text-2xl text-red-main-1 font-bold gap-5 instagram-wrapper flex z-5">
            <img class="w-4 lg:w-8" src="/image/icons/instagram2.png" alt="">
            <p>Hendry.jonathan</p>
          </div>
          <div class="z-4 text-[10px] lg:text-2xl text-center">“Favorite aku yang Unagi! Tempatnya juga estetik banget bisa buat foto.”
          </div>

          <svg class="absolute -bottom-5 -right-7 w-20" viewBox="0 0 79 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M48.3791 0C48.3791 0 -5.95735 61 0.539388 53.5C7.03613 46 79 74 79 74C79 74 62.7229 63.4841 56.0115 53.5C44.2394 35.9874 48.3791 0 48.3791 0Z" fill="white"/>
        </svg>
        </div>
      </div>

    </div>
     </section>


    <!-- <section class="py-12 bg-yellow-main-3 flex justify-center items-center">
      <div class="w-full flex flex-col justify-center items-center text-red-main-1">
        <h2 class="text-2xl lg:text-7xl font-bold text-center mb-12">Testimoni Mitra Kami</h2>

        <div class="influencer-wrapper flex items-center justify-center flex-col">
          <div class="flex items-end justify-end lg:justify-between lg:gap-4 pt-15 lg:pt-30 w-full">
          <div class="left-wrapper flex flex-col justify-between self-start w-full">
            <div class="chat chat-end w-full">
              <div class="chat-bubble w-full text-center bg-white text-red-main-1 text-[8px] sm:text-sm lg:text-3xl p-2 lg:p-10">
                <h3 class="font-bold pb-5 lg:pb-10">Aurel Hermansyah (Public Figure)</h3>
                <p>"Sushinya enaakk! Enak-enak semua banyak variant
                  jadi pengen coba-coba yang lain."</p>
              </div>
            </div>
            <div class="flex justify-end items-center lg:pr-20 lg:pt-20">
              <img class="w-20 lg:w-60" src="/image/kemitraan/platter3.png" alt="">
              <img class="w-20 lg:w-60" src="/image/kemitraan/mascot1.png" alt="">
            </div>
          </div>

          <div class="img w-50 lg:w-200 justify-end">
            <img class="w-full" src="/image/kemitraan/influencer1.png" alt="">
          </div>
        </div>

          <div class="flex flex-col items-start justify-start gap-4 w-full">
            <div class="flex justify-start gap-4 h-40 lg:h-120">
              <div class="img w-50 lg:w-200">
              <img class="w-full" src="/image/kemitraan/influencer2.png" alt="">
            </div>
            <div class="left-wrapper flex flex-col lg:justify-between lg:self-end w-full">
              <div class="chat chat-start w-full shrink-2">
                <div class="w-full chat-bubble text-center bg-white text-red-main-1 text-[8px] sm:text-sm lg:text-3xl p-2 lg:p-10">
                  <h3 class="font-bold pb-5 lg:pb-10 w-full">Tyas Mirasih (Public Figure)</h3>
                  <p>"Aku ambil yang paketan jadi udah termasuk
                      minumannya. Rasanya enak banget!!! Crunchy didalam!
                      Menu nya juga banyak banget!"</p>
                </div>
              </div>
              <div class="flex justify-start -translate-x-10 translate-y--1 lg:-translate-x-30 lg:translate-y-30 items-center lg:pr-20 lg:pt-20">
                <img class="w-35 lg:w-80" src="/image/kemitraan/platter4.png" alt="">
              </div>
            </div>
            </div>

            <div class="flex self-end gap-4 lg:pt-25">
              <div class="left-wrapper flex flex-col justify-between self-start w-full">
                <div class="chat chat-end w-full">
                  <div class="chat-bubble w-full text-center bg-white text-red-main-1 text-[8px] sm:text-sm lg:text-3xl p-2 lg:p-10">
                    <h3 class="font-bold pb-5 lg:pb-10">Aurel Hermansyah (Public Figure)</h3>
                    <p>"Sushinya enaakk! Enak-enak semua banyak variant
                      jadi pengen coba-coba yang lain."</p>
                  </div>
                </div>
              </div>

              <div class="img w-50 lg:w-200">
                <img class="w-full" src="/image/kemitraan/influencer3.png" alt="">
              </div>
            </div>
        </div>

          </div>



      </div>
    </section> -->

    <!-- Brand Values Section -->
    <section class="py-12 pt-3 bg-yellow-main-3 relative flex justify-center realative">
      <div class="container px-5 lg:px-50 py-20 lg:py-50 flex flex-col gap-7 bg-petals3 relative">
        <div class="w-150 h-200 bg-sakuratree absolute right-0 top-0 z-0"></div>
        <div class="mb-12 flex flex-col gap-4 z-2">
           <div class="flex items-center gap-5">
             <h3 class="text-2xl lg:text-5xl font-bold text-red-main-1 text-center mb-6">Brand Vision</h3>
             <img class="w-20" src="/image/kemitraan/mascot2.png" alt="">
            </div>
          <div class="bg-linear-to-r from-yellow-main-1 to-yellow-main-3 p-3 w-fit text-red-main-1 rounded-lg relative">
            <img class="w-10 lg:w-20 absolute -left-20 -top-4 z-0" src="/image/kemitraan/sparkle.png" alt="">
            <p class="white-outline-box p-5 rounded-lg text-sm lg:text-2xl">
              Menjadi restoran sushi terdepan yang memberikan pengalaman kuliner Jepang premium dengan harga terjangkau dan membawa kelezatan yang autentik ke seluruh Indonesia.
            </p>
          </div>
        </div>
        <div class="mb-12 flex flex-col gap-4 z-2">
           <div class="flex items-center gap-5">
             <h3 class="text-2xl lg:text-5xl font-bold text-red-main-1 text-center mb-6">Brand Purpose</h3>
             <img class="w-20" src="/image/kemitraan/mascot3.png" alt="">
          </div>
          <div class="bg-linear-to-r from-yellow-main-1 to-yellow-main-3 p-3 lg:w-fit text-red-main-1 rounded-lg relative">
            <img class="w-10 lg:w-20 absolute -right-0 -top-4 z-0" src="/image/kemitraan/sparkle.png" alt="">
            <p class="white-outline-box p-5 rounded-lg text-sm lg:text-2xl">
              Kami percaya bahwa kualitas dan inovasi tidak harus mahal, dan kami ingin membuka kesempatan bagi para mitra bisnis untuk bergabung dan menawarkan peluang investasi bisnis yang berpotensi memberikan income puluhan hingga ratusan juta di industri kuliner yang berkembang pesat dengan komitmen terhadap kualitas, inovasi, dan potensi pertumbuhan yang besar.
            </p>
          </div>
        </div>
        <div class="mb-12 flex flex-col gap-4">
           <div class="flex items-center gap-5">
             <h3 class="text-2xl lg:text-5xl font-bold text-red-main-1 text-center mb-6">Brand Promise</h3>
             <img class="w-20" src="/image/kemitraan/mascot4.png" alt="">
          </div>
          <div class="bg-linear-to-r from-yellow-main-1 to-yellow-main-3 p-3 w-fit text-red-main-1 rounded-lg relative">
            <img class="w-10 lg:w-20 absolute -left-20 -top-4 z-0" src="/image/kemitraan/sparkle.png" alt="">
            <p class="white-outline-box p-5 rounded-lg text-sm lg:text-2xl">
              Kami berkomitmen mendampingi Anda disetiap langkah perjalanan bisnis, memastikan bahwa bisnis Anda tumbuh,berkembang, dan terbuka secara transparant.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ROI Section -->
    <!-- <section class="py-12 px-4 md:px-16 bg-yellow-main-3 flex justify-center items-center">
      <div class="container mx-auto bg-petals3">
        <h2 class="text-2xl lg:text-7xl font-bold text-center mb-8 text-red-main-1">ROI (Ilustrasi Hasil Modal)</h2>
        <div class="overflow-x-auto py-20">
         <img src="/image/kemitraan/roi.png" alt="">
        </div>
      </div>
    </section> -->

    <!-- How to Join Section -->
    <section class="bg-yellow-main-2 text-red-main-1 w-full flex justify-center">

      <div class="bg-petals2 z-1 lg:py-50 w-full lg:max-w-[1536px] max-w-screen flex justify-center items-center relative">
        <img class="absolute md:w-100 lg:w-200 left-0" src="/image/kemitraan/platter5.png" alt="">
        <div class="flex items-center justify-center pt-20 ">
          <div class="flex gap-10 p-10 relative justify-center flex-col lg:flex-row">
            <div class="w-full h-full z-0 absolute left-0 bottom-0 z-0 translate-y-15 -translate-x-25"></div>
            <div class="left z-1">
              <h3 class="flex flex-col text-4xl lg:text-6xl gap-4 font-bold">
                <p>Cara</p>
                <p>Bergabung</p>
                <img class="w-15" src="/image/kemitraan/heart.png" alt="">
              </h3>

            </div>
            <div class="right bg-white z-1 rounded-lg p-5 lg:p-20 flex flex-col gap-8">
              <div class="wrapper items-center flex gap-5">
                <img class="w-10" src="/image/kemitraan/location.png" alt="">
                <p class="bold text-sm lg:text-lg">Pengajuan lokasi usaha yang <br> dilakukan Oleh Mitra</p>
              </div>
              <div class="wrapper items-center flex gap-5">
                <img class="w-10 h-13" src="/image/kemitraan/pena.png" alt="">
                <p class="bold text-sm lg:text-lg">Penandatanganan kontrak</p>
              </div>
              <div class="wrapper items-center flex gap-5">
                <img class="w-10" src="/image/kemitraan/paid.png" alt="">
                <p class="bold text-sm lg:text-lg">Pembayaran invoice</p>
              </div>
              <div class="wrapper items-center flex gap-5">
                <img class="w-10" src="/image/kemitraan/gear.png" alt="">
                <p class="bold text-sm lg:text-lg">2 Minggu persiapan peralatan</p>
              </div>
              <div class="wrapper items-center flex gap-5">
                <img class="w-10" src="/image/kemitraan/truck.png" alt="">
                <p class="bold text-sm lg:text-lg">1 Minggu pengiriman</p>
              </div>
              <div class="wrapper items-center flex gap-5">
                <img class="w-10" src="/image/kemitraan/manager.png" alt="">
                <p class="bold text-sm lg:text-lg">Pelatihan pegawai</p>
              </div>
              <div class="wrapper items-center flex gap-5">
                <img class="w-10" src="/image/kemitraan/mascot5.png" alt="">
                <p class="bold text-sm lg:text-lg">Pembukaan Sushi Stop</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Why Join Section -->
     <!-- Journey Section -->
    <section class="py-12 px-4 w-full md:px-16 bg-yellow-main-3 text-red-main-1 flex justify-center flex-col items-center relative">
      <h2 class="text-2xl lg:text-7xl font-bold text-center mb-8 relative">
        Saatnya wujudkan Impian Anda!
        <img class="w-10 lg:w-20 absolute -left-1/40 -top-4 z-0" src="/image/kemitraan/sparkle.png" alt="">
        <img class="w-10 lg:w-20 absolute -right-1/40 top-4 z-0" src="/image/kemitraan/sparkle.png" alt="">
      </h2>

      <div class="flex items-center justify-center pt-15 gap-20 lg:gap-0 flex-col lg:flex-row">
        <div class="flex flex-col items-center gap-10 flex-1 lg:gap-4">
          <div class="h-40">
            <img class="h-40" src="/image/kemitraan/money.png" alt="">
          </div>
          <p class="px-5 font-semibold text-xl lg:px-10 text-center">Peluang bisnis
            yang menguntungkan
            dan investasi berkelanjutan
            cocok untuk Anda yang ingin
            memiliki passive income</p>
        </div>

        <div class="flex flex-col items-center gap-10 flex-1 lg:gap-4">
          <div class="h-40">

            <img class=" h-40" src="/image/kemitraan/gate.png" alt="">
          </div>
          <p class="px-5 font-semibold text-xl lg:px-10 text-center">Menjalakan usaha
dengan brand
yang sudah dikenal luas</p>
        </div>

        <div class="flex flex-col items-center gap-10 flex-1 lg:gap-4">
          <div class="h-40">

            <img class="h-40 w-50" src="/image/kemitraan/mascot1.png" alt="">
          </div>
          <p class="px-5 font-semibold text-xl lg:px-10 text-center">Punya bisnis kuliner hits
tanpa harus memulai dari 0
dan memanfaatkan tren
makanan Jepang yang terus
berkembang</p>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section id="Daftar" class=" bg-yellow-main-2  flex flex-col lg:flex-row justify-center items-center">
      <div class=" container bg-petals3 relative w-full h-full pt-10 py-20 px-4 md:px-16">
        <div class="w-full h-full bg-petals3 left-0 top-0 rotate-180 z-0"></div>
        <img src="/image/kemitraan/place1.png" class=" absolute bottom-0 -left-20 hidden lg:block md:w-1/2 order-last md:order-first" alt="">
        <div class="w-50 lg:w-150 lg:h-150 bg-sakuratree absolute right-0 top-0 z-0"></div>
        <div class=" lg:pl-120 flex justify-center items-center md:items-end gap-10 md:flex-row flex-col">
          <div class="w-full lg:w-auto flex flex-col gap-5 text-red-main-1 z-2 lg:py-20">
            <img class="w-40 lg:w-70 z-2" src="/image/icons/Logo.png" alt="" />
            <div class="wrapper flex flex-col">
              <p class="pl-5 font-bold">Nama</p>
              <div class="flex items-center bg-yellow-main-3 rounded-full px-5 py-2">
                      <input
                        v-model="name"
                        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Jane Doe"
                        aria-label="Full name"
                      />
            </div>
            </div>
            <div class="wrapper flex flex-col">
              <p class="pl-5 font-bold">No Whatsapp</p>
              <div class="flex items-center bg-yellow-main-3 rounded-full px-5 py-2">
                      <input
                        v-model="whatsapp"
                        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="08828xxxx"
                      />
            </div>
            </div>
            <div class="wrapper flex flex-col">
              <p class="pl-5 font-bold">Email</p>
              <div class="flex items-center bg-yellow-main-3 rounded-full px-5 py-2">
                      <input
                      v-model="email1"
                        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="example@gmail.com"
                      />
            </div>
            </div>
            <div class="wrapper flex flex-col">
              <p class="pl-5 font-bold">Target Penempatan Franchise</p>
              <div class="flex items-center bg-yellow-main-3 rounded-full px-5 py-2">
                      <input
                        v-model="targetTempat"
                        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Alamat lengkap target lokasi"
                      />
            </div>
            </div>
            <div class="btn-wrapper pt-10 lg:pr-10 self-start w-full lg:w-auto">
              <div @click="sendMail" class="card w-full lg:w-fit bg-linear-to-r from-yellow-main-1 to-yellow-main-3 p-3">
            <div class="text-md lg:text-2xl white-outline py-2 lg:py-2 lg:px-40 font-bold text-center white-outline-box rounded-lg">
              Kirim
            </div>
        </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/image/kemitraan/place1.png" class=" md:hidden px-4 h-70 order-last" alt="">
    </section>
  </body>
</template>
<style scoped>
  .white-outline {
    text-shadow: -2px -2px 0 #FFF, 2px -2px 0 #FFF, -2px 2px 0 #FFF, 2px 2px 0 #FFF;
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

  .bg-petals2{
    background: url('/image/kemitraan/sakura2.png');
    background-color: var(--bg-yellow-main-3);
    background-size: cover;
  }

  .bg-petals3{
    background: url('/image/kemitraan/sakura2.png') no-repeat;
    background-size: cover;
  }

  .bg-sakuratree{
    background: url('/image/kemitraan/sakura1.png') no-repeat;
    background-size: cover;

  }

  .chatbox {
    background: white;
    border-radius: 20px;
  }
  .white-outline-box{
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
