<template>
  <div class="breadcrumbs flex red">
    <div class="breadcrumbs-item flex" v-for="(item,index) in breadcrumbs" :key="index" @click="toPage()">{{item.name}}</div>
  </div>
</template>

<script>
export default {
  name: "breadcrumb",
  //   props: {},
  data() {
    return {
      //   breadcrumbs: []
      breadcrumbs: [
        {
          name: "首页",
          href: "/"
        },
        {
          name: "工作台",
          href: "/"
        }
      ]
    };
  },
  methods: {
    toPage() {
      console.log("跳转页面");
    }
  }
};
</script>

<style>
.breadcrumbs {
  margin-bottom: 20px;
}
.breadcrumbs-item{
  
}
.flex {
    display: flex;
}
</style>
