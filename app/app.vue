<template>
  <UApp>
    <UProvider :default-color-mode="'light'">
      <UTooltipProvider>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </UTooltipProvider>
    </UProvider>
  </UApp>
</template>

<script setup lang="ts"></script>
