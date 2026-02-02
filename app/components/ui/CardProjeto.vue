<template>
  <UCard variant="subtle" class="w-full rounded-2xl">
    <template #header>
      <div class="flex items-center justify-center gap-2">
        <UIcon name="proicons:layers" class="size-5" />
        <span class="font-medium text-[17px]">
          {{ projeto.titulo }}
        </span>
      </div>

      <div class="my-2 text-center">
        {{ projeto.descricaoCurta }}
      </div>

      <div class="flex justify-center">
        <NuxtImg
          :src="projeto.imagemPrincipal"
          :alt="projeto.titulo"
          :class="projeto.classImgPrincipal"
        />
      </div>
    </template>

    <!-- Modal -->
    <template #footer>
      <UModal :title="projeto.titulo" :close="{ class: 'cursor-pointer' }">
        <div class="flex justify-end">
          <UButton
            label="Ver detalhes"
            icon="mono-icons:expand"
            :class="projeto.classBotao"
          />
        </div>

        <template #body>
          <p class="text-justify mb-4">
            {{ projeto.descricaoCompleta }}
          </p>

          <p class="mb-1">
            Github:
            <a
              :href="projeto.github"
              target="_blank"
              class="underline text-secondary-600 break-all"
            >
              {{ projeto.github }}
            </a>
          </p>

          <p class="mb-6">
            LinkedIn:
            <a
              :href="projeto.linkedin"
              target="_blank"
              class="underline text-secondary-600 break-all"
            >
              {{ projeto.linkedin }}
            </a>
          </p>

          <USeparator />

          <div class="flex justify-center gap-4 my-4">
            <NuxtImg
              v-for="tech in projeto.stack"
              :key="tech.nome"
              :src="tech.icon"
              :alt="tech.nome"
              class="w-10"
            />
          </div>

          <div class="grid grid-cols-2 gap-4 mb-8">
            <NuxtImg
              v-for="(img, index) in projeto.imagens"
              :key="index"
              :src="img"
              :alt="projeto.titulo"
              :class="projeto.classImg"
            />
          </div>
        </template>
      </UModal>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import type { Projeto } from '~/types/Projeto.ts'

defineProps<{
  projeto: Projeto
}>()
</script>
