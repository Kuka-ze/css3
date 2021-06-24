<template>
  <div class="hello">
    <div class="div1" @click="getAliyunData">防抖点击</div>
  </div>
</template>

<script>
import { Debounce } from "../../util/utils";
export default {
  name: "ShakeProof",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  created() {
    // console.log("2222", antiShake);
  },

  methods: {
    getAliyunData: Debounce(function () {
      console.log("11111");
      alert("防抖测试");
    }, 1000),
    getAliyunData1() {
      console.log("111");
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.hello {
  width: 100%;
  height: 100vh;
}

.div1 {
  width: 200px;
  height: 100px;
  background: #0ff;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
}
</style>
