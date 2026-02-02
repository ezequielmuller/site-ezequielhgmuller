<template>
  <UHeader
    mode="slideover"
    class="border-b border-gray-200 dark:border-gray-800"
  >
    <template #title>
      <UColorModeImage
        light="/logo-s_fundo.png"
        dark="/logo-branco-s_fundo.png"
        alt="Logo Ezequiel Muller"
        class="h-20"
      />
    </template>
    <UNavigationMenu :items="items" />
    <template #right>
      <UTooltip text="GitHub">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/ezequielmuller"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          class="hover:text-green-600"
        />
      </UTooltip>
      <UTooltip text="LinkedIn">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://www.linkedin.com/in/ezequielhgmuller/"
          target="_blank"
          icon="entypo-social:linkedin"
          aria-label="LinkedIn"
          class="hover:text-blue-600"
        />
      </UTooltip>
      <UTooltip text="Instagram">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://www.instagram.com/ezequielmuller__/"
          target="_blank"
          icon="entypo-social:instagram"
          aria-label="Instagram"
          class="hover:text-pink-500"
        />
      </UTooltip>
      <USeparator orientation="vertical" class="h-8" />
      <UColorModeButton class="cursor-pointer" />
    </template>
    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5 p-4 space-y-2"
      />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { NavigationMenuItem } from '@nuxt/ui'

// Rotas do menu
const route = useRoute()
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Sobre Mim',
    to: '#sobre',
    icon: 'gala:portrait2',
    active: route.path.startsWith('/docs/getting-started'),
    class: 'mb-1 cursor-pointer',
  },
  {
    label: 'Carreira',
    to: '#carreira',
    icon: 'clarity:briefcase-line',
    active: route.path.startsWith('/docs/components'),
    class: 'mb-1 cursor-pointer',
  },
  {
    label: 'Projetos',
    icon: 'codicon:file-submodule',
    to: '#projetos',
    class: 'mb-1 cursor-pointer',
  },
  {
    label: 'Contato',
    icon: 'fluent-emoji-high-contrast:envelope',
    to: '#contato',
    class: 'mb-1 cursor-pointer',
  },
])
</script>
