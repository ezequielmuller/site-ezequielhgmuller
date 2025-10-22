<template>
  <div class="flex flex-col items-center mt-4 px-4 sm:px-6 md:px-8">
    <div class="text-center border-2 rounded-3xl w-full max-w-3xl p-4">
      <h1 class="text-[22px] font-medium md:text-2xl mb-3">Sobre mim</h1>
      <p>
        Olá! Sou Ezequiel Henrique Gazolla Muller, tenho 19 anos e sou natural de Marcelino Ramos/RS. Atuo na área de
        Tecnologia da Informação e estou em constante evolução, sempre em busca de novos aprendizados e desafios. Tenho
        foco em desenvolvimento web, engenharia de software, arquitetura de sistemas e integração entre front-end e
        back-end. Procuro me manter atualizado por meio de cursos em diversas plataformas, projetos próprios e estudos
        técnicos. Estou sempre disposto a aprender novas tecnologias, colaborar com equipes e contribuir para soluções
        inovadoras, eficientes e escaláveis.
      </p>
    </div>
    <div class="flex flex-wrap justify-center sm:justify-evenly md:justify-evenly gap-4 mt-6 w-full max-w-4xl text-center items-center">
      <h1 class="basis-full text-[22px] font-medium md:text-2xl mb-2">Habilidades</h1>
      <div v-for="(hab, idx) in habilidades" :key="idx" class="border rounded-xl p-3 w-[120px] sm:w-[140px] itens-center justify-evenly flex">
         <NuxtImg :src="hab?.src" :alt="hab?.label" :class="hab?.class" />
         <span class="font-medium">{{ hab?.label }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const habilidades = [
  { label:'Git' , src: '/git.png', class: 'w-12', },
  { label:'TailwindCSS' , src: '/tailwindcss.png', class: 'w-12', },
  { label:'JavaScript' , src: '/javascript.png', class: 'w-12', },
  { label:'TypeScript' , src: '/typescript.png', class: 'w-12', },
  { label:'Vue.js' , src: '/vue.png', class: 'w-12', },
  { label:'Nuxt.js' , src: '/nuxt.png', class: 'w-12', },
  { label:'MySQL' , src: '/mysql.png', class: 'w-12', },
  { label:'PostgreSQL' , src: '/postgres.png', class: 'w-12', },
  ]
</script>
