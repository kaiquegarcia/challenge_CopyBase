<script setup lang="ts"></script>

<template>
  <div>
    <p>Search Pokémon by their index</p>
    <p>There are up to 1008 known species</p>
    <input class="input" type="number" placeholder="Pokémon ID" max="1008" min="0" />
  </div>
</template>

<style scoped lang="scss">
.input {
  width: 90px;
  height: 24px;
}
</style>
