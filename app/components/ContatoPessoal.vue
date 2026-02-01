<template>
  <div class="flex justify-center mt-4 mb-4">
    <h1 class="text-[22px] md:text-2xl font-medium text-center">
      Formas de Contato
    </h1>
  </div>

  <div class="flex items-center justify-center">
    <div
      class="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-4xl"
    >
      <div class="border border-accented rounded-2xl p-5 w-full md:w-[320px]">
        <div class="font-medium text-lg text-center">Onde me encontrar</div>

        <USeparator class="my-3 w-full" size="sm" />

        <div class="flex flex-col gap-5 mt-2">
          <a
            href="https://instagram.com/ezequielmuller__"
            target="_blank"
            class="flex items-center gap-3 hover:text-pink-500 transition-all duration-200 hover:translate-x-1"
          >
            <UIcon name="entypo-social:instagram" class="size-6" />
            <span>@ezequielmuller__</span>
          </a>

          <div
            class="flex items-center gap-3 cursor-pointer hover:text-red-500 transition-all duration-200 hover:translate-x-1"
            @click="copiarEmail"
          >
            <UIcon name="entypo-social:google" class="size-6" />
            <span>zikimuller017@gmail.com</span>
          </div>

          <a
            href="https://www.linkedin.com/in/ezequielhgmuller"
            target="_blank"
            class="flex items-center gap-3 hover:text-blue-600 transition-all duration-200 hover:translate-x-1"
          >
            <UIcon name="entypo-social:linkedin" class="size-6" />
            <span>ezequielhgmuller</span>
          </a>
        </div>
      </div>

      <UCard variant="subtle" class="w-full md:w-[380px] rounded-2xl">
        <template #header>
          <div class="font-medium text-lg flex items-center gap-3">
            <UIcon name="ix:send-top-right" class="size-5" />
            Me envie um e-mail!
          </div>
        </template>

        <UFormField label="Seu e-mail" name="email">
          <UInput
            v-model="email"
            icon="i-lucide-at-sign"
            placeholder="seuemail@gmail.com"
            size="lg"
            class="w-full"
            color="secondary"
          />
        </UFormField>

        <UFormField label="Assunto" name="assunto" class="mt-4">
          <UInput
            v-model="assunto"
            icon="tabler:filter-2-share"
            placeholder="Título do e-mail"
            size="lg"
            class="w-full"
            color="secondary"
          />
        </UFormField>

        <UFormField label="Descrição" name="descricao" class="mt-4">
          <UTextarea
            v-model="descricao"
            icon="tabler:align-justified"
            placeholder="Texto do e-mail..."
            class="w-full"
            color="secondary"
            :rows="5"
          />
        </UFormField>

        <template #footer>
          <div class="flex justify-end items-center">
            <UButton
              icon="ix:send-right"
              size="md"
              class="cursor-pointer transition-all duration-300 hover:-translate-y-1 bg-blue-600 hover:bg-secondary text-white"
            >
              Enviar
            </UButton>
          </div>
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

const copiarEmail = () => {
  navigator.clipboard.writeText('zikimuller017@gmail.com')
}
</script>
