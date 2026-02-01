<template>
  <div class="flex justify-center mt-4 mb-4">
    <h1 class="text-[22px] md:text-2xl font-medium text-center">Projetos</h1>
  </div>

  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center"
  >
    <UiCardProjeto
      v-for="projeto in projetos"
      :key="projeto.id"
      :projeto="projeto"
    />
  </div>
</template>

<script setup lang="ts">
import projetosJson from '~/data/projetos.json'
import type { Projeto } from '~/types/Projeto.ts'

const projetos: Projeto[] = projetosJson
</script>
