<template>
  <div id="default-layout" class="flex flex-col gap-8 mx-auto w-2xl py-8 max-lg:w-full max-sm:pt-4">
    <HeaderComponent />
    <main class="flex-1 flex flex-col gap-8">
      <slot />
    </main>
    <FooterComponent />
  </div>
</template>

<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

</script>

<style lang="scss" scoped>

</style>