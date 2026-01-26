<template>
  <div class="flex justify-center items-center">
    <div
      class="flex flex-wrap justify-center gap-4 mt-4 w-full max-w-4xl items-center"
    >
      <h1 class="basis-full text-[22px] font-medium md:text-2xl text-center">
        Contato
      </h1>
      <div
        class="flex flex-col md:flex-row md:items-start items-center justify-center gap-6 w-full max-w-4xl mt-4"
      >
        <div>REDES SOCIAIS</div>
        <UCard variant="subtle" class="w-90">
          <template #header>
            <div class="font-medium text-lg flex items-center">
              <UIcon name="ix:send-top-right" class="size-5 mr-4" />
              Me envie um e-mail!
            </div>
          </template>

          <UFormField label="Seu e-mail" name="email">
            <UInput
              v-model="email"
              trailing-icon="i-lucide-at-sign"
              placeholder="seuemail@gmail.com"
              size="lg"
              class="w-full"
              color="secondary"
            />
          </UFormField>
          <UFormField label="Assunto" name="assunto" class="mt-4">
            <UInput
              v-model="assunto"
              trailing-icon="tabler:filter-2-share"
              placeholder="Título do e-mail"
              size="lg"
              class="w-full"
              color="secondary"
            />
          </UFormField>
          <UFormField label="Descrição" name="descricao" class="mt-4">
            <UTextarea
              v-model="descricao"
              trailing-icon="tabler:align-justified"
              placeholder="Texto do e-mail..."
              class="w-full"
              color="secondary"
              :rows="5"
            />
          </UFormField>

          <template #footer>
            <div class="flex justify-end items-center">
              <UButton
                trailing-icon="ix:send-right"
                size="md"
                color="secondary"
                class="cursor-pointer hover:shadow-md transition-all duration-300 hover:scale-110"
              >
                Enviar
              </UButton>
            </div>
          </template>
        </UCard>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'

  const email = ref('')
  const assunto = ref('')
  const descricao = ref('')
</script>
