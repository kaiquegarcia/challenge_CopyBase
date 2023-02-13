<script lang="ts">
import PokeCard from "../components/PokeData/PokeCard.vue";
import Search from "../components/Search/Search.vue";
import { mock } from "../utils/pokemonMock";

export default {
  components: {
    PokeCard,
    Search,
  },
  data() {
    return {
      showData: false,
      pokemon: mock,
    };
  },
  methods: {
    toggleData() {
      this.showData = !this.showData;
    },
  },
};
</script>

<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <Search />
    <button @click="toggleData">Toggle View</button>
  </div>
  <div v-if="showData">
    <PokeCard
      :id="pokemon.id"
      :name="pokemon.name"
      :sprites="pokemon.sprites"
      :stats="pokemon.stats"
      :types="pokemon.types"
      :evolutions="pokemon.evolutions" />
  </div>
</template>

<style lang="scss">
@import "../style.scss";
</style>
