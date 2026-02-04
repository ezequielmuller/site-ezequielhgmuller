<template>
  <div class="flex justify-center mt-4 mb-4">
    <h1 class="text-[22px] md:text-2xl font-medium text-center">
      Formas de Contato
    </h1>
  </div>

  <div class="flex justify-center px-4 md:px-0">
    <div
      class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
    >
      <UCard variant="subtle" class="flex flex-col rounded-2xl">
        <template #header>
          <div class="font-medium text-lg">Redes sociais</div>
        </template>

        <div class="flex flex-col gap-6">
          <!-- github-->
          <a
            href="https://www.linkedin.com/in/ezequielhgmuller"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-4 transition-all duration-300 hover:translate-x-2 cursor-pointer group"
          >
            <UIcon
              name="i-simple-icons-github"
              class="size-6 text-green-600 group-hover:scale-110 transition-transform"
            />
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-500">GitHub</p>
              <p
                class="font-semibold text-gray-900 dark:text-white group-hover:text-green-600 transition-colors"
              >
                ezequielmuller
              </p>
            </div>
            <UIcon
              name="i-lucide-arrow-right"
              class="size-5 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </a>

          <!-- linkedIn -->
          <a
            href="https://www.linkedin.com/in/ezequielhgmuller"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-4 transition-all duration-300 hover:translate-x-2 cursor-pointer group"
          >
            <UIcon
              name="entypo-social:linkedin"
              class="size-6 text-blue-600 group-hover:scale-110 transition-transform"
            />
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-500">LinkedIn</p>
              <p
                class="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors"
              >
                ezequielhgmuller
              </p>
            </div>
            <UIcon
              name="i-lucide-arrow-right"
              class="size-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </a>

          <!-- instagram -->
          <a
            href="https://instagram.com/ezequielmuller__"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-4 transition-all duration-300 hover:translate-x-2 cursor-pointer group"
          >
            <UIcon
              name="entypo-social:instagram"
              class="size-6 text-pink-500 group-hover:scale-110 transition-transform"
            />
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-500">Instagram</p>
              <p
                class="font-semibold text-gray-900 dark:text-white group-hover:text-pink-500 transition-colors"
              >
                @ezequielmuller__
              </p>
            </div>
            <UIcon
              name="i-lucide-arrow-right"
              class="size-5 text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </a>

          <!-- email -->
          <div
            @click="copiarEmail"
            class="flex items-center gap-4 transition-all duration-300 hover:translate-x-2 cursor-pointer group"
          >
            <UIcon
              name="mdi:gmail"
              class="size-6 text-red-500 group-hover:scale-110 transition-transform"
            />
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-500">Email</p>
              <p
                class="font-semibold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors"
              >
                zikimuller017@gmail.com
              </p>
            </div>
            <div class="flex items-center gap-2">
              <UIcon
                v-if="emailCopiado"
                name="i-lucide-check"
                class="size-5 text-green-500 animate-pulse"
              />
              <UIcon
                v-else
                name="i-lucide-copy"
                class="size-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </UCard>

      <UCard variant="subtle" class="flex flex-col rounded-2xl">
        <template #header>
          <div class="font-medium text-lg flex items-center gap-3">
            <UIcon name="ix:send-top-right" class="size-5" />
            Me envie um e-mail!
          </div>
        </template>

        <form @submit.prevent="enviarFormulario" class="flex flex-col gap-4">
          <UFormField label="Seu e-mail" name="email">
            <UInput
              v-model="emailContato.email"
              icon="i-lucide-at-sign"
              placeholder="seuemail@gmail.com"
              type="email"
              size="lg"
              class="w-full"
              color="secondary"
              :error="!!erros.email"
              @blur="validarEmail"
            />
            <span v-if="erros.email" class="text-red-500 text-sm mt-1">
              {{ erros.email }}
            </span>
          </UFormField>

          <UFormField label="Assunto" name="assunto">
            <UInput
              v-model="emailContato.assunto"
              icon="tabler:filter-2-share"
              placeholder="Título do e-mail"
              size="lg"
              class="w-full"
              color="secondary"
              :error="!!erros.assunto"
              @blur="validarAssunto"
            />
            <span v-if="erros.assunto" class="text-red-500 text-sm mt-1">
              {{ erros.assunto }}
            </span>
          </UFormField>

          <UFormField label="Descrição" name="descricao">
            <UTextarea
              v-model="emailContato.descricao"
              icon="tabler:align-justified"
              placeholder="Texto do e-mail..."
              class="w-full"
              color="secondary"
              :rows="5"
              :error="!!erros.descricao"
              @blur="validarDescricao"
            />
            <span v-if="erros.descricao" class="text-red-500 text-sm mt-1">
              {{ erros.descricao }}
            </span>
          </UFormField>

          <div class="mt-auto flex justify-end gap-2">
            <UButton
              v-if="formularioEnviado"
              color="primary"
              icon="i-lucide-check"
              size="md"
              disabled
            >
              Enviado!
            </UButton>
            <UButton
              v-else
              type="submit"
              icon="ix:send-right"
              size="md"
              class="cursor-pointer transition-all duration-300 hover:-translate-y-1 bg-blue-600 hover:bg-blue-700 text-white"
              :loading="enviando"
              :disabled="enviando"
            >
              {{ enviando ? 'Enviando...' : 'Enviar' }}
            </UButton>
          </div>
        </form>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { FormEmail } from '~/types/FormEmail.ts'

