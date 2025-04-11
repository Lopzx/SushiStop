<script setup lang="ts">
import { ref } from 'vue'

const openNavbar = ref(false)
</script>

<template>
  <nav class="w-full bg-yellow-main-1">
    <div
      class="xl:gap-20 flex flex-wrap items-center justify-between px-10 xl:px-40 py-3 lg:py-6 w-full"
    >
      <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/image/icons/Logo.png" class="h-10 lg:h-16" alt="Flowbite Logo" />
      </a>
      <button
        @click="openNavbar = !openNavbar"
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex gap-4 items-center w-10 h-10 justify-end text-sm text-black-main-1 rounded-lg md:hidden"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto text-black-main-1" id="navbar-default">
        <ul
          class="gap-1 flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 font-medium"
        >
          <li class="px-4 py-2 rounded-sm">
            <RouterLink
              to="/"
              class="block rounded-sm hover:bg-yellow-main-2 md:border-0 md:p-0"
              active-class="active border bg-yellow-main-2"
              aria-current="page"
            >
              <p class="p-10 py-2 px-3">Home</p>
            </RouterLink>
          </li>
          <li class="px-4 py-2 rounded-sm">
            <RouterLink
              to="/menu"
              active-class="active border bg-yellow-main-2"
              class="block rounded-sm hover:bg-yellow-main-2 md:border-0 md:p-0"
            >
              <p class="p-10 py-2 px-3">Menu</p>
            </RouterLink>
          </li>
          <li class="px-4 py-2 rounded-sm" active-class="active border bg-yellow-main-2">
            <RouterLink
              to="/mitra"
              active-class="active border bg-yellow-main-2"
              class="block rounded-sm hover:bg-yellow-main-2 md:border-0 md:p-0"
              ><p class="p-10 py-2 px-3">Kemitraan</p></RouterLink
            >
          </li>
          <li class="px-4 py-2 rounded-sm">
            <RouterLink
              to="/contact"
              active-class="active border bg-yellow-main-2"
              class="block rounded-sm hover:bg-yellow-main-2 md:border-0 md:p-0"
              ><p class="p-10 py-2 px-3">Cari Kami</p></RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
    <div
      v-if="openNavbar"
      class="fixed animate__animated animate__fadeInRight inset-0 bg-yellow-main-1 z-40 flex items-center justify-center"
    >
      <div
        class="bg-yellow-main-1 w-full h-full flex flex-col items-center justify-center relative"
      >
        <button
          @click="openNavbar = false"
          class="absolute top-4 right-4 text-gray-500 hover:text-black-main-1 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul class="space-y-4 text-center text-lg font-medium">
          <li>
            <RouterLink
              to="/"
              @click="openNavbar = false"
              class="text-black-main-1 hover:text-white"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/about"
              @click="openNavbar = false"
              class="text-black-main-1 hover:text-white"
              >Menu</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/mitra"
              @click="openNavbar = false"
              class="text-black-main-1 hover:text-white"
              >Kemitraan</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/contact"
              @click="openNavbar = false"
              class="text-black-main-1 hover:text-white"
              >Cari Kami</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
