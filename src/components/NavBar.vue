

<template>
  <nav class="w-full bg-yellow-main-1">
    <div class="gap-20 flex flex-wrap items-center justify-center mx-auto py-2 w-full">
      <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/icons/LogoNavbar.png" class="h-16" alt="Flowbite Logo" />
      </a>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex gap-4 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto text-white" id="navbar-default">
           <ul class="gap-4  flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 font-bold">
              <li class="bg-yellow-main-2 px-4 py-2 rounded-sm">
              <RouterLink to="/" class="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 " aria-current="page">Home</RouterLink>
              </li>
              <li class="px-4 py-2 rounded-sm hover:bg-yellow-main-2">
              <RouterLink to="/about" class="block py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:p-0">About</RouterLink>
              </li>
              <li class="px-4 py-2 rounded-sm hover:bg-yellow-main-2">
              <RouterLink to="/mitra" class="block py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:p-0">Mitra</RouterLink>  
              </li>
              <li class="px-4 py-2 rounded-sm hover:bg-yellow-main-2">
              <RouterLink to="/pricing" class="block py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:p-0">Pricing</RouterLink>
              </li>
              <li class="px-4 py-2 rounded-sm hover:bg-yellow-main-2">
              <RouterLink to="/contact" class="block py-2 px-3 rounded-sm md:hover:bg-transparent md:border-0 md:p-0">Contact</RouterLink>
              </li>
            </ul>  </div>
        </div>
  </nav>
</template>

<style scoped>

</style>
