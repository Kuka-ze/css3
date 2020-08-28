<template>
  <div class="hello">
    <ul>
      <router-link to="/HelloWorld">
        <li>Css3</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 50px 50px;
  width: 120px;
  height: 60px;
  /* background: rgb(204, 232, 207); */
  background: rgb(199, 237, 204);
  text-align: center;
  line-height: 60px;
  cursor: pointer;
}
</style>
