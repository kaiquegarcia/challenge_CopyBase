<script lang="ts">
import PokeCard from "./components/PokeData/PokeCard.vue";
import Search from "./components/Search/Search.vue";

export default {
  components: {
    PokeCard,
    Search,
  },
  data() {
    return {
      hasData: false,
    };
  },
  methods: {
    toggleData() {
      this.hasData = !this.hasData;
    },
  },
};
</script>

<template>
  <h1>Pokédex Search</h1>
  <Search />
  <button @click="toggleData">Toggle</button>
  <PokeCard v-if="hasData" />
</template>

<style lang="scss">
@import "./style.scss";
</style>
