<template>
  <!-- formação academica -->
  <div class="flex justify-center items-center">
    <div class="flex flex-col md:flex-row md:items-start items-center justify-center gap-6 w-full max-w-4xl mt-4">
      <div class="w-full md:w-1/2 max-w-md flex flex-col items-center">
        <div class="text-[22px] font-medium md:text-2xl mb-4">Formação</div>
        <UTimeline :default-value="2" :items="timelineFormacao" class="w-full break-words whitespace-normal"
          color="secondary" />
      </div>
      <div class="w-full md:w-1/2 max-w-md flex flex-col items-center">
        <h1 class="text-[22px] font-medium md:text-2xl mb-4">Experiência</h1>
        <UCard variant="subtle" class="w-full">
          <template #header>
            <div class="flex items-center gap-2">
            <UIcon name="clarity:briefcase-line" class="size-5" />
            <span class="font-medium text-[17px]">Gazzi Sistemas</span>
            </div>
            <div class="font-medium">
              Desenvolvedor FullStack Jr<br >
              <span class="font-normal">
                Fev de 2025 - O momento | 10 meses<br >
                Remoto - Tempo Integral<br >
                Cascavel, Paraná, Brasil
              </span>
            </div>
          </template>
          <template #footer>
            <UModal :transition="true" title="Desenvolvedor FullStack Jr" :close="{ class: 'cursor-pointer' }">
              <div class="flex justify-end">
                <UButton label="Ver detalhes" color="secondary" 
                  class="cursor-pointer hover:shadow-md transition-all duration-300  hover:scale-110" />
              </div>
              <template #body>
                <div class="flex text-justify">
                  - Atuando profissionalmente com Vue.js (Quasar Framework) no front-end e Java (JDBC, Servlets e DAO) com API REST e PostgreSQL no back-end. 
                  Trabalho na implementação e manutenção de funcionalidades, integração entre front-end e back-end, criação de consultas SQL e desenvolvimento 
                  de APIs seguindo padrões arquiteturais existentes..<br >
                  <br >
                  - Desenvolvemos uma solução para o comércio focado no varejo trazendo mais facilidade e simplicidade
                  para o logista desde a compra ate a entrega de mercadorias e gestão da loja.<br >
                  <br >
                  - Me tornei uns dos principais desenvolvedores de um sistema de auditorias públicas, controle interno e
                  de fiscalização, todos eles focados para prefeituras municipais<br >
                </div>
                <div class="flex justify-center items-center mt-2 gap-4">
                  <NuxtImg src="/stack/git.svg" alt="Logo do Git" class="w-10" />
                  <NuxtImg src="/stack/vue.svg" alt="Logo do Git" class="w-10" />
                  <NuxtImg src="/stack/quasar.png" alt="Logo do Git" class="w-10" />
                  <NuxtImg src="/stack/java.svg" alt="Logo do Git" class="w-10" />
                  <NuxtImg src="/stack/postgresql.svg" alt="Logo do Git" class="w-10" />
                </div>
              </template>
            </UModal>
          </template>
        </UCard>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'
import { ref } from 'vue'

const timelineFormacao = ref<TimelineItem[]>([
  {
    date: 'Fev, 2025 - O momento',
    title: 'Bacharelado em Ciência da Computação',
    description: 'Bacharel em Ciência da Computação pela Universidade Regional Integrada do Alto Uruguai e das Missões - Campus Erechim.',
    icon: 'f7:building-columns-fill',
  },
  {
    date: 'Mar, 2022 - Dez, 2024',
    title: 'Técnico em Informática Integrado ao Ensino Médio',
    description: 'Formado em Técnico em Informática no Ensino Médio pelo Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul - Campus Erechim',
    icon: 'heroicons-outline:academic-cap',
  }
])
</script>

<style scoped>
/* força quebra de texto dentro do componente da biblioteca (ajusta seletor se necessário) */
::v-deep .u-timeline,
::v-deep .u-timeline * {
  white-space: normal !important;
  overflow-wrap: anywhere !important;
  word-break: break-word !important;
}
</style>
