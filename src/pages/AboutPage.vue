<template>
  <DefaultLayout>
    <h1 className="mb-16 mt-4 text-center max-sm:text-4xl text-5xl text-heading">About me</h1>
    <article>
      <p>
        Hi! I'm <strong class="border-b border-sky-500">Igor Augusto</strong>, a proud "mineiro"
        from Belo Horizonte, born on 09/18/2000 – the kind who loves challenges (and coffee, of
        course).
      </p>

      <p>
        My journey in technology began early, at 18, when I joined a technical course in IT. It was
        love at first line of code! That same year, I landed my first job in IT as a
        <strong class="border-b border-sky-500">network intern</strong>. I learned a bit of
        everything: configured servers, broke some (oops! 😅), participated in a massive network
        restructuring project, and realized that technology was, indeed, my path.
      </p>

      <p>
        From intern, I became an assistant, entered college, and started exploring software
        development – and that's when the
        <strong class="border-b border-sky-500">dev seed</strong> was planted.
      </p>

      <h2 class="text-xl py-2">From Infra to Code</h2>
      <p>
        My second opportunity was at a software house. Still in infrastructure, I managed cloud
        servers, dealt with unexpected (and challenging!) issues, and fully dove into the Linux
        world. But something kept pulling me closer to development.
      </p>

      <p>
        I started creating Bash automations to make my daily work easier. Soon, I was building small
        Java systems and realized:
        <em class="border-b border-sky-500">"this is what I want to do!"</em>.
      </p>

      <p>
        That's how I landed my first job as a
        <strong class="border-b border-sky-500">developer</strong>. Finally, I could feel the magic
        of turning lines of code into real-world solutions.
      </p>

      <h2 class="text-xl py-2">Today</h2>
      <p>
        I’m currently a <strong class="border-b border-sky-500">Full Stack Developer</strong>,
        specialized in <strong class="border-b border-sky-500">PHP and Vue.js</strong>, with strong
        experience in:
      </p>
      <ul>
        <li>
          System integrations via <strong class="border-b border-sky-500">REST APIs</strong> (I’ve
          even built complex integrations, like a full sync with Shopee, including webhook
          processing and data exchange).
        </li>
        <li>
          Software architecture – yes, I’ve rewritten the wheel just to learn (like when I built a
          PHP router from scratch to better understand how big frameworks work 😄).
        </li>
        <li>
          Infrastructure and DevOps, which allow me to have an end-to-end vision and deliver
          complete solutions.
        </li>
      </ul>

      <p>
        I hold a
        <strong class="border-b border-sky-500">Bachelor’s degree in Computer Science</strong> and
        am passionate about understanding how things work and creating scalable solutions that truly
        deliver value.
      </p>

      <h2 class="text-xl py-2">And the Future?</h2>
      <p>
        I plan to do an exchange program, experience a new culture, improve my English, and broaden
        my worldview – because technology goes far beyond code.
      </p>

      <p>
        Oh, and of course: keep growing as a developer, learning new things, and facing challenges
        that take me out of my comfort zone (but without burning servers this time 🤞).
      </p>

      <section class="text-center py-6">
        <h2 class="text-xl py-2">Wanna Talk?</h2>
        <p>If you want to chat about technology, just reach out!</p>
        <div class="flex justify-center items-center gap-4 max-sm:flex-col max-sm:gap-0">
          <a
            href="mailto:igorausgostosouza00@gmail.com"
            class="flex items-center gap-2 text-blue-400 hover:underline"
          >
            <Mail class="size-4"/>
            igoraugustosouza00@gmail.com
          </a>
          <span class="max-sm:rotate-90">|</span>
          <a
            href="https://www.linkedin.com/in/igorasr"
            target="_blank"
            class="flex items-center gap-2 text-blue-400 hover:underline"
          >
            <Linkedin class="size-4"/>
            LinkedIn
          </a>
        </div>
      </section>
    </article>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { Linkedin, Mail } from "lucide-vue-next";
</script>

<style lang="scss" scoped></style>
