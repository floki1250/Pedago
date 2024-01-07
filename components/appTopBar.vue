<template>
  <div
    class="absolute top-0 z-50 flex items-center justify-between h-16 px-4 bg-transparent w-full"
  >
    <a class="flex items-center justify-center" href="#">logo</a>
    <nav class="md:flex items-center gap-4 text-gray-500">
      <a
        class="text-sm font-medium hover:underline hover:text-orange-500 pr-1"
        href="#"
        >Home</a
      ><a
        class="text-sm font-medium hover:underline hover:text-orange-500 pr-1"
        href="#"
        >About</a
      ><a
        class="text-sm font-medium hover:underline hover:text-orange-500 pr-1"
        href="#"
        >Services</a
      ><a
        class="text-sm font-medium hover:underline hover:text-orange-500"
        href="#"
        >Contact</a
      >
    </nav>
    <div class="flex items-center gap-4">
      <div class="relative">
        <UButton :ui="{ rounded: 'rounded-full' }">Start with Us</UButton>
      </div>
    </div>
  </div>
</template>
