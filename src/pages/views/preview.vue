<template>
  <div class="content">
    <h1>preview图片预览插件</h1>
    <img v-for="src in imgs" :src="src.url" :key="src.title" :preview="src.preview" :preview-text="src.title">
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
      ]
    };
  }
};
</script>
<style>
.content img {
  width: 80px;
  height: 80px;
  padding: 0 5px;
}
</style>