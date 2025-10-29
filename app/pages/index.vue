<template>
  <div class="max-w-5xl mx-auto px-4 py-8">
    <div class="flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-2">
      <div class="text-center md:text-left md:mr-25">
        <h1 class="text-2xl md:text-4xl font-semibold leading-tight">Ezequiel H. G. Muller</h1>
        <p class="mt-2 text-lg md:text-2xl text-gray-600">Desenvolvedor de Software</p>
      </div>
      <NuxtImg src="/perfil.png" alt="Perfil"
        class="rounded-full border-4 border-double w-36 h-36 md:w-52 md:h-52 object-cover" />
    </div>

    <USeparator icon="sidekickicons:chevron-left-right-16-solid" class="mt-8 w-full" size="sm" />
    <SobreMim />
    <USeparator icon="sidekickicons:chevron-left-right-16-solid" class="mt-8 w-full" size="sm" />
    <CarreiraPessoal />
    <USeparator icon="sidekickicons:chevron-left-right-16-solid" class="mt-8 w-full" size="sm" />
  </div>
</template>
<script setup lang="ts">
</script>