const toast = useToast()

const emailContato = ref<FormEmail>({
  email: '',
  assunto: '',
  descricao: '',
})

const erros = ref<FormEmail>({
  email: '',
  assunto: '',
  descricao: '',
})

const emailCopiado = ref(false)
const enviando = ref(false)
const formularioEnviado = ref(false)

// Validações ---
const validarEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailContato.value.email) {
    erros.value.email = 'E-mail é obrigatório'
  } else if (!emailRegex.test(emailContato.value.email)) {
    erros.value.email = 'E-mail inválido'
  } else {
    erros.value.email = ''
  }
}

const validarAssunto = () => {
  if (!emailContato.value.assunto) {
    erros.value.assunto = 'Assunto é obrigatório'
  } else if (emailContato.value.assunto.length < 3) {
    erros.value.assunto = 'Assunto deve ter pelo menos 3 caracteres'
  } else {
    erros.value.assunto = ''
  }
}

const validarDescricao = () => {
  if (!emailContato.value.descricao) {
    erros.value.descricao = 'Descrição é obrigatória'
  } else if (emailContato.value.descricao.length < 5) {
    erros.value.descricao = 'Descrição deve ter pelo menos 5 caracteres'
  } else {
    erros.value.descricao = ''
  }
}

// Funções email ----
const copiarEmail = async () => {
  try {
    await navigator.clipboard.writeText('zikimuller017@gmail.com')
    emailCopiado.value = true
  } catch (err) {
    console.error('Erro ao copiar email:', err)
  }
}

const enviarFormulario = async () => {
  validarEmail()
  validarAssunto()
  validarDescricao()

  if (erros.value.email || erros.value.assunto || erros.value.descricao) {
    toast.add({
      color: 'warning',
      title: 'Por favor, corrija os erros no formulário',
      duration: 4000,
    })
    return
  }
  enviando.value = true
  try {
    const response = await fetch('https://formspree.io/f/xqelgkgk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailContato.value.email,
        assunto: emailContato.value.assunto,
        descricao: emailContato.value.descricao,
      }),
    })

    if (response.ok) {
      toast.add({
        color: 'success',
        title: 'E-mail enviado com sucesso!',
        description: 'Obrigado por entrar em contato.',
        duration: 4000,
      })

      emailContato.value = {
        email: '',
        assunto: '',
        descricao: '',
      }
      formularioEnviado.value = true

      setTimeout(() => {
        formularioEnviado.value = false
      }, 3000)
    } else {
      throw new Error('Erro ao enviar formulario: ')
    }
  } catch (error) {
    toast.add({
      color: 'error',
      title: 'Erro ao enviar formulário, tente novamente!',
      duration: 4000,
    })
  } finally {
    enviando.value = false
  }
}
</script>
