<template>
  <div
    class="flex flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500"
  >
    <a
      v-for="link in list"
      :key="link.name"
      :href="link.url"
      target="_blank"
      class="group p-4 flex justify-between items-center transition-all text-heading hover:bg-amber-50 dark:hover:bg-zinc-800"
    >
      <span class="flex items-center gap-4">
        <div v-html="link.icon"></div> {{ link.name }}
        <span
          class="-translate-x-4 text-base opacity-0 transition-all max-sm:hidden group-hover:translate-x-0 group-hover:opacity-100 "
        >
          {{ link.description }}
        </span>
      </span>
      <ArrowUpRight
        class="size-5 shrink-0 text-zinc-800 transition-all sm:group-hover:rotate-45 dark:text-zinc-300"
      />
    </a>
  </div>
</template>

<script setup>
import { ArrowUpRight } from "lucide-vue-next";

const { list } = defineProps({
  list: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped></style>
