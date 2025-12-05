<template>
  <div class="flex justify-center items-center">
    <div class="flex flex-wrap justify-center gap-4 mt-4 w-full max-w-4xl items-center">
      <h1 class="basis-full text-[22px] font-medium md:text-2xl text-center">
        Projetos
      </h1>
    </div>
  </div>
  <div class="justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <UCard variant="subtle" class="w-full">
      <template #header>
        <div class="flex items-center gap-2">
          <UIcon name="proicons:layers" class="size-5" />
          <span class="font-medium text-[17px]">E-commerce NegoMaq</span>
        </div>
        <div class="my-2">
          Sistema de vendas de artigos de churrascos e facas.<br />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg src="/projetos/negomaq.png" alt="Projeto NegoMaq" class="w-30 border-3 border-red-600 rounded-xl " />
        </div>
      </template>
      <template #footer>
        <UModal :transition="true" title="Desenvolvedor FullStack Jr" :close="{ class: 'cursor-pointer' }">
          <div class="flex justify-end">
            <UButton label="Ver detalhes" class="cursor-pointer hover:shadow-md transition-all duration-300  hover:scale-110 bg-red-600 hover:bg-red-400" />
          </div>
          <template #body>
            <div class="flex text-justify">
              - Desenvolvimento de Aplicações Web com Vue.js 3 usando Quasar Framework, Java, PostgreSQL, JSON para
              a comunicação da API no sistema, Design UI/UX, GIT para versionamento de código e metodologias ágeis para
              o desenvolvimento.<br />
              <br />
              - Desenvolvemos uma solução para o comércio focado no varejo trazendo mais facilidade e simplicidade
              para o logista desde a compra ate a entrega de mercadorias e gestão da loja.<br />
              <br />
              - Me tornei uns dos principais desenvolvedores de um sistema de auditorias públicas, controle interno e
              de fiscalização, todos eles focados para prefeituras municipais<br />
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

</template>
<script setup lang="ts">
</script>