<template>
  <div class="flex justify-center items-center">
    <div class="flex flex-wrap justify-center gap-4 mt-4 w-full max-w-4xl items-center">
      <h1 class="basis-full text-[22px] font-medium md:text-2xl text-center">
        Contato
      </h1>
      <UCard variant="subtle" class="w-90">
        <template #header>
          <div class="font-medium text-lg flex items-center">
            <UIcon name="ix:send-top-right" class="size-5 mr-4"  />
            Me envie um e-mail!
          </div>

          <Placeholder class="h-8" />
        </template>

        <UFormField label="Seu e-mail" name="email">
          <UInput v-model="email" trailing-icon="i-lucide-at-sign" placeholder="seuemail@gmail.com" size="lg"
            class="w-full" color="secondary" />
        </UFormField>
        <UFormField label="Assunto" name="assunto" class="mt-4">
          <UInput v-model="assunto" trailing-icon="tabler:filter-2-share" placeholder="Título do e-mail" size="lg"
            class="w-full" color="secondary" />
        </UFormField>
        <UFormField label="Descrição" name="descricao" class="mt-4">
          <UTextarea v-model="descricao" trailing-icon="tabler:align-justified" placeholder="Texto do e-mail..."
            class="w-full" color="secondary" />
        </UFormField>

        <template #footer>
          <Placeholder class="h-8" />
        </template>
      </UCard>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const email = ref('')
const assunto = ref('')
const descricao = ref('')
</script>