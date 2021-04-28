<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
/* #app {

} */
* {
  margin: 0;
  padding: 0;
  font-size: 0.15rem;
}
@import "./scss/common.scss";
</style>
