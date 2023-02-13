<script lang="ts">
import { getPokemonByNameOrId } from "../services/api";

export default {
  beforeMount() {
    let pokemonName = this.$route.params.id;
    getPokemonByNameOrId(pokemonName).then(
      (pokemon) => {
        this.pokemon = pokemon;
      },
      (err) => {
        alert(err);
        location.href = '/';
      }
    );
  },
  data() {
    return {
      pokemon: null,
    };
  },
  computed: {
    firstStatCol() {
      return this.pokemon?.stats.slice(0, 3);
    },
    secondStatCol() {
      return this.pokemon?.stats.slice(3, 6);
    },
  },
};
</script>

<template>
  <div class="poke-info">
    <div v-if="!pokemon">
      Loading...
    </div>
    <div v-else>
      <div><img :src="pokemon.imgUrl" alt="poke.sprite" style="height: 10rem" /></div>
      <div>
        <p style="margin: 2px">#{{ pokemon.id }}</p>
        <h2 style="margin: 2px">{{ pokemon.name }}</h2>
        <div style="display: flex; justify-content: center">
          <p v-for="(typeName, index) in pokemon.types">Type: {{ typeName }}</p>
        </div>
        <div style="display: flex; justify-content: space-evenly">
          <div>
            <p v-for="stat in firstStatCol" style="margin: 4px">
              {{ stat.name }}: {{ stat.value }}
            </p>
          </div>
          <div>
            <p v-for="stat in secondStatCol" style="margin: 4px">
              {{ stat.name }}: {{ stat.value }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  padding: 8px;
}
</style>
