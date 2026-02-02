<template>
  <USeparator icon="sidekickicons:chevron-left-right-16-solid" class="h-px" />
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        Ezequiel H. G. Muller © {{ new Date().getFullYear() }}
      </p>
    </template>

    <p class="text-muted text-sm">Transformando ideias em aplicações reais.</p>
    <template #right>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://github.com/ezequielmuller"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        class="hover:text-green-500"
      />
      <UButton
        color="neutral"
        variant="ghost"
        to="https://www.linkedin.com/in/ezequielhgmuller/"
        target="_blank"
        icon="entypo-social:linkedin"
        aria-label="LinkedIn"
        class="hover:text-blue-500"
      />
      <UButton
        color="neutral"
        variant="ghost"
        to="https://www.instagram.com/ezequielmuller__/"
        target="_blank"
        icon="entypo-social:instagram"
        aria-label="Instagram"
        class="hover:text-pink-500"
      />
    </template>
  </UFooter>
</template>
<script setup lang="ts"></script>
