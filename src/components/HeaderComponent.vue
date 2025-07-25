<script setup>
import { ChevronLeft, Moon, Sun, Triangle } from "lucide-vue-next";
import { useTheme } from "@/composables/useTheme.js";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const { theme, toggleTheme } = useTheme();
</script>

<template>
  <header>

    <nav class="flex items-center justify-between max-sm:flex-col max-sm:gap-6">
      <div v-if="route.path === '/'">
        <div class="flex flex-col max-sm:items-center">
          <p class="color-heading">Igor Augusto</p>
          <span class="text-sub-heading"> Software Engineer </span>
        </div>
      </div>

      <RouterLink
        v-else
        to="/"
        class="group relative flex items-center transition-all max-sm:text-center"
      >
        <div class="absolute -left-10 flex size-4 w-12 items-center px-2">
          <ChevronLeft class="group-hover:text-sky-500 transition-all"/>
        </div>
        <div class="flex flex-col max-sm:items-center">
          <p class="text-heading group-hover:text-sky-500 transition-all">Igor Augusto</p>
          <span class="text-sub-heading group-hover:text-sky-500 transition-all"> Software Engineer </span>
        </div>
      </RouterLink>

      <div class="flex items-center gap-4">
        <button @click="toggleTheme" class="cursor-pointer">
          <Moon
            v-show="theme == 'dark'"
            class="transition-all duration-300 size-5 hover:-rotate-12 hover:scale-110"
          />
          <Sun
            v-show="theme !== 'dark'"
            class="transition-all duration-300 size-5 hover:-rotate-12 hover:scale-110 fill-yellow-300"
          />
        </button>
        <RouterLink
          to="/about"
          class="group relative rounded transition-all hover:ring-1 hover:ring-sky-500 hover:dark:ring-sky-600 px-2 py-px"
        >
          <span class="text-sky-500">/</span>About
          <Triangle
            v-if="route.path === '/about'"
            class="absolute left-1/2 mt-1 hidden size-2 fill-sky-500 text-zinc-800 sm:block dark:fill-sky-600 dark:text-transparent"
          />
        </RouterLink>
        <RouterLink
          to="/projects"
          class="group relative rounded transition-all hover:ring-1 hover:ring-sky-500 hover:dark:ring-sky-600 px-2 py-px"
        >
          <span class="text-sky-500">/</span>Projects
          <Triangle
            v-if="route.path === '/projects'"
            class="absolute left-1/2 mt-1 hidden size-2 fill-sky-500 text-zinc-800 sm:block dark:fill-sky-600 dark:text-transparent"
          />
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
