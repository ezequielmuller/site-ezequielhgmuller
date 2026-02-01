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
        <div
          class="border border-accented rounded-2xl p-5 w-full md:w-[320px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div class="font-medium text-lg text-center">Onde me encontrar</div>

          <USeparator class="my-3 w-full" size="sm" />

          <div class="flex flex-col gap-5 mt-2">
            <a
              href="https://instagram.com/ezequielmuller__"
              target="_blank"
              class="flex items-center gap-3 transition-all duration-200 hover:text-pink-500 hover:translate-x-1"
            >
              <UIcon name="entypo-social:instagram" class="size-6" />
              <span>@ezequielmuller__</span>
            </a>

            <div
              class="flex items-center gap-3 cursor-pointer transition-all duration-200 hover:text-red-500 hover:translate-x-1"
              @click="copiarEmail"
            >
              <UIcon name="entypo-social:google" class="size-6" />
              <span>zikimuller017@gmail.com</span>
            </div>

            <a
              href="https://www.linkedin.com/in/ezequielhgmuller"
              target="_blank"
              class="flex items-center gap-3 transition-all duration-200 hover:text-blue-600 hover:translate-x-1"
            >
              <UIcon name="entypo-social:linkedin" class="size-6" />
              <span>ezequielhgmuller</span>
            </a>
          </div>
        </div>

        <UCard
          variant="subtle"
          class="w-full md:w-[380px] rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <template #header>
            <div class="font-medium text-lg flex items-center gap-3">
              <UIcon name="ix:send-top-right" class="size-5" />
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
                class="cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 bg-blue-600 hover:bg-secondary text-white"
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

  const copiarEmail = () => {
    navigator.clipboard.writeText('zikimuller017@gmail.com')
  }
</script>
