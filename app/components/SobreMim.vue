<template>
  <div class="flex flex-col items-center mt-8 px-4 sm:px-6 md:px-10">
    <!-- sobre mim -->
    <div
      class="text-center border-gray-400 dark:border-gray-700 border-2 rounded-2xl shadow-sm backdrop-blur-sm w-full max-w-3xl p-6"
    >
      <h1 class="text-[22px] font-medium md:text-2xl mb-4">Sobre mim</h1>
      <p class="leading-relaxed">
        Olá! Sou
        <span class="font-bold text-secondary"
          >Ezequiel Henrique Gazolla Muller</span
        >. Tenho foco em <span class="font-bold">desenvolvimento web</span>,
        <span class="font-bold">engenharia de software</span>,
        <span class="font-bold">arquitetura de sistemas</span> e
        <span class="font-bold">integração entre front-end e back-end</span>.
        Atualmente estou aprofundando meus conhecimentos em TypeScript e NestJS,
        com foco em backend moderno, boas práticas de arquitetura, APIs REST e
        desenvolvimento de soluções escaláveis. Sou estudante de Ciência da
        Computação e estou sempre em busca de evolução técnica por meio de
        cursos, projetos próprios e estudo contínuo. Tenho interesse em
        colaborar com equipes, aprender novas tecnologias e contribuir para o
        desenvolvimento de produtos eficientes e bem estruturados.
      </p>
    </div>
    <!-- habilidades -->
    <div
      class="flex flex-wrap justify-center gap-4 mt-7 w-full max-w-4xl text-center items-center"
    >
      <h1 class="basis-full text-[22px] font-medium md:text-2xl">
        Habilidades
      </h1>
      <UMarquee reverse>
        <NuxtImg
          v-for="(hab, idx) in habilidades"
          :key="idx"
          :src="hab.src"
          :alt="hab.label"
          class="w-10"
        />
      </UMarquee>
    </div>
  </div>
</template>
<script setup lang="ts">
  const habilidades = [
    { label: 'Git', src: '/stack/git.svg' },
    { label: 'TailwindCSS', src: '/stack/tailwindcss.svg' },
    { label: 'JavaScript', src: '/stack/javascript.svg' },
    { label: 'TypeScript', src: '/stack/typescript.svg' },
    { label: 'Nest.js', src: '/stack/nest.svg' },
    { label: 'PostgreSQL', src: '/stack/postgresql.svg' },
    { label: 'MySQL', src: '/stack/mysql.png' },
    { label: 'Quasar Framework', src: '/stack/quasar.png' },
    { label: 'Vue.js', src: '/stack/vue.svg' },
  ]
</script>
<style scoped>
  .text-primary-600 {
    color: #3b82f6;
    /* Azul Tailwind */
  }
</style>
