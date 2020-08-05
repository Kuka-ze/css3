<template>
  <div class="hello">
    <ul>
      <li>边框border</li>
      <li>圆角</li>
      <li>背景</li>
      <li>渐变</li>
      <li>文本效果</li>
      <li>字体</li>
    </ul>
    <ul>
      <li>2D转换</li>
      <li>3D转换</li>
      <li>过渡</li>
      <li>动画</li>
      <li>多列</li>
      <li>用户界面</li>
    </ul>
    <ul>
      <li>图片</li>
      <li>按钮</li>
      <li>分页</li>
      <li>框大小</li>
      <li>弹性盒子</li>
      <li>媒介查询</li>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
