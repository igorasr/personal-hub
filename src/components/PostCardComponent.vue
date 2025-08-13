<template>
  <div
    class="flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
    <div class="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
      <h2 class="text-xl">{{ post.title }}</h2>
      <div class="flex gap-2">
        <BadgeComponent v-for="tag in post.tags" :key="tag" class="whitespace-nowrap">
          {{ `#${tag}` }}
        </BadgeComponent>
      </div>
    </div>
    <div>
      <p class="whitespace-pre-line p-4">{{ post.content }}</p>
    </div>
    <img :src="post.image" class="w-full" width="620" height="324" :alt="post.title " />
  </div>
</template>

<script setup>
import BadgeComponent from "./BadgeComponent.vue";

const { post } = defineProps({
  post: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped></style>
