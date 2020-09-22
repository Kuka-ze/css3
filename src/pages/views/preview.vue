<template>
  <div class="content">
    <h1>preview图片预览插件</h1>
    <div class="imgs">
      <img
        v-for="src in imgs"
        :src="src.url"
        :key="src.title"
        :preview="src.preview"
        :preview-text="src.title"
      />
    </div>
    <div style="margin-top:50px">
      <h1>图片预览--使用element组件进行预览</h1>
      <h5>element图组件预览的话,有些问题,大图图片要求是一个图片数组,没办法实现点击哪个,预览哪个 (不推荐使用)</h5>
      <div class="demo-image__preview">
        <el-image v-for="item in imgs" :key="item.title" style="width: 100px; height: 100px;margin:0 10px;" :src="item.url" :preview-src-list="srcList"></el-image>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [
        {
          url:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=85690711,3884201894&fm=27&gp=0.jpg",
          title: "图片1",
          preview: "1"
        },
        {
          url:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3564877025,796183547&fm=27&gp=0.jpg",
          title: "图片2",
          preview: "1"
        },
        {
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          title: "图片3",
          preview: "1"
        },
        {
          url:
            "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
          title: "图片4",
          preview: "1"
        },
        {
          url:
            "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
          title: "图片5",
          preview: "1"
        }
        // https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg
      ],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      srcList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"
      ]
    };
  }
};
</script>
<style>
.content .imgs img {
  width: 80px;
  height: 80px;
  padding: 0 5px;
}
</style>