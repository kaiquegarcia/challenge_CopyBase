<script setup lang="ts">
import { IPokemon } from "../../services/pokemon-interface";

const pokemon = withDefaults(defineProps<IPokemon>(), {});
</script>

<template>
  <div style="width: 100%">
    <div class="card">
      <img :src="pokemon.imgUrl" :alt="pokemon.imgAlt" />
      <p>{{ pokemon.name }}</p>
    </div>
    <div v-if="pokemon.evolutions?.length ?? 0 > 0">
      <span class="arrow">&#8595;</span>
    </div>
    <div v-if="pokemon.evolutions?.length ?? 0 > 0" class="evolution-list">
      <PokeCard
        v-for="(evolution, index) in pokemon.evolutions"
        :name="evolution.name"
        :img-url="evolution.imgUrl"
        :img-alt="evolution.imgAlt"
        :evolutions="evolution.evolutions" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  color: #20262e;
  width: 120px;
  height: fit-content;
  border-radius: 96px;
  background-color: #f8ead8;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
  margin: 8px auto;
  cursor: pointer;
}

.evolution-list {
  display: flex;
  justify-content: space-evenly;
}

.arrow {
  font-size: 2rem;
}
</style>
