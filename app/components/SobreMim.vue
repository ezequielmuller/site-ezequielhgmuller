<template>
  <div class="flex flex-col items-center mt-8 px-4 sm:px-6 md:px-10">
    <!-- sobre mim -->
    <div
      class="text-center  border border-gray-200 border-gray-400 dark:border-gray-700 border-2 rounded-3xl shadow-sm backdrop-blur-sm w-full max-w-3xl p-6">
      <h1 class="text-[22px] font-medium md:text-2xl mb-4">
        Sobre mim
      </h1>
      <p class="leading-relaxed">
        Olá! Sou <span class="font-bold text-secondary">Ezequiel Henrique Gazolla Muller</span>, tenho 19 anos e
        sou natural de Marcelino Ramos/RS.
        Atuo na área de Tecnologia da Informação e estou em constante evolução, sempre em busca de novos aprendizados e
        desafios.
        Tenho foco em <span class="font-bold">desenvolvimento web</span>, <span class="font-bold">engenharia de
          software</span>,
        <span class="font-bold">arquitetura de sistemas</span> e <span class="font-bold">integração entre
          front-end e back-end</span>.
        Estou sempre atualizado por meio de cursos, projetos próprios e estudos técnicos, buscando criar soluções
        inovadoras, eficientes e escaláveis.
      </p>
    </div>
    <!-- habilidades -->
    <div class="flex flex-wrap justify-center gap-4 mt-7 w-full max-w-4xl text-center items-center">
      <h1 class="basis-full text-[22px] font-medium md:text-2xl">
        Habilidades
      </h1>
      <div v-for="(hab, idx) in habilidades" :key="idx"
        class="group border-2 border-gray-200 dark:border-gray-700  rounded-xl p-3 w-[150px] sm:w-[170px]
        shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-start gap-3 hover:-translate-y-1.5">
        <NuxtImg :src="hab.src" :alt="hab.label"
          :class="['transition-transform duration-300 group-hover:scale-105', hab.class]" />
        <span class="font-medium text-sm sm:text-base">
          {{ hab.label }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const habilidades = [
  { label: 'Git', src: '/git.png', class: 'w-8' },
  { label: 'TailwindCSS', src: '/tailwindcss.png', class: 'w-8' },
  { label: 'JavaScript', src: '/javascript.png', class: 'w-8' },
  { label: 'TypeScript', src: '/typescript.png', class: 'w-8' },
  { label: 'Vue.js', src: '/vue.png', class: 'w-8' },
  { label: 'Nuxt.js', src: '/nuxt.png', class: 'w-8' },
  { label: 'MySQL', src: '/mysql.png', class: 'w-8' },
  { label: 'PostgreSQL', src: '/postgres.png', class: 'w-8' },
]
</script>
<style scoped>
.text-primary-600 {
  color: #3b82f6;
  /* Azul Tailwind */
}
</style>
