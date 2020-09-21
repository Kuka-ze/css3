<template>
  <div>
    <!-- 把需要生成截图的元素放在一个元素容器里,设置一个ref -->
    <div ref="imageTofile">
      <!-- 这里放需要截图的元素,自定义组件元素也可以 -->
      <img src="../../images/1.jpg" width="400" />
      <p>html2canvas</p>
    </div>
    <!-- 如果需要展示截取的图片,给一个img标签 -->
    <img :src="dataURL11" v-show="!isFakeData" />

    <div class="toImage" @click="toImage">点击下载图片</div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
export default {
  name: "html2canvas",
  data() {
    return {
      url: "",
      isFakeData: true
    };
  },
  components: {
    // html2canvas
  },
  methods: {
    // 页面元素转图片
    toImage() {
      // 第一个参数是需要生成截图的元素,第二个是自己需要配置的参数,宽高等
      let _this = this;
      html2canvas(this.$refs.imageTofile, {
        backgroundColor: null //避免图片有白色边框
      }).then(canvas => {
        console.log("canvas====>", canvas);
        let dataURL11 = canvas.toDataURL("image/png");
        _this.url = dataURL11;
        _this.isFakeData = false;
        let link = document.createElement("a");
        link.href = canvas.toDataURL(); //下载链接
        link.setAttribute("download", "体检表.png");
        link.style.display = "none"; //a标签隐藏
        document.body.appendChild(link);
        link.click();
      });
    }
  }
};
</script>

<style>
.toImage {
  width: 200px;
  height: 50px;
  border-radius: 20px;
  text-align: center;
  line-height: 50px;
  border: 1px solid #000;
  cursor: pointer;
}
</style>