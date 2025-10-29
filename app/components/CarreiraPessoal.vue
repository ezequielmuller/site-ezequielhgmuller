<template>
  <!-- formação academica -->
  <div class="flex justify-center mt-5">
    <div class="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-4xl">
      <div class="w-full md:w-1/2 max-w-md text-center">
        <h1 class="text-[22px] font-medium md:text-2xl mb-4">Formação</h1>
        <UTimeline :default-value="2" :items="timelineFormacao" class="w-full break-words whitespace-normal"
          color="secondary" />
      </div>
      <div class="w-full md:w-1/2 max-w-md text-center">
        <h1 class="text-[22px] font-medium md:text-2xl mb-4">Experiência</h1>
        <UCard variant="subtle" class="text-left">
          <template #header>
            Desenvolvedor FullStack Jr
          </template>
          Desenvolvimento de Aplicações Web
          <template #footer>
           <UButton icon="oui:list" color="neutral" variant="outline" :ui="{leadingIcon: 'text-primary'}" 
           class="text-rigth">Ver detalhes</UButton>
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
    icon: 'f7:building-columns-fill',
  }
])
const timelineExperiencia = ref<TimelineItem[]>([
  {
    date: 'Fev, 2025 - O momento',
    title: '',
    description: 'Desenvolvimento de Aplicações Web com VueJS 3 usando Quasar Framework, Java, PostgreSQL, IBExpert com Firebird 3.0, JSON para a comunicação da API no sistema, Design UI/UX, GIT para versionamento de código e metodologias ágeis para o desenvolvimento.',
    icon: 'f7:building-columns-fill',
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
