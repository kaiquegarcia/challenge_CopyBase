<script lang="ts">
import PokeCard from "../components/PokeData/PokeCard.vue";
import Search from "../components/Search/Search.vue";
import { getPokemonByNameOrId } from "../services/api";

export default {
  components: {
    PokeCard,
    Search,
  },
  data() {
    return {
      value: "",
      pokemon: null
    };
  },
  methods: {
    search() {
      getPokemonByNameOrId(this.value).then(
        (pokemon) => {
          this.pokemon = pokemon;
        },
        (err) => {
          this.pokemon = null;
          alert(err);
        }
      )
    }
  },
};
</script>

<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <Search @update:value="newValue => value = newValue" />
    <button @click="search">Search</button>
  </div>
  <div v-if="pokemon">
    <PokeCard
      :id="pokemon.id"
      :imgUrl="pokemon.imgUrl"
      :name="pokemon.name"
      :stats="pokemon.stats"
      :types="pokemon.types"
      :evolutions="pokemon.evolutions" />
  </div>
</template>

<style lang="scss">
@import "../style.scss";
</style>
