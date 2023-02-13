<script setup lang="ts">
import { IPokemon } from "../../utils/pokemon-interface";

const pokemon = withDefaults(defineProps<IPokemon>(), {});
</script>

<template>
  <div style="width: 100%">
    <router-link :to="`/pokemon/${pokemon.name}`">
      <div class="card">
        <img :src="pokemon.imgUrl" alt="poke-sprite" />
        <p>#{{ pokemon.id }}</p>
        <p>{{ pokemon.name }}</p>
      </div>
    </router-link>
    <div v-if="pokemon.evolutions?.length ?? 0 > 0">
      <span class="arrow">&#8595;</span>
    </div>
    <div v-if="pokemon.evolutions?.length ?? 0 > 0" class="evolution-list">
      <PokeCard
        v-for="(evolution, index) in pokemon.evolutions"
        :id="evolution.id"
        :name="evolution.name"
        :imgUrl="evolution.imgUrl"
        :stats="evolution.stats"
        :types="evolution.types"
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
