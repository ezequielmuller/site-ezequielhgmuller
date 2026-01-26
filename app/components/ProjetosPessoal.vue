<template>
  <div
    class="flex flex-wrap justify-center gap-4 mt-4 w-full max-w-4xl items-center mb-4"
  >
    <h1 class="basis-full text-[22px] font-medium md:text-2xl text-center">
      Projetos
    </h1>
  </div>

  <!-- Cards projetos -->
  <div
    class="justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
  >
    <UCard variant="subtle" class="w-full">
      <template #header>
        <div class="flex items-center justify-center gap-2">
          <UIcon name="proicons:layers" class="size-5" />
          <span class="font-medium text-[17px]">E-commerce NegoMaq</span>
        </div>
        <div class="my-2 text-center">
          Sistema de vendas de artigos de churrascos e facas.<br />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg
            src="/projetos/negomaq.png"
            alt="Projeto NegoMaq"
            class="w-30 border-3 border-red-600 rounded-xl"
          />
        </div>
      </template>
      <template #footer>
        <UModal
          :transition="true"
          title="Desenvolvedor FullStack Jr"
          :close="{ class: 'cursor-pointer' }"
        >
          <div class="flex justify-end">
            <UButton
              label="Ver detalhes"
              class="cursor-pointer hover:shadow-md transition-all duration-300 hover:scale-110 bg-red-600 hover:bg-red-400 text-white"
            />
          </div>
          <template #body>
            <div class="flex text-justify">
              A plataforma foi criada para a venda de facas, estojos, aventais
              de couro e artigos para churrasco, e atualmente está 100%
              desenvolvida, integrada e pronta para entrada em operação:.<br />
              <br />
            </div>
            <div class="flex justify-center items-center mt-2 gap-4">
              <NuxtImg src="/stack/git.svg" alt="Logo do Git" class="w-10" />
              <NuxtImg
                src="/stack/typescript.svg"
                alt="Logo do TypeScript"
                class="w-10"
              />
              <NuxtImg src="/stack/vue.svg" alt="Logo do Vue" class="w-10" />
              <NuxtImg
                src="/stack/quasar.png"
                alt="Logo do Quasar"
                class="w-10"
              />
            </div>
          </template>
        </UModal>
      </template>
    </UCard>
  </div>
</template>
<script setup lang="ts"></script>
