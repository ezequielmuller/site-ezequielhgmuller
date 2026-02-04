<template>
  <!-- formação academica -->
  <div class="flex justify-center items-center">
    <div
      class="flex flex-col md:flex-row md:items-start items-center justify-center gap-6 w-full max-w-4xl mt-4"
    >
      <div class="w-full md:w-1/2 max-w-md flex flex-col items-center">
        <div class="text-[22px] font-medium md:text-2xl mb-4">Formação</div>
        <div class="flex items-center">
          <UTimeline
            :default-value="2"
            :items="timelineFormacao"
            class="w-full break-words whitespace-normal"
            color="secondary"
          />
        </div>
      </div>
      <div class="w-full md:w-1/2 max-w-md flex flex-col items-center">
        <h1 class="text-[22px] font-medium md:text-2xl mb-4">Experiência</h1>
        <UCard variant="subtle" class="w-full rounded-2xl">
          <template #header>
            <div class="flex items-center gap-2">
              <UIcon name="clarity:briefcase-line" class="size-5" />
              <span class="font-medium text-[17px]"
                >Gazzi Sistemas - Desenvolvedor FullStack Jr</span
              >
            </div>
            <span class="font-normal">
              Fev de 2025 - O momento | {{ calcularPeriodo(1) }}<br />
              Remoto - Tempo Integral<br />
            </span>
          </template>
          <Placeholder>
            <div class="text-justify">
              - Trabalho na implementação e manutenção de funcionalidades,
              criação de interfaces intuitivas e consultas SQL além do
              desenvolvimento de APIs seguindo padrões arquiteturais
              existentes...<br />
              - Me tornei o principal desenvolvedor de um sistema de prefeituras
              com módulos de auditorias públicas, controle interno, fiscalização
              e almoxarifado.<br />
            </div>
            <div class="flex justify-center items-center mt-2 gap-4">
              <NuxtImg src="/stack/git.svg" alt="Logo do Git" class="w-8" />
              <NuxtImg
                src="/stack/javascript.svg"
                alt="Logo do JavaScript"
                class="w-8"
              />
              <NuxtImg src="/stack/vue.svg" alt="Logo do Vue" class="w-8" />
              <NuxtImg
                src="/stack/quasar.png"
                alt="Logo do Quasar"
                class="w-8"
              />
              <NuxtImg src="/stack/pinia.svg" alt="Logo do Pinia" class="w-8" />
              <NuxtImg src="/stack/java.svg" alt="Logo do Java" class="w-8" />
              <NuxtImg
                src="/stack/postgresql.svg"
                alt="Logo do PostgreSQL"
                class="w-8"
              />
            </div>
          </Placeholder>
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
    description:
      'Bacharel em Ciência da Computação pela Universidade Regional Integrada do Alto Uruguai e das Missões - Campus Erechim.',
    icon: 'f7:building-columns-fill',
  },
  {
    date: 'Mar, 2022 - Dez, 2024',
    title: 'Técnico em Informática Integrado ao Ensino Médio',
    description:
      'Formado em Técnico em Informática no Ensino Médio pelo Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul - Campus Erechim',
    icon: 'heroicons-outline:academic-cap',
  },
])

const calcularPeriodo = (mes: number): string => {
  const dataInicio = new Date(2025, mes)
  const dataAtual = new Date()

  let anos = dataAtual.getFullYear() - dataInicio.getFullYear()
  let meses = dataAtual.getMonth() - dataInicio.getMonth()

  if (meses < 0) {
    anos--
    meses += 12
  }

  let periodo = ''
  if (anos > 0) {
    periodo += `${anos} ano${anos > 1 ? 's' : ''}`
  }

  if (meses > 0) {
    if (anos > 0) periodo += ' e '
    periodo += `${meses} mês${meses > 1 ? 'es' : ''}`
  }

  return periodo || 'menos de um mês'
}
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
