<template>
  <div>
    <NavbarLayout />
    <UContainer class="py-8">
      <slot></slot>
    </UContainer>
  </div>
</template>
<script setup lang="ts">
import NavbarLayout from '~/components/layout/NavbarLayout.vue'
</script>

