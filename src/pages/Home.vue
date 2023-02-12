<script lang="ts">
import PokeCard from "../components/PokeData/PokeCard.vue";
import Search from "../components/Search/Search.vue";
import Header from "../components/Layout/Header.vue";
import Footer from "../components/Layout/Footer.vue";

export default {
  components: {
    PokeCard,
    Search,
    Header,
    Footer,
  },
  data() {
    return {
      hasData: false,
      pokemon: {
        name: "Ditto",
        imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        imgAlt: "ditto sprite",
        evolutions: [
          {
            name: "Ditto",
            imgUrl:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
            imgAlt: "ditto sprite",
            evolutions: [
              {
                name: "Ditto",
                imgUrl:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
                imgAlt: "ditto sprite",
              },
            ],
          },
          {
            name: "Ditto",
            imgUrl:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
            imgAlt: "ditto sprite",
          },
        ],
      },
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
  <Header />
  <div style="display: flex; flex-direction: column; align-items: center">
    <Search />
    <button @click="toggleData">Toggle</button>
  </div>
  <div v-if="hasData">
    <PokeCard
      :name="pokemon.name"
      :img-url="pokemon.imgUrl"
      :img-alt="pokemon.imgAlt"
      :evolutions="pokemon.evolutions" />
  </div>
  <Footer />
</template>

<style lang="scss">
@import "../style.scss";
</style>
