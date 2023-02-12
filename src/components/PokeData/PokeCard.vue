<script setup lang="ts">
defineProps({
  data: {},
});
</script>

<template>
  <div :class="'card'"></div>
</template>

<style scoped lang="scss">
.card {
  width: 360px;
  height: fit-content;
  border-radius: 12px;
  background-color: #f1f1f1;
  margin: 8px auto;
}
</style>
