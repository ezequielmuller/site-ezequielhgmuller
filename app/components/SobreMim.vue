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
        >. Sou Desenvolvedor Full Stack com foco em
        <span class="font-bold">JavaScript</span> e
        <span class="font-bold">TypeScript</span>, tenho atuação profissional em
        sistemas web, atualmente trabalho com Vue.js no front-end e Java no
        back-end em sistemas legados. No meu dia a dia, atuo na implementação e
        manutenção de funcionalidades, interfaces interativas, integração entre
        camadas, criação de consultas SQL, desenvolvimento de APIs REST e
        evolução de sistemas seguindo padrões arquiteturais já estabelecidos,
        sempre com foco em código limpo, manutenção e escalabilidade.
        <span class="font-bold"
          >Atualmente, estou aprofundando meus conhecimentos em TypeScript,
          NestJS e arquitetura de back-end.
        </span>
      </p>
    </div>
    <!-- habilidades -->
    <div class="mt-10 w-full max-w-5xl">
      <h1 class="text-center text-[22px] font-medium md:text-2xl mb-6">
        Tecnologias
      </h1>

      <div
        class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 items-center justify-center"
      >
        <div
          v-for="(hab, idx) in habilidades"
          :key="idx"
          class="group flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/40 dark:bg-gray-900/40 border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600"
        >
          <NuxtImg
            :src="hab.src"
            :alt="hab.label"
            class="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
          />

          <span
            class="text-xs font-medium text-gray-700/80 dark:text-gray-300/80 tracking-wide"
          >
            {{ hab.label }}
          </span>
        </div>
      </div>
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
