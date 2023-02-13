<script lang="ts">

export default {
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
    <div><img :src="pokemon.sprites.front_default" alt="poke.sprite" style="height: 10rem" /></div>
    <div>
      <p style="margin: 2px">#{{ pokemon.id }}</p>
      <h2 style="margin: 2px">{{ pokemon.name }}</h2>
      <div style="display: flex; justify-content: center">
        <p v-for="(type, index) in pokemon.types">Type: {{ type.type.name }}</p>
      </div>
      <div style="display: flex; justify-content: space-evenly">
        <div>
          <p v-for="stat in firstStatCol" style="margin: 4px">
            {{ stat.stat.name }}: {{ stat.base_stat }}
          </p>
        </div>
        <div>
          <p v-for="stat in secondStatCol" style="margin: 4px">
            {{ stat.stat.name }}: {{ stat.base_stat }}
          </p>
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
