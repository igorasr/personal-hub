<template>
  <DefaultLayout>
    <h1 className="mb-16 mt-4 text-center max-sm:text-4xl text-5xl text-heading">Projects</h1>
      <article>
        <div class="grid grid-cols-1 gap-4">
          <PostCardComponent v-for="project in projects" :key="project.id" :post="project" />
        </div>
      </article>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import projects from '@/data/projects';
import PostCardComponent from '@/components/PostCardComponent.vue';

</script>

<style lang="scss" scoped>

</style>