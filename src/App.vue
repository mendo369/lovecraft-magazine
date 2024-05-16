<script setup>
import Hero from "./views/Hero.vue";
import Introduction from "./views/Introduction.vue";
import Bio from "./views/Bio.vue";
import Works from "./views/Works.vue";
import Opinions from "./views/Opinions.vue";
import References from "./views/References.vue";
</script>

<template>
  <main class="render">
    <Hero />
    <Introduction />
    <Bio />
    <Works />
    <Opinions />
    <References />
  </main>
</template>

<style scoped>
.render {
  height: 100vh;
  scrollbar-width: none;
  max-height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
</style>
