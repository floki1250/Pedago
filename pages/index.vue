<template>
  <div class="absolute z-0">
    <div class="relative">
      <img src="../assets/pic1.jpg" alt="Your Image" class="w-screen h-screen object-cover">

      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-white to-black opacity-40"></div>

      <!-- Text Container -->
      <div class="absolute inset-0 flex items-end justify-left">
        <div class="w-9/12 text-white text-left p-8 ml-12 mb-6 pl-0">
          <h1 class="text-6xl leading-tight font-bold">Innovation Solutions <br>For a Digital World</h1>
          <br>
          <p class="text-sm leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris dolor,
            tincidunt sed velit non, pharetra eleifend purus. Morbi lacinia massa urna, vel viverra tellus placerat et. In
            massa erat, feugiat in fermentum vel, suscipit ut enim. Etiam mollis eleifend diam, sed facilisis leo varius
            sit amet. Pellentesque vel pellentesque orci. Fusce nec felis vitae magna varius mollis. Integer nisl dui,
            hendrerit eu ex id, volutpat interdum elit. Praesent a arcu sapien. Nam ullamcorper sollicitudin sodales. In
            cursus odio nec quam finibus, vel congue nisi rhoncus.</p>
        </div>
      </div>
    </div>
    <div class="p-12 bg-white">

      <h1 class="text-black text-3xl font-bold my-6">

        Get Started With Us
      </h1>
      <div class="flex">
        <div class="w-1/2 bg-zinc-100 m-4 ml-0 rounded-lg p-8 text-black">
          <h2 class="font-bold mono">Our Mission</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia similique distinctio numquam impedit ut ab a,
            nobis velit eos minima quas, nostrum aliquam mollitia maiores in, veritatis consequuntur laborum autem?</p>
        </div>
        <div class="w-1/2 bg-orange-400 m-4 rounded-lg p-8 text-white">
          <h2 class="font-bold">Our Vision</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia similique distinctio numquam impedit ut ab a,
            nobis velit eos minima quas, nostrum aliquam mollitia maiores in, veritatis consequuntur laborum autem?</p>
        </div>
      </div>
    </div>
    <footer class="bg-orange-400">
      <div class="flex">
        <div class="p-12 w-1/2">
          <h1 class="text-white text-2xl font-bold">Have An Improvement <br> For your Business ?</h1>
          <UInput placeholder="Email" class="my-4" type="email" :ui="{ rounded: 'rounded-2xl' }">
            <template #trailing>
              <UButton :ui="{ rounded: 'rounded-full' }" class="w-12 flex justify-center">
                <UIcon name="i-heroicons-arrow-right-16-solid" />
              </UButton>
            </template>
          </UInput>
        </div>
        <div class="p-8 w-1/2 text-white">
          <p class="font-mono font-bold">Contact</p>
          <p>Sousse : </p>
          <p>Email : info@pedago-consulting.com</p>
        </div>
      </div>

      <hr class="border-gray-200 ml-8 mr-8">
      <div class="flex justify-between pl-8 font-mono font-bold py-4 text-white">
        <p class="">© 2024 Pedago Consulting. All rights reserved.</p>
        <div class="flex gap-4 pr-8">
          <NuxtLink to="https://www.linkedin.com/company/pedago-consulting" target="_blank">
            <UIcon name="i-fa6-brands-linkedin-in" />
          </NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>
