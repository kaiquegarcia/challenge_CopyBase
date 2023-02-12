<script setup lang="ts">
import Header from "../components/Layout/Header.vue";
import Footer from "../components/Layout/Footer.vue";
</script>

<template>
  <Header />
  <div class="poke-info">
    img
    <h1>Name</h1>
    type habitat hp atk spatk spd def spdef etc
  </div>
  <Footer />
</template>

<style scoped lang="scss">
.poke-info {
  color: #213547;
  border-radius: 96px;
  background-color: #f8ead8;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
  width: 500px;
  height: fit-content;
  margin: 16px auto;
}
</style>
