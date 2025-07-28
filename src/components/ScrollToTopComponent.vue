<template>
  <button
    v-if="isVisible"
    @click="scrollToTop"
    class="cursor-pointer fixed z-10 flex items-center gap-2 rounded bg-zinc-50 py-2 pl-4 pr-3 ring-1 ring-zinc-400 transition-all sm:hover:bg-zinc-100 max-sm:bottom-8 max-sm:right-8 sm:right-8 sm:top-8 dark:bg-zinc-900 dark:ring-zinc-500 sm:hover:dark:bg-zinc-800"
  >
    Back to top
    <ArrowUp class="size-4 text-sky-500" />
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { ArrowUp } from "lucide-vue-next";
const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 300;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
