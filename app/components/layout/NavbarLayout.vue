<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { ref, computed, watch, onMounted } from 'vue'
  import type { NavigationMenuItem } from '@nuxt/ui'
  import { useColorMode } from '@nuxt/ui/runtime/inertia/stubs.js'

  const colorMode = useColorMode()
  const logoSrc = ref('')

  // Atualiza logo quando tema muda ---
  const updateLogo = () => {
    logoSrc.value =
      colorMode.value === 'dark'
        ? '/logo-branco-s_fundo.png'
        : '/logo-s_fundo.png'
  }
  watch(() => colorMode.value, updateLogo)
  onMounted(() => {
    updateLogo()
  })
  // Rotas do menu ---
  const route = useRoute()
  const items = computed<NavigationMenuItem[]>(() => [
    {
      label: 'Sobre Mim',
      to: '/docs/getting-started',
      icon: 'gala:portrait2',
      active: route.path.startsWith('/docs/getting-started'),
      class: 'mb-1 cursor-pointer',
    },
    {
      label: 'Carreira',
      to: '/docs/components',
      icon: 'clarity:briefcase-line',
      active: route.path.startsWith('/docs/components'),
      class: 'mb-1 cursor-pointer',
    },
    {
      label: 'Projetos',
      icon: 'codicon:file-submodule',
      to: 'https://go.nuxt.com/figma-ui',
      class: 'mb-1 cursor-pointer',
    },
    {
      label: 'Contato',
      icon: 'fluent-emoji-high-contrast:envelope',
      to: 'https://github.com/nuxt/ui/releases',
      class: 'mb-1 cursor-pointer',
    },
  ])
</script>
<template>
  <UHeader
    mode="slideover"
    class="border-b border-gray-200 dark:border-gray-800"
  >
    <template #title>
      <NuxtImg :src="logoSrc" alt="Logo Ezequiel Muller" class="h-20" />
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
        />
      </UTooltip>
      <UTooltip text="LinkedIn">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://www.linkedin.com/in/ezequielhgmuller/"
          target="_blank"
          icon="entypo-social:linkedin"
          aria-label="GitHub"
        />
      </UTooltip>
      <UTooltip text="Instagram">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://www.instagram.com/ezequielmuller__/"
          target="_blank"
          icon="entypo-social:instagram"
          aria-label="GitHub"
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
