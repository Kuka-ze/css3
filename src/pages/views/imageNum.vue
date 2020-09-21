<template>
  <div style="display:flex;">
    <img class="num" v-for="(item,index) in numList" :key="index" :src="numBg[item]" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      numList: "123",
      numBg: [
        require("../../images/number/0.png"),
        require("../../images/number/1.png"),
        require("../../images/number/2.png"),
        require("../../images/number/3.png"),
        require("../../images/number/4.png"),
        require("../../images/number/5.png"),
        require("../../images/number/6.png"),
        require("../../images/number/7.png"),
        require("../../images/number/8.png"),
        require("../../images/number/9.png")
      ],
    };
  },
  created() {},
  methods: {}
};
</script>

<style>
.num {
  margin-right: 1px;
  width: 30px !important;
  height: 100px !important;
  /* background: #f00; */
}
</style>