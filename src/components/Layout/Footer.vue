<script lang="ts">
const thisYear = new Date().getFullYear();

export default {
  data() {
    return { thisYear };
  },
};
</script>

<template>
  <div class="footer-box">
    Copyright by <a href="https://github.com/ArNeto19"> @ArNeto19 </a> ⓒ {{ thisYear }}
  </div>
</template>

<style scoped lang="scss">
.footer-box {
  margin-top: 5rem;
}
</style>
