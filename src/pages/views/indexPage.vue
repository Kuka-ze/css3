<template>
  <div>
    <breadcrum></breadcrum>
    <el-card class="box-card">首页</el-card>
  </div>
</template>

<script>
import breadcrum from "../../components/breadcrumb.vue";
export default {
  name: "indexPage",
  components: {
    breadcrum
  },
  data() {
    return {
      msg: "indexPage",
      breadcrumbs: [
        {
          name: "首页",
          href: "/"
        }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>

<style>
</style>