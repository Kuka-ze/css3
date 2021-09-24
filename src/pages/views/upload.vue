<template>
  <div class="main">
    <el-upload
      action=""
      :on-change="getFile"
      :limit="1"
      list-type="picture-card"
      :auto-upload="false"
    >
      <i class="el-icon-plus"></i>
    </el-upload>

    <div>下面是用来回显的图片</div>
    <img v-show="imageUrl" :src="imageUrl" alt="" class="imgwidth" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: "",
    };
  },
  methods: {
    getFile(file) {
      this.getBase64(file.raw).then((res) => {
        console.log(res.length);
        this.imageUrl = res;
      });
    },
    getBase64(file) {
      return new Promise(function (resolve, reject) {
        let reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = function () {
          imgResult = reader.result;
        };
        reader.onerror = function (error) {
          reject(error);
        };
        reader.onloadend = function () {
          resolve(imgResult);
        };
      });
    },
  },
};
</script>


<style>
.main {
  width: 400px;
  height: 500px;
}
.imgwidth {
  width: 50px;
  height: 50px;
}
</style>
