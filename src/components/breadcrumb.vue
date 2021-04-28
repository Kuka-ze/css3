<template>
  <div class="breadcrumbs flex">
    <div
      class="breadcrumbs-item flex"
      v-for="(item,index) in list"
      :key="index"
      @click="toPage(item)"
    >
      <span>
        {{item.name}}
        <i class="el-icon-arrow-right" v-if="!(index == breadcrumbs.length-1)"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "breadcrumb",
  props: {
    breadcrumbs: Array
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
    toPage(item) {
      console.log("跳转页面", item);
      this.$router.push({
        path: `/${item.href}`
      });
    }
  },
  mounted() {
    console.log("breadcrumbs", this.breadcrumbs);
    this.list = this.breadcrumbs;
  }
};
</script>

<style>
.breadcrumbs {
  margin-bottom: 20px;
}
.breadcrumbs-item {
  width: auto;
  height: 20px;
  cursor: pointer;
}
.flex {
  display: flex;
}
</style>
