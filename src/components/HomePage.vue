<template>
  <div class="hello">
    <ul>
      <router-link to="/HelloWorld">
        <li>Css3</li>
      </router-link>
    </ul>
    <div class="div1" @click="getAliyunData">防抖点击</div>
  </div>
</template>

<script>
import { Debounce } from "../util/utils";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {};
  },
  created() {
    // console.log("2222", antiShake);
  },

  methods: {
    getAliyunData: Debounce(function() {
      console.log("11111");
    }, 1000),
    getAliyunData1() {
      console.log("111");
    }
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
.div1 {
  width: 200px;
  height: 100px;
  background: #0ff;
}
</style>
