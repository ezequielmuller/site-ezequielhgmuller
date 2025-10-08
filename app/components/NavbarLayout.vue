<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Sobre Mim',
  to: '/docs/getting-started',
  icon: 'solar:user-id-bold',
  active: route.path.startsWith('/docs/getting-started')
}, {
  label: 'Carreira',
  to: '/docs/components',
  icon: 'clarity:briefcase-line',
  active: route.path.startsWith('/docs/components')
}, {
  label: 'Projetos',
  icon: 'codicon:file-submodule',
  to: 'https://go.nuxt.com/figma-ui',
}, {
  label: 'Contato',
  icon: 'fluent-emoji-high-contrast:envelope',
  to: 'https://github.com/nuxt/ui/releases',
}])
</script>

<template>
  <UHeader mode="slideover" class="border-b border-gray-200 dark:border-gray-800">
    <template #title>
      <Logo />
    </template>
    <UNavigationMenu :items="items" />
    <template #right>
      <UColorModeButton />
      <UTooltip text="Open on GitHub">
        <UButton color="neutral" variant="ghost" to="https://github.com/nuxt/ui" target="_blank"
          icon="i-simple-icons-github" aria-label="GitHub" />
      </UTooltip>
    </template>
    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5 p-4 space-y-2" />
    </template>
  </UHeader>

</template>
