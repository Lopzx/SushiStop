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
    <header class="bg-yellow-main-3 bg-header py-20 lg:px-20 px-5 relative overflow-hidden">
      <img src="/image/kemitraan/sakura1.png" class="z-0 absolute top-0 right-0 w-80 lg:w-2/7" alt="" />
      <img src="/image/kemitraan/platter1.png" class="z-0 absolute bottom-0 lg:-bottom-1/5 -right-25 w-120 lg:w-5/8" alt="" />
      <div class="flex flex-col gap-10 text-red-main-1 z-2">
        <img class="w-50 z-2" src="/image/icons/Logo.png" alt="" />
        <h1 class="font-bold white-outline flex flex-col gap-2 lg:gap-5 z-2">
          <p class="text-md lg:text-3xl">Bisnis Kemitraan</p>
          <p class="text-lg lg:text-3xl">Raih Keuntungan Hingga</p>
          <p class="text-5xl lg:text-8xl w-fit bg-sparkle">10 JT/Bulan</p>
          <p>
            <p class="text-lg lg:text-3xl">Nikmati peluang kesuksesan bisnis Anda</p>
            <p class="text-lg lg:text-3xl">Dengan branding yang telah disiapkan!</p>
          </p>
        </h1>
        <button
          class=" z-2 btn lg:w-80 bg-red-main-1 text-sm md:text-lg lg:text-2xl h-auto py-2 rounded-full text-left shadow-none"
          style="border: none"
        >
          Tentang Kemitraan
        </button>
      </div>
    </header>

    <!-- Main Value Proposition -->
    <section class="pt-5 px-4 md:px-16 bg-yellow-main-2 text-red-main-1 relative flex justify-center">
      <div class="container mx-auto z-1 bg-petals2">
        <h2 class="text-2xl lg:text-5xl font-bold text-center mb-8">Jadilah Bagian Dari Sushi Stop!</h2>
        <h3 class="text-md lg:text-xl font-semibold text-center pt-4">Kuliner tidak perlu khawatir lagi tentang...</h3>
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
                   Takut balik modal lama dan margin kecil
                </p>
         </li>
              <li class="flex items-start gap-4">
                <p>
                  •
                </p>
                <p>
                   Bingung buat branding dan pemasaran
                </p>
         </li>
              <li class="flex items-start gap-4">
                <p>•</p>
                <p>Bingung menciptakan produk yang
                      autentik, bervariasi, dan tidak
                      ketinggalan zaman.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>


    <!-- Journey Section -->
    <section class="py-12 px-4 w-full md:px-16 bg-yellow-main-3 text-red-main-1">
      <h2 class="text-2xl lg:text-5xl font-bold text-center mb-8 bg-sparkle-no-repeat bg-center bg-pos-1">Perjalanan Kami</h2>
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
    </section>

    <!-- Advantages Section -->
    <section class="py-12 px-4 flex flex-col justify-center items-center bg-yellow-main-2">
      <h2 class="text-2xl lg:text-5xl font-bold text-center mb-12 text-red-main-1 bg-sparkle-no-repeat bg-pos-2">Keunggulan Kami</h2>
      <div class="container flex justify-center items-center mx-auto bg-petals2">
        <div class="flex gap-4 flex-col lg:flex-row items-center justify-center">
          <div class="bg-yellow-main-2 p-6 rounded-lg">
            <img src="/image/kemitraan/trophy.png" alt="Support Icon" class="w-60 lg:w-100" />
          </div>
          <div class="p-6 rounded-lg text-red-main-1 flex flex-col gap-5">
              <div class="card  bg-linear-to-r from-yellow-main-1 to-yellow-main-3 p-3">
                <div class="p-2 text-md lg:text-xl lg:w-150 font-bold text-center white-outline-box rounded-lg">
                  Menjadi brand sushi berkualitas dengan harga affordable pertama di Indonesia
                </div>
              </div>
              <div class="card  bg-linear-to-r from-yellow-main-1 to-yellow-main-3 p-3">
                <div class="p-2 text-md lg:text-xl lg:w-150 font-bold text-center white-outline-box rounded-lg">
                  Bisnis dengan modal rendah berimbal dengan
                  income puluhan hingga ratusan juta per bulan
                </div>
              </div>
              <div class="card  bg-linear-to-r from-yellow-main-1 to-yellow-main-3 p-3">
                <div class="p-2 text-md lg:text-xl lg:w-150 font-bold text-center white-outline-box rounded-lg">
                  Bisnis telah berjalan lebih dari 5 tahun
                  dan memiliki strong support system
                </div>
              </div>
              <div class="card  bg-linear-to-r from-yellow-main-1 to-yellow-main-3 p-3">
                <div class="p-2 text-md lg:text-xl lg:w-150 font-bold text-center white-outline-box rounded-lg">
                  Telah meraih banyak penghargaan dari
                  platform Shopee,Grabfood,dan Gofood
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-12 bg-yellow-main-3 flex justify-center items-center">
      <div class="w-full flex flex-col justify-center items-center text-red-main-1">
        <h2 class="text-2xl lg:text-5xl font-bold text-center mb-12">Testimoni Mitra Kami</h2>

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
    </section>

    <!-- Brand Values Section -->
    <section class="py-12 pt-3 px-4 md:px-16 bg-yellow-main-3 relative flex justify-center">
      <div class="w-full h-full bg-petals3 absolute left-0 top-0 rotate-180 z-0"></div>
      <div class="w-150 h-full bg-sakuratree absolute right-0 top-0 z-0"></div>
      <div class="container flex flex-col gap-7 bg-petals3 z-2">
        <div class="mb-12 flex flex-col gap-4 ">
           <div class="flex items-center gap-5">
             <h3 class="text-2xl font-bold text-red-main-1 text-center mb-6">Brand Vision</h3>
             <img class="w-20" src="/image/kemitraan/mascot2.png" alt="">
          </div>
          <div class="bg-linear-to-r from-yellow-main-1 to-yellow-main-3 p-3 w-fit text-red-main-1 rounded-lg">
            <p class="white-outline-box p-5 rounded-lg">
              Menjadi jaringan restoran sushi premium terbesar di Indonesia yang memberikan <br>
              pengalaman kuliner Jepang berkualitas dengan harga terjangkau
            </p>
          </div>
        </div>
        <div class="mb-12 flex flex-col gap-4">
           <div class="flex items-center gap-5">
             <h3 class="text-2xl font-bold text-red-main-1 text-center mb-6">Brand Purpose</h3>
             <img class="w-20" src="/image/kemitraan/mascot3.png" alt="">
          </div>
          <div class="bg-linear-to-r from-yellow-main-1 to-yellow-main-3 p-3 w-fit text-red-main-1 rounded-lg">
            <p class="white-outline-box p-5 rounded-lg">
              Kami percaya bahwa makanan Jepang yang berkualitas tidak harus mahal dan bisa <br>
              dinikmati oleh semua kalangan masyarakat Indonesia dengan mempertahankan kualitas dan
              inovasi
            </p>
          </div>
        </div>
        <div class="mb-12 flex flex-col gap-4">
           <div class="flex items-center gap-5">
             <h3 class="text-2xl font-bold text-red-main-1 text-center mb-6">Brand Promise</h3>
             <img class="w-20" src="/image/kemitraan/mascot4.png" alt="">
          </div>
          <div class="bg-linear-to-r from-yellow-main-1 to-yellow-main-3 p-3 w-fit text-red-main-1 rounded-lg">
            <p class="white-outline-box p-5 rounded-lg">
              Kami berkomitmen untuk menyajikan hidangan sushi berkualitas tinggi dengan bahan-bahan <br>
              premium, pelayanan terbaik, dan pengalaman makan yang memuaskan
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ROI Section -->
    <section class="py-12 px-4 md:px-16 bg-yellow-main-3 flex justify-center items-center">
      <div class="container mx-auto bg-petals3">
        <h2 class="text-2xl lg:text-5xl font-bold text-center mb-8 text-red-main-1">ROI (Ilustrasi Hasil Modal)</h2>
        <div class="overflow-x-auto py-20">
         <img src="/image/kemitraan/roi.png" alt="">
        </div>
      </div>
    </section>

    <!-- How to Join Section -->
    <section class="py-12  md:px-16 bg-yellow-main-2 text-red-main-1  flex justify-center">

      <div class="container bg-petals2 z-1 flex justify-center items-center">
        <div class="flex items-center justify-center pt-20 ">
          <div class="flex gap-10 p-10 relative justify-center flex-col lg:flex-row">
            <div class="w-full h-full z-0 bg-platter absolute left-0 bottom-0 z-0 translate-y-15 -translate-x-25"></div>
            <div class="left z-1">
              <h3 class="flex flex-col text-5xl lg:text-6xl gap-4 font-bold">
                <p>Cara</p>
                <p>Bergabung</p>
                <img class="w-15" src="/image/kemitraan/heart.png" alt="">
              </h3>

            </div>
            <div class="right bg-white z-1 rounded-lg p-4 flex flex-col gap-8">
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
     <section class="py-12 px-4 w-full md:px-16 bg-yellow-main-3 text-red-main-1">
      <h2 class="text-2xl lg:text-5xl font-bold text-center mb-8">Saatnya wujudkan Impian Anda!</h2>
      <div class="flex w-full items-center justify-center pt-15 gap-20 lg:gap-0 flex-col lg:flex-row">
        <div class="flex flex-col items-center gap-10 flex-1 lg:gap-4">
          <div class="h-40">
            <img class="h-40" src="/image/kemitraan/money.png" alt="">
          </div>
          <p class="px-30 font-semibold text-xl lg:px-10 text-center">Peluang bisnis
            yang menguntungkan
            dan investasi berkelanjutan
            cocok untuk Anda yang ingin
            memiliki passive income</p>
        </div>

        <div class="flex flex-col items-center gap-10 flex-1 lg:gap-4">
          <div class="h-40">

            <img class=" h-40" src="/image/kemitraan/gate.png" alt="">
          </div>
          <p class="px-30 font-semibold text-xl lg:px-10 text-center">Menjalakan usaha
