<template>
  <div>
    border组件
    <div class="content">
      <div>
        <div class="yuan center">
          20px
        </div>
        <div class="yuan1 center">
          50%
        </div>
        <div class="yuan2 center">
          50px
        </div>
      </div>
      <div style="margin-left:30px;">
        <div class="yinying">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "border",
  data() {
    return {};
  },
  created() {},
  methods: {
    test() {
      console.log("test");
    }
  }
};
</script>

<style>
.content {
  width: 100%;
  height: 100%;
  display: flex;
}
.yuan {
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background: #f00;
}
.yuan1 {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #f00;
}
.yuan2 {
  width: 200px;
  height: 200px;
  border-radius: 50px;
  background: #f00;
}
.center {
  text-align: center;
  line-height: 200px;
}
.yinying {
  width: 200px;
  height: 200px;
  background: cornflowerblue;
  /* 上右下左 */
  box-shadow: 10px 10px 20px 20px #f00;
}
</style>