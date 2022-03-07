<template>
  <div>
    <el-upload
      action="#"
      name="file"
      :show-file-list="false"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <img v-if="value" :src="(file && file.url) || value" class="avatar" />
      <div v-else class="upload-border">
        <i class="el-icon-plus avatar-uploader-icon"></i>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      baseUrl: process.env.VUE_APP_URL,
      dialogVisible: false,
      dialogImageUrl: "",
      disabled: false,
    };
  },
  created() {},
  methods: {
    handleRemove(file) {
      console.log(file);
      this.dialogImageUrl = "";
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    handleAvatarSuccess(res) {
      // window.console.log(res)
      // window.console.log(file.raw)
      // this.imageUrl = URL.createObjectURL(file.raw)
      this.$emit("input", res.data.url);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG,PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.upload-border {
  border: 1px solid #f00;
}
</style>

