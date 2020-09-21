<template>
  <div>
    <div ref="imageTofile">
      <img :src="url" width="400" />
      <p>html2canvas</p>
    </div>

    <div class="toImage" @click="kssstart">点击下载图片</div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
export default {
  name: "html2canvas",
  data() {
    return {
      url:
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
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
    },
    kssstart() {
      // mymap你要截取的元素 也可以是body  整个页面  **
      let canvasID = this.$refs.imageTofile;
      let that = this;
      let a = document.createElement("a");
      html2canvas(canvasID, {
        useCORS: true,
        scrollY: 0,
        removeContainer: false
      }).then(canvas => {
        let dom = document.body.appendChild(canvas);
        dom.style.display = "none";
        a.style.display = "none";
        document.body.removeChild(dom);
        let blob = that.dataURLToBlob(dom.toDataURL("image/png"));
        a.setAttribute("href", URL.createObjectURL(blob));
        a.setAttribute("download", "下载.png");
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(blob);
        document.body.removeChild(a);
        console.log("111111,执行完成了");
      });
    },
    dataURLToBlob(dataurl) {
      //ie 图片转格式
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    }
  }
};
</script>

<style>
.toImage {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  background: #ee6f2d;
  color: #fff;
  cursor: pointer;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
</style>