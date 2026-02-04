<template>
  <UCard variant="subtle" class="w-full rounded-2xl">
    <template #header>
      <div class="flex items-center justify-start gap-2">
        <NuxtImg
          :src="projeto.imagemPrincipal"
          :alt="projeto.titulo"
          :class="projeto.classImgPrincipal"
        />
        <UIcon name="proicons:layers" class="size-5" />
        <span class="font-medium text-[17px]">
          {{ projeto.titulo }}
        </span>
      </div>
    </template>
    <Placeholder>
      <p class="text-justify mb-4">
        {{ projeto.descricao }}
      </p>
      <div class="flex justify-evenly mb-4 gap-1">
        <UModal title="Imagens do Projeto" :close="{ class: 'cursor-pointer' }">
          <UButton
            color="neutral"
            variant="outline"
            target="_blank"
            icon="entypo:camera"
            aria-label="Imagens"
            label="Ver Imagens"
            class="hover:text-yellow-500 hover:border-yellow-500 cursor-pointer"
          />

          <template #body>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div
                v-for="(img, index) in projeto.imagens"
                :key="index"
                class="flex items-center justify-center rounded-xl"
              >
                <NuxtImg
                  :src="img"
                  :alt="projeto.titulo"
                  :class="projeto.classImg"
                  class="w-full max-h-[620px] object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </template>
        </UModal>

        <UButton
          color="neutral"
          variant="outline"
          :to="projeto.github"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          label="Ver no GitHub"
          class="hover:text-green-600 hover:border-green-600"
        />
      </div>

      <USeparator />

      <div class="flex justify-center gap-4 my-4">
        <NuxtImg
          v-for="tech in projeto.stack"
          :key="tech.nome"
          :src="tech.icon"
          :alt="tech.nome"
          class="w-8"
        />
      </div>
    </Placeholder>
  </UCard>
</template>

<script setup lang="ts">
import type { Projeto } from '~/types/Projeto.ts'

defineProps<{
  projeto: Projeto
}>()
</script>
