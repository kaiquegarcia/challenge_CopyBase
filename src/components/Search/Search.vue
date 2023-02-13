<script lang="ts">
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    handleChange(e: any) {
      this.$emit("customChange", e.target.value);
    },
  },
};
</script>

<template>
  <div>
    <p>Search Pokémon by name or index</p>
    <input class="input" type="text" placeholder="Pokémon" v-model="text" @input="handleChange" />
  </div>
</template>

<style scoped lang="scss">
.input {
  font-size: 24px;
  width: 180px;
  height: 24px;
}
</style>