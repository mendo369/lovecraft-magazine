<script setup></script>

<template>
  <section class="section">
    <div class="title"><h1>H.P Lovecraft</h1></div>
    <div class="img-hero">
      <img
        src="../../public/images/hp-lovecraft-grandfather-of-horror.webp"
        alt="H.P.Lovecraft"
      />
    </div>
  </section>
</template>

<style scoped>
.section {
  /* background-image: url("../../public/images/hp-lovecraft-grandfather-of-horror.webp");
  background-position: center;
  background-size: cover; */
  position: relative;
  display: grid;
  grid-template-rows: 10% 1fr;
  align-items: center;
  justify-content: center;
}

.title {
  color: white;
  text-align: center;
}

.title h1 {
}

.img-hero {
  min-width: 300px;
  min-height: 300px;
  max-height: 80vh;
  max-width: 90vh;
  height: 100%;
  overflow: hidden;
  background-color: white;
  /* border-radius: 50%; */
}

.img-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
