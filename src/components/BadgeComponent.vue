<template>
  <span
    class="rounded-full ring-1 px-2.5 py-0.5 text-sm dark:bg-inherit  dark:ring-zinc-500"
    :class="[bgColor, textColor]"
  >
    <slot></slot>
  </span>
</template>

<script setup>
const { bgColor, textColor } = defineProps({
  bgColor: {
    type: String,
    default: "bg-inherit",
  },
  textColor: {
    type: String,
    default: "text-base",
  },
});
</script>

<style lang="scss" scoped></style>
