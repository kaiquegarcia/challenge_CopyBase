<script lang="ts">
export default {
  props: ['value'],
  emits: ['update:value'],
  methods: {
    onChange($event) {
      this.$emit('update:value', $event.target.value);
    }
  }
};
</script>

<template>
  <div>
    <p>Search Pokémon by name or index</p>
    <input 
      class="input"
      type="text"
      placeholder="Pokémon"
      :value="value"
      @input="onChange" />
  </div>
</template>

<style scoped lang="scss">
.input {
  font-size: 24px;
  width: 180px;
  height: 24px;
}
</style>