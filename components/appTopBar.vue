<template>
  <div class="absolute top-0 z-50 flex items-center justify-between h-16 px-4 bg-transparent w-full text-black">
    <a class="flex items-center justify-center" href="#"><img src="../assets/logo.svg" alt=""
        class="m-1 p-2 rounded-full w-[200px] hover:bg-white" /></a>
    <nav class="md:flex items-center gap-4 ">
      <a class="text-sm font-medium hover:underline hover:text-orange-500 pr-1" href="#">Home</a><a
        class="text-sm font-medium hover:underline hover:text-orange-500 pr-1" href="#">About</a><a
        class="text-sm font-medium hover:underline hover:text-orange-500 pr-1" href="#">Services</a><a
        class="text-sm font-medium hover:underline hover:text-orange-500" href="#">Contact</a>
    </nav>
    <div class="flex items-center gap-4">
      <div class="relative">
        <UButton :ui="{ rounded: 'rounded-full' }" class="text-white" color="primary">Start with Us</UButton>
      </div>
    </div>
  </div>
</template>
