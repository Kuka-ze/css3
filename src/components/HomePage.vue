<template>
  <div class="hello">
    <div class="menus">
      <div class="menu-item" v-for="(item,index) in routeList" :key="index">
        <router-link :to="`/${item.path}?id=3`">
          <div>{{item.name}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import  routeList  from "../mock/routeList";

export default {
  name: "HomePage",
  data() {
    return {
      routeList: []
    };
  },
  created() {
    console.log("2222", routeList);
    this.routeList = routeList;
  },

  methods: {

  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.hello {
  width: 100%;
  height: 100vh;
}
.menus {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

.menu-item {
  display: inline-block;
  width: 120px;
  height: 60px;
  background: rgb(199, 237, 204);
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  margin: 20px;
}
.menu-item a {
  text-decoration: none;
}
.div1 {
  width: 200px;
  height: 100px;
  background: #0ff;
}
</style>
