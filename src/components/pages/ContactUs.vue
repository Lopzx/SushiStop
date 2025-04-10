<script setup lang="ts">
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import { ref, useTemplateRef } from 'vue'

const tabs = ref([
  {
    title: 'Jakarta',
    content: [
      {
        namaCabang: 'Greenville',
        lokasi:
          'Ruko SNS Sneakers, Jl. Ratu Kemuning Blok BL No.8 RT. 8/RW. 14, Duri Kepa, Kecamatan Kebon Jeruk, Kota Jakarta Barat, DKI Jakarta 11510',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Cinere',
        lokasi:
          'Jl. Karang Tengah I No.9A 1, RT.1/RW.8, Lb. Bulus, Kec. Cilandak, Kota, Jakarta Selatan, DKI Jakarta 12440',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Cipulir',
        lokasi:
          '1, RT.1/RW.3, Ulujami,, Kec. Pesanggrahan, Kota Jakarta Selatan, Jakarta Selatan, DKI Jakarta 12250',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Duren Sawit',
        lokasi:
          'Jalan Masjid Abidin No.20, RT.003/006/RW.6, Pondok Bambu, Kecamatan Duren Sawit, Kota Jakarta Timur, DKI Jakarta 13430',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Joglo',
        lokasi:
          'Gg. H.Alimin Jl. H. Muchtar Raya No.51, RT.9/RW.8, Joglo, Kec. Kembangan, , Kota Jakarta Barat, Daerah Khusus, jakarta, DKI Jakarta',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Kelapa Gading',
        lokasi:
          'Ruko Grand emerald blok GE-LG-38, Jl. Pegangsaan Dua No.3, RT.13/RW.3, Pegangsaan Dua, Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta, Jakarta Utara, DKI Jakarta 14250',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Mangga Besar',
        lokasi:
          'Jl. Kebon Jeruk XVI, RT. 10/ RW. 05, Maphar, Kecamatan Taman Sari, Kota Jakarta Barat, DKI Jakarta 11160',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Muara Karang',
        lokasi:
          'Pluit karang manis VI, blok O-6-B no.7, Jl. Pluit Karang Bar, RT.2/RW.8, Pluit, Kec. Penjaringan, Jkt Utara, Daerah Khusus Ibukota Jakarta 14450',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Palmerah',
        lokasi:
          'Jl. Rw Belong no 12 RT/RW 6/12, Palmerah, kec. Palmerah,, West Jakarta City,, DKI Jakarta 11480',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Pasar Minggu',
        lokasi:
          'Jl. Sawo Manila No. 2, Jati Padang, Pasar Minggu, Jakarta Selatan, DKI Jakarta 12540',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Pasar Minggu',
        lokasi:
          'Jl. Sawo Manila No. 2, Jati Padang, Pasar Minggu, Jakarta Selatan, DKI Jakarta 12540',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Rawamangun',
        lokasi:
          'Jalan Pemuda No. 2, Sebelah Bakamla, Rawamangun, Kecamatan Pulo Gadung, Kota Jakarta Timur, DKI Jakarta 13220',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Sunter',
        lokasi:
          'Food Market, Jl. Danau Sunter Utara no 1, RT/RW 01/10, Sunter Agung, Tj Priok, Jakarta Utara, DKI Jakarta 14350',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Taman Palem',
        lokasi:
          'Taman Palem Lestari Blok AA2 No. 9A, RT.8/RW.5, Tegal Alur, Kecamatan Kalideres, Kota Jakarta Barat, DKI Jakarta 11820',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Tebet',
        lokasi:
          'Jl. Tebet Timur Dalam Raya Dalam No.4, RT.1/RW.6, Tebet Timur, Kec. Tebet, Kota Jakarta Selatan, DKI Jakarta 12820 (patokan nya ART LIVING COVE)',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Tendean',
        lokasi:
          'Jl. Kapten Tendean No.41 , RT.2/RW.3, Kuningan Bar., Kec. Mampang Prpt, Jakarta Selatan, DKI Jakarta 12790',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Cempaka Putih',
        lokasi:
          'Jl. Rawa Selatan IV No.29, RT.3/RW.3, Kp. Rw., Kec. Johar Baru, Kota Jakarta Pusat, DKI Jakarta 10560',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Condet',
        lokasi:
          '7, Jalan Raya Tengah No.49, RW.3, Batu Ampar, Kecamatan Kramat Jati, Kota Jakarta Timur, DKI Jakarta 13520',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Fatmawati',
        lokasi:
          'Jl. Damai V nomor 4. RT10/RW04 Cipete utara, Kebayoran Baru, Jakarta Selatan 12150',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Kapuk',
        lokasi: 'Jl. Bangun Nusa Raya No.62, RT.12, West Jakarta City, DKI Jakarta 11730',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
    ],
  },
  {
    title: 'Depok',
    content: [
      {
        namaCabang: 'Bojongsari',
        lokasi:
          'Jl. Raya Bojongsari No.26, Kp.Pondok RT01/02, Kel. Curug, Kec. Bojongsari, Kota Depok, Jawa Barat 16516',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Cilodong',
        lokasi: 'Jl. Kemang Raya 6, Cilodong, Depok, Jawa Barat 16413',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Pancoran Mas',
        lokasi:
          'Jl. Raya Sawangan no. 1, Rangkapan Jaya, Pancoran Mas, (Sushi Stop samping Vapebos) sebrang DTC,, Pancoran Mas, Depok, Jawa Barat 16435',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Beji',
        lokasi: 'Jl. R. Sanim No.17, RW.11, Tanah Baru, Kecamatan Beji, Depok, Jawa Barat 16426',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Margonda',
        lokasi: 'Jl. Margonda No.535, Depok, Jawa Barat 16424',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
    ],
  },
  {
    title: 'Bogor',
    content: [
      {
        namaCabang: 'Cibinong',
        lokasi:
          'Jl. Kol. Edy Yoso Martadipura, Nanggewer, Kec. Cibinong, Kabupaten Bogor, Jawa Barat 16915',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
    ],
  },
  {
    title: 'Tangerang',
    content: [
      {
        namaCabang: 'Pasar Lama',
        lokasi:
          'Jl. Kisamaun No. 157 RT. 002/RW.005, Kel. Sukasari, Tangerang, Banten 15118Jl. Kisamaun No. 157 RT. 002/RW.005, Kel. Sukasari, Tangerang, Banten 15118',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
      {
        namaCabang: 'Pamulang',
        lokasi: 'Jalan Raya Puspitek No.99, Buaran, Kota Tangerang Selatan, Banten 15316',
        maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
      },
    ],
  },
])

const selectedLocation = ref({
  namaCabang: 'Greenville',
  lokasi:
    'Ruko SNS Sneakers, Jl. Ratu Kemuning Blok BL No.8 RT. 8/RW. 14, Duri Kepa, Kecamatan Kebon Jeruk, Kota Jakarta Barat, DKI Jakarta 11510',
  maps: 'https://www.google.com/maps/embed/v1/place?q=Sushi+Stop+Greenville&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
})

const Maps = useTemplateRef('Maps')

// const observer = new IntersectionObserver((entries) => {
//   console.log(entries)
// })
// onMounted(() => {
//   viewMap.value = document.querySelector('[aria-label="View larger map"]')
//   observer.observe(viewMap.value.href)
//   console.log(viewMap.value)
// })
</script>

<template>
  <section
    class="bg-yellow-main-1 lg:p-20 text-black-main-1 flex items-center justify-center w-full"
  >
    <div class="container bg-yellow-main-2 rounded p-5 lg:p-12 mx-auto">
      <div class="lg:flex lg:flex-row flex-col items-start gap-5 lg:h-150 lg:justify-between">
        <div
          class="border-red-main-1 border-solid border-2 rounded-xl w-full h-full p-4 lg:p-10 flex flex-col gap-5 justify-between"
        >
          <div>
            <h1 class="text-2xl text-red-main-1 capitalize font-bold lg:text-3xl">
              Contact Information
            </h1>
            <p class="text-xl">Ada pertanyaan? hubungi kami</p>
          </div>

          <div class="mt-6 flex flex-col flex-col lg:gap-8 gap-4">
            <p class="flex items-center gap-4">
              <svg
                class="w-7 no-shrink"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0002 8.999H19.0002C19.0002 3.869 15.1272 0 9.99023 0V2C14.0522 2 17.0002 4.943 17.0002 8.999Z"
                  fill="#A81A0C"
                />
                <path
                  d="M9.99979 6.00024C12.1028 6.00024 12.9998 6.89724 12.9998 9.00024H14.9998C14.9998 5.77524 13.2248 4.00024 9.99979 4.00024V6.00024ZM13.4218 11.4432C13.2296 11.2686 12.9771 11.1754 12.7176 11.1835C12.4581 11.1915 12.2118 11.3001 12.0308 11.4862L9.63779 13.9472C9.06179 13.8372 7.90379 13.4762 6.71179 12.2872C5.51979 11.0942 5.15879 9.93324 5.05179 9.36124L7.51079 6.96724C7.69721 6.78637 7.80593 6.54006 7.81396 6.28045C7.82198 6.02083 7.72868 5.76828 7.55379 5.57624L3.85879 1.51324C3.68384 1.3206 3.44067 1.20374 3.18095 1.1875C2.92122 1.17125 2.66539 1.2569 2.46779 1.42624L0.297794 3.28724C0.124905 3.46075 0.0217132 3.69169 0.00779368 3.93624C-0.00720632 4.18624 -0.293206 10.1082 4.29879 14.7022C8.30479 18.7072 13.3228 19.0002 14.7048 19.0002C14.9068 19.0002 15.0308 18.9942 15.0638 18.9922C15.3083 18.9786 15.5391 18.8749 15.7118 18.7012L17.5718 16.5302C17.7413 16.3328 17.8271 16.077 17.811 15.8173C17.795 15.5576 17.6783 15.3143 17.4858 15.1392L13.4218 11.4432Z"
                  fill="#A81A0C"
                />
              </svg>

              <span class="mx-2 text-[10px] lg:text-sm text-black-main-1"> 081210001396 </span>
            </p>

            <p class="flex items-center gap-4">
              <svg class="w-7" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0H0V16H20V0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="#A81A0C" />
              </svg>

              <span class="mx-2 text-[10px] lg:text-sm text-black-main-1"
                >marketing.sushistop@gmail.com
              </span>
            </p>

            <p class="flex items-center gap-4">
              <svg
                class="w-7 shrink-0"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00001 0.5C6.81276 0.50258 4.71584 1.3726 3.16923 2.91922C1.62261 4.46584 0.752589 6.56276 0.750009 8.75C0.747389 10.5374 1.33124 12.2763 2.41201 13.7C2.41201 13.7 2.63701 13.9962 2.67376 14.039L9.00001 21.5L15.3293 14.0353C15.3623 13.9955 15.588 13.7 15.588 13.7L15.5888 13.6978C16.669 12.2747 17.2526 10.5366 17.25 8.75C17.2474 6.56276 16.3774 4.46584 14.8308 2.91922C13.2842 1.3726 11.1873 0.50258 9.00001 0.5V0.5ZM9.00001 11.75C8.40666 11.75 7.82665 11.5741 7.3333 11.2444C6.83995 10.9148 6.45543 10.4462 6.22837 9.89805C6.00131 9.34987 5.9419 8.74667 6.05765 8.16473C6.17341 7.58279 6.45913 7.04824 6.87869 6.62868C7.29825 6.20912 7.83279 5.9234 8.41474 5.80764C8.99668 5.69189 9.59988 5.7513 10.1481 5.97836C10.6962 6.20542 11.1648 6.58994 11.4944 7.08329C11.8241 7.57664 12 8.15666 12 8.75C11.999 9.54534 11.6826 10.3078 11.1202 10.8702C10.5578 11.4326 9.79535 11.749 9.00001 11.75V11.75Z"
                  fill="#A81A0C"
                />
              </svg>

              <span class="text-black-main-1 text-[10px] lg:text-sm"
                >Jl. Ratu Kemuning Blok BL No.8 RT/RW 08/14, Duri Kepa, Kecamatan Kebon Jeruk, Kota
                Jakarta Barat, DKI Jakarta 11510</span
              >
            </p>
          </div>

          <div class="mt-6 md:mt-8">
            <div class="flex gap-4">
              <a
                class="mx-1.5 text-black-main-1 transition-colors duration-300 transform hover:text-blue-500"
                href="#"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15" cy="15" r="15" fill="#A81A0C" />
                  <path
                    d="M15.8102 21.75H9.7037C9.31494 21.75 9 21.4349 9 21.0463V9.7037C9 9.31499 9.31499 9 9.7037 9H21.0463C21.435 9 21.75 9.31499 21.75 9.7037V21.0463C21.75 21.4349 21.4349 21.75 21.0463 21.75H17.7973V16.8125H19.4546L19.7028 14.8883H17.7973V13.6598C17.7973 13.1027 17.952 12.723 18.7509 12.723L19.7698 12.7226V11.0015C19.5936 10.9781 18.9888 10.9257 18.2851 10.9257C16.816 10.9257 15.8102 11.8224 15.8102 13.4692V14.8883H14.1486V16.8125H15.8102V21.75Z"
                    fill="#FFEA94"
                  />
                </svg>
              </a>

              <a
                class="mx-1.5 text-black-main-1 transition-colors duration-300 transform hover:text-blue-500"
                href="#"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15" cy="15" r="15" fill="#A81A0C" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.408 7.045C12.2077 7.00818 12.4627 7 14.5 7C16.5373 7 16.7923 7.00886 17.5914 7.045C18.3905 7.08114 18.9359 7.20864 19.4132 7.39341C19.913 7.58227 20.3664 7.8775 20.7414 8.25932C21.1232 8.63364 21.4177 9.08636 21.6059 9.58682C21.7914 10.0641 21.9182 10.6095 21.955 11.4073C21.9918 12.2084 22 12.4634 22 14.5C22 16.5373 21.9911 16.7923 21.955 17.592C21.9189 18.3898 21.7914 18.9352 21.6059 19.4125C21.4177 19.913 21.1227 20.3665 20.7414 20.7414C20.3664 21.1232 19.913 21.4177 19.4132 21.6059C18.9359 21.7914 18.3905 21.9182 17.5927 21.955C16.7923 21.9918 16.5373 22 14.5 22C12.4627 22 12.2077 21.9911 11.408 21.955C10.6102 21.9189 10.0648 21.7914 9.5875 21.6059C9.08699 21.4177 8.63351 21.1227 8.25864 20.7414C7.87708 20.3668 7.58181 19.9136 7.39341 19.4132C7.20864 18.9359 7.08182 18.3905 7.045 17.5927C7.00818 16.7916 7 16.5366 7 14.5C7 12.4627 7.00886 12.2077 7.045 11.4086C7.08114 10.6095 7.20864 10.0641 7.39341 9.58682C7.58208 9.08642 7.87758 8.63317 8.25932 8.25864C8.63366 7.87716 9.08669 7.58189 9.58682 7.39341C10.0641 7.20864 10.6102 7.08182 11.408 7.045ZM17.5307 8.395C16.7398 8.35886 16.5025 8.35136 14.5 8.35136C12.4975 8.35136 12.2602 8.35886 11.4693 8.395C10.7377 8.42841 10.3409 8.55045 10.0764 8.65341C9.72659 8.78977 9.47636 8.95136 9.21386 9.21386C8.96503 9.45594 8.77353 9.75065 8.65341 10.0764C8.55045 10.3409 8.42841 10.7377 8.395 11.4693C8.35886 12.2602 8.35136 12.4975 8.35136 14.5C8.35136 16.5025 8.35886 16.7398 8.395 17.5307C8.42841 18.2623 8.55045 18.6591 8.65341 18.9236C8.77341 19.2489 8.965 19.5441 9.21386 19.7861C9.45591 20.035 9.75114 20.2266 10.0764 20.3466C10.3409 20.4495 10.7377 20.5716 11.4693 20.605C12.2602 20.6411 12.4968 20.6486 14.5 20.6486C16.5032 20.6486 16.7398 20.6411 17.5307 20.605C18.2623 20.5716 18.6591 20.4495 18.9236 20.3466C19.2734 20.2102 19.5236 20.0486 19.7861 19.7861C20.035 19.5441 20.2266 19.2489 20.3466 18.9236C20.4495 18.6591 20.5716 18.2623 20.605 17.5307C20.6411 16.7398 20.6486 16.5025 20.6486 14.5C20.6486 12.4975 20.6411 12.2602 20.605 11.4693C20.5716 10.7377 20.4495 10.3409 20.3466 10.0764C20.2102 9.72659 20.0486 9.47636 19.7861 9.21386C19.544 8.96505 19.2493 8.77355 18.9236 8.65341C18.6591 8.55045 18.2623 8.42841 17.5307 8.395ZM13.542 16.812C14.077 17.0347 14.6728 17.0648 15.2275 16.8971C15.7821 16.7294 16.2614 16.3743 16.5834 15.8924C16.9053 15.4106 17.05 14.832 16.9928 14.2553C16.9355 13.6786 16.6798 13.1398 16.2693 12.7307C16.0077 12.4692 15.6913 12.269 15.343 12.1444C14.9946 12.0199 14.623 11.9741 14.2549 12.0104C13.8867 12.0467 13.5312 12.1642 13.214 12.3544C12.8967 12.5446 12.6255 12.8028 12.42 13.1104C12.2145 13.4179 12.0797 13.7672 12.0254 14.1332C11.971 14.4991 11.9985 14.8725 12.1058 15.2265C12.2131 15.5805 12.3976 15.9063 12.6459 16.1805C12.8943 16.4547 13.2003 16.6704 13.542 16.812ZM11.7741 11.7741C12.1321 11.4161 12.557 11.1322 13.0247 10.9384C13.4925 10.7447 13.9938 10.645 14.5 10.645C15.0062 10.645 15.5075 10.7447 15.9753 10.9384C16.443 11.1322 16.8679 11.4161 17.2259 11.7741C17.5839 12.1321 17.8678 12.557 18.0616 13.0247C18.2553 13.4925 18.355 13.9938 18.355 14.5C18.355 15.0062 18.2553 15.5075 18.0616 15.9753C17.8678 16.443 17.5839 16.8679 17.2259 17.2259C16.503 17.9489 15.5224 18.355 14.5 18.355C13.4776 18.355 12.497 17.9489 11.7741 17.2259C11.0511 16.503 10.645 15.5224 10.645 14.5C10.645 13.4776 11.0511 12.497 11.7741 11.7741ZM19.21 11.2191C19.2987 11.1354 19.3697 11.0348 19.4188 10.9232C19.468 10.8115 19.4942 10.6912 19.496 10.5693C19.4977 10.4473 19.475 10.3263 19.4292 10.2133C19.3833 10.1003 19.3153 9.99762 19.2291 9.91139C19.1428 9.82516 19.0402 9.75711 18.9272 9.71126C18.8142 9.66542 18.6931 9.64271 18.5712 9.64449C18.4492 9.64627 18.3289 9.67249 18.2173 9.72161C18.1057 9.77073 18.005 9.84175 17.9214 9.93045C17.7586 10.103 17.6695 10.3321 17.673 10.5693C17.6764 10.8064 17.7722 11.0329 17.9399 11.2006C18.1076 11.3683 18.334 11.464 18.5712 11.4675C18.8083 11.4709 19.0375 11.3818 19.21 11.2191Z"
                    fill="#FFEA94"
                  />
                </svg>
              </a>

              <a
                class="mx-1.5 text-black-main-1 transition-colors duration-300 transform hover:text-blue-500"
                href="#"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15" cy="15" r="15" fill="#A81A0C" />
                  <path
                    d="M19.1071 9.50667C18.4969 8.81291 18.1606 7.92213 18.1607 7H15.4018V18.0222C15.3809 18.6188 15.1281 19.1841 14.6967 19.5987C14.2653 20.0133 13.6889 20.2448 13.0893 20.2444C11.8214 20.2444 10.7679 19.2133 10.7679 17.9333C10.7679 16.4044 12.25 15.2578 13.7768 15.7289V12.92C10.6964 12.5111 8 14.8933 8 17.9333C8 20.8933 10.4643 23 13.0804 23C15.8839 23 18.1607 20.7333 18.1607 17.9333V12.3422C19.2795 13.1421 20.6226 13.5712 22 13.5689V10.8222C22 10.8222 20.3214 10.9022 19.1071 9.50667Z"
                    fill="#FFEA94"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="mt-8 w-full lg:mx-6">
          <div class="w-full overflow-hidden rounded-lg">
            <form class="mt-6 flex flex-col gap-10 pt-5">
              <div class="flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-20">
                <div class="group w-full">
                  <p class="text-red-main-1 font-semibold">First Name</p>
                  <div class="flex items-center border-b border-red-main-1 py-2">
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder="Jane Doe"
                      aria-label="Full name"
                    />
                  </div>
                </div>
                <div class="group w-full">
                  <p class="text-red-main-1 font-semibold">Last Name</p>
                  <div class="flex items-center border-b border-red-main-1 py-2">
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder="Jane Doe"
                      aria-label="Full name"
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-20">
                <div class="group w-full">
                  <p class="text-red-main-1 font-semibold">Email</p>
                  <div class="flex items-center border-b border-red-main-1 py-2">
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder="Jane Doe"
                      aria-label="Full name"
                    />
                  </div>
                </div>
                <div class="group w-full">
                  <p class="text-red-main-1 font-semibold">No Hp</p>
                  <div class="flex items-center border-b border-red-main-1 py-2">
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder="Jane Doe"
                      aria-label="Full name"
                    />
                  </div>
                </div>
              </div>

              <div class="group w-full">
                <p class="text-red-main-1 font-semibold">Subject</p>
                <div class="flex items-center border-b border-red-main-1 py-2">
                  <input
                    class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Jane Doe"
                    aria-label="Full name"
                  />
                </div>
              </div>
              <div class="group w-full">
                <p class="text-red-main-1 font-semibold">Message</p>
                <div class="flex items-center w-full">
                  <textarea
                    class="leading-tight focus:outline-none border w-full border-red-main-1 p-5"
                    name=""
                    id=""
                  ></textarea>
                </div>
              </div>

              <button
                class="btn w-full w-full bg-red-main-1 text-sm md:text-lg lg:text-2xl h-auto py-2 rounded-full text-left shadow-none"
                style="border: none"
              >
                KIRIM
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="text-red-main-1 bg-yellow-main-2 p-2 lg:p-10">
    <div class="border border-1 border-red-main-1 p-5">
      <h2 class="text-4xl font-bold">LOCATION</h2>
    </div>
    <div class="flex flex-col lg:flex-row lg:justify-between gap-20 py-10">
      <div class="flex flex-col gap-10 w-full">
        <div class="w-full h-100">
          <div id="google-maps-canvas" style="height: 100%; width: 100%; max-width: 100%">
            <iframe
              id="maps"
              ref="Maps"
              style="height: 100%; width: 100%; border: 0"
              frameborder="0"
              :src="
                'https://www.google.com/maps/embed/v1/place?q=' +
                'sushi+stop+' +
                selectedLocation.namaCabang +
                selectedLocation.lokasi +
                '&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
              "
            ></iframe>
          </div>
        </div>
        <div class="border border-1 border-red-main-1 p-5 flex flex-col gap-4">
          <h2 class="text-4xl font-bold">{{ selectedLocation.namaCabang }}</h2>
          <p class="text-lg py-3 text-black-main-1">
            {{ selectedLocation.lokasi }}
          </p>
          <a
            :href="
              'https://www.google.co.id/maps/place/sushi+stop+' +
              selectedLocation.namaCabang +
              selectedLocation.lokasi
            "
          >
          </a>
        </div>
      </div>
      <div class="div w-full">
        <Accordion :activeIndex="0">
          <AccordionTab
            v-for="tab in tabs"
            :key="tab.title"
            :header="tab.title"
            pt:content:class="bg-transparent"
          >
            <div
              v-for="x in tab.content"
              :key="x.namaCabang"
              class="flex flex-col lg:flex-row gap-5 lg:gap-20 justify-between border border-1 border-red-main-1 p-5"
            >
              <div class="wrapper">
                <h3 class="text-4xl pb-4 font-bold text-red-main-1">{{ x.namaCabang }}</h3>
                <p class="text-black-main-1">{{ x.lokasi }}</p>
              </div>
              <a href="#maps" class="w-full lg:w-20">
                <button
                  @click="
                    () => {
                      selectedLocation = x
                    }
                  "
                  class="no-shrink px-5 h-20 btn bg-red-main-1 text-sm md:text-lg lg:text-2xl py-2 rounded-lg text-left w-full shadow-none"
                  style="border: none"
                >
                  <svg
                    width="40"
                    height="57"
                    viewBox="0 0 40 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.8568 11.8958C40.6937 17.9909 40.0477 25.1814 36.9299 31.0237C34.2896 35.7706 30.4978 39.7871 27.2677 44.1969C25.8633 46.1631 24.4589 48.2697 23.4196 50.5448C23.0545 51.3032 22.8017 52.0897 22.5208 52.8761C22.2399 53.6626 21.9871 54.449 21.7343 55.2355C21.4815 55.9658 21.1726 56.8365 20.2457 56.8365C19.1503 56.8365 18.8413 55.6006 18.6166 54.758C17.9425 52.7076 17.2684 50.7414 16.2291 48.8595C15.0494 46.6406 13.5608 44.5902 12.044 42.5959L37.8568 11.8958ZM12.1564 18.6931L2.88734 29.7036C4.6007 33.3269 7.15671 36.4166 9.60036 39.5063C10.1902 40.2085 10.78 40.9387 11.3418 41.6971L23.0545 27.8217L22.9421 27.8498C18.8413 29.2542 14.291 27.1757 12.6619 23.131C12.4372 22.6535 12.2687 22.0917 12.1564 21.53C11.9992 20.6003 11.9992 19.6509 12.1564 18.7212V18.6931ZM5.02202 8.01968L4.99394 8.04777C0.443691 13.8058 -0.342771 21.8109 2.38176 28.58L13.5888 15.2664L13.4484 15.1259L5.02202 8.01968ZM26.4812 1.67181L17.4369 12.3733L17.5492 12.3452C21.313 11.0532 25.5262 12.6823 27.4362 16.109C27.8575 16.8955 28.1946 17.7381 28.3069 18.5807C28.4754 19.6481 28.5316 20.4065 28.335 21.4457V21.4738L37.3231 10.8004C34.9711 6.53139 31.1173 3.28817 26.5093 1.6999L26.4812 1.67181ZM14.3191 14.3956L25.3015 1.33475L25.1892 1.30667C23.5601 0.885348 21.9029 0.660645 20.2457 0.660645C14.7124 0.660645 9.488 3.04812 5.7804 7.14896L5.72422 7.17705L14.3191 14.3956Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  </section>
</template>
<style scoped>
::v-deep(.p-accordion) {
  background: transparent;
}

::v-deep(.p-accordionpanel) {
  border-width: 0;
  background: transparent;
}

::v-deep(.p-accordionheader) {
  background: var(--color-red-main-1);
}

::v-deep(.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader) {
  background: var(--color-red-main-1);
  color: white;
}
::v-deep(.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover) {
  background: var(--color-red-main-1);
  color: white;
}

::v-deep(
  .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover
) {
  background: var(--color-red-main-1);
  color: white;
}
::v-deep(
  .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover
) {
  background: var(--color-red-main-1);
  color: white;
}

::v-deep(.p-accordioncontent-content) {
  padding: 0;
  background: transparent;
}
</style>