dengan brand
yang sudah dikenal luas</p>
        </div>

        <div class="flex flex-col items-center gap-10 flex-1 lg:gap-4">
          <div class="h-40">

            <img class="h-40 w-50" src="/image/kemitraan/mascot1.png" alt="">
          </div>
          <p class="px-30 font-semibold text-xl lg:px-10 text-center">Punya bisnis kuliner hits
tanpa harus memulai dari O
dan memanfaatkan tren
makanan Jepang yang terus
berkembang</p>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="pt-10 px-4 md:px-16 bg-yellow-main-2 relative flex justify-center">
      <div class="w-full h-full bg-petals3 absolute left-0 top-0 rotate-180 z-0"></div>
      <div class="w-150 h-150 bg-sakuratree absolute right-0 top-0 z-0"></div>
      <div class="container flex justify-center items-center md:items-end gap-10 md:flex-row flex-col">
        <img src="/image/kemitraan/place1.png" class="md:w-100 lg:w-150 order-last md:order-first" alt="">
        <div class="flex flex-col gap-5 text-red-main-1 z-2 lg:py-20">
          <img class="w-50 z-2" src="/image/icons/Logo.png" alt="" />
          <div class="wrapper flex flex-col">
            <p class="pl-5 font-bold">Nama</p>
            <div class="flex items-center bg-yellow-main-3 rounded-full px-3 py-2">
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
            <div class="flex items-center bg-yellow-main-3 rounded-full px-3 py-2">
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
            <div class="flex items-center bg-yellow-main-3 rounded-full px-3 py-2">
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
            <div class="flex items-center bg-yellow-main-3 rounded-full px-3 py-2">
                    <input
                      v-model="targetTempat"
                      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder="Alamat lengkap target lokasi"
                    />
          </div>
          </div>
          <div class="btn-wrapper pt-10">
            <button @click="sendMail"
            class=" z-2 btn w-80 bg-red-main-1 text-sm md:text-lg lg:text-2xl h-auto py-2 rounded-full text-left shadow-none"
            style="border: none"
          >
            KIRIM
          </button>
          </div>
        </div>
      </div>
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
