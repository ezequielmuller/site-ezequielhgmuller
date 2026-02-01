<template>
  <div class="max-w-5xl mx-auto px-4 p4-8">
    <div
      class="flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-2"
    >
      <div class="text-center md:text-left md:mr-25">
        <h1 class="text-2xl md:text-4xl font-semibold leading-tight">
          Ezequiel H. G. Muller
        </h1>
        <p class="mt-2 text-lg md:text-2xl text-gray-600">
          Desenvolvedor FullStack
        </p>
      </div>
      <NuxtImg
        src="/perfil.jpg"
        alt="Perfil"
        class="rounded-full border-4 border-double w-36 h-36 md:w-52 md:h-52 object-cover"
      />
    </div>

    <USeparator
      icon="sidekickicons:chevron-left-right-16-solid"
      class="mt-8 w-full"
      size="sm"
    />
    <section id="sobre">
      <SobreMim />
    </section>

    <USeparator
      icon="sidekickicons:chevron-left-right-16-solid"
      class="mt-8 w-full"
      size="sm"
    />

    <section id="carreira">
      <CarreiraPessoal />
    </section>

    <USeparator
      icon="sidekickicons:chevron-left-right-16-solid"
      class="mt-8 w-full"
      size="sm"
    />

    <section id="projetos">
      <ProjetosPessoal />
    </section>

    <USeparator
      icon="sidekickicons:chevron-left-right-16-solid"
      class="mt-8 w-full"
      size="sm"
    />

    <section id="contato">
      <ContatoPessoal />
    </section>
  </div>
</template>
<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app'

useSeoMeta({
  title: 'Site - Ezequiel H. G. Muller | FullStack Developer',
  description:
    'Desenvolvedor FullStack com foco em TypeScript/JavaScript, venha conhecer um pouco mais sobre mim, projetos e carreira',
})
</script>
