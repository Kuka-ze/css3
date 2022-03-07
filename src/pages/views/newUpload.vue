<template>
  <div>
    <b-upload-image-base64 ref="bUploadImageBase64" :limitNum="1" @change="change" :defaultImageList="defaultImageList" />
  </div>
</template>
<script>
  import bUploadImageBase64 from '@/components/BUploadImageBase64'
  export default {
    components: {
      bUploadImageBase64
    },
    data() {
      return {
        fromImgList: ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'],
        defaultImageList: []
      };
    },
    methods: {
      change(e) {
        console.log('e', e)
      }
    },
  };
</script>
<style>

</style>
