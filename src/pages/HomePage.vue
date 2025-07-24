<template>
  <DefaultLayout>
    <section class="max-sm:text-center">
      <p class="text-sm">
        I'm a developer with over 5 years of experience in PHP, Docker, and scalable systems. I
        focus on microservices, integrations, and performance, with hands-on experience in complex
        projects — such as a full Shopee integration and critical ERP module optimizations. In this
        blog, I share practical insights on backend development, software architecture, best
        practices, and the tools I use daily, aiming to help other developers write cleaner, safer,
        and more efficient code.
      </p>
    </section>
    <LinkListComponent :list="mediaLinks" />
    <section class="flex justify-center max-sm:flex-col-reverse sm:justify-between gap-y-4">
      <div class="flex flex-col items-start gap-2 max-sm:items-center">
        <div class="flex items-center gap-2">
          <p>{{ email }}</p>
          <button
            className="text-zinc-800 sm:group-hover:inline-flex dark:text-zinc-300 cursor-pointer"
            @click="copyMail"
          >
            <Transition name="fade" mode="out-in">
              <Copy v-if="!coped" key="copy" class="size-4" />
              <BookmarkCheck v-else key="check" class="size-4" />
            </Transition>
          </button>
          <a
            href="mailto:igoraugustosouza00@gmail.com"
            className="text-zinc-800 dark:text-zinc-300"
          >
            <Send class="size-4" />
          </a>
        </div>
        <span
          class="flex w-fit items-center animate-pulse gap-1.5 rounded-full bg-green-100 px-2 py-0.5 text-sm text-green-600 ring-1 ring-green-500 dark:bg-transparent dark:text-emerald-500 dark:ring-emerald-500"
        >
          <div class="size-2 animate-pulse rounded-full bg-green-500 dark:bg-emerald-500" />
          Online
        </span>
      </div>
      <a
        href="/igor_augusto-CV.pdf"
        download="igor_augusto-CV.pdf"
        class="flex items-center justify-center gap-3 p-2 rounded text-sky-500 ring-1 transition-all dark:bg-inherit dark:text-sky-500 dark:ring-sky-500 sm:hover:bg-amber-50 sm:dark:hover:bg-zinc-800"
      >
        <span class="text-nowrap">Download my CV</span>
        <Download class="size-5" />
      </a>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import mediaLinks from "@/data/mediaLinks";
import LinkListComponent from "@/components/LinkListComponent.vue";
import { BookmarkCheck, Copy, Download, Send } from "lucide-vue-next";
import { ref } from "vue";

const email = "igoraugustosouza00@gmail.com";
const coped = ref(false);

function copyMail() {
  navigator.clipboard.writeText(email).then(() => {
    coped.value = true;
    setTimeout(() => (coped.value = false), 2000);
  });
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
