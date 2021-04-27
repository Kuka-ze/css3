<template>
  <div class="hello">
    <el-container style="height:100%">
      <el-header style="text-align: right; font-size: 12px">
        <span>admin</span>
      </el-header>
      <el-container style="height: 100%; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246); height:100%; ">
          <el-menu v-for="(item,index) in routeList" :key="index">
            <el-submenu :index="index.toString()">
              <template slot="title">
                <i class="el-icon-menu"></i>
                {{item.name}}
              </template>
              <el-menu-item-group v-for="(ite,idx) in item.children" :key="idx">
                <el-menu-item :index="idx.toString()" @click="toPage(ite)">{{ite.name}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-container>
          <el-main style="margin:10px;background:#ffffff;">
            <keep-alive>
              <router-view style="width:100%;height:100%;" />
            </keep-alive>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import routeList from "../mock/routeList";

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
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toPage(e) {
      const { id, name, path } = e;
      console.log("22222", e);
      this.$router.push({
        path: `/${path}`,
        query: { id, name }
      });
    }
  }
};
</script>

<style scoped>
.hello {
  /* width: 100vw;
  height: 100vh; */
  height: 100vh;
  background: #f3f3f3;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.el-main {
  padding: 0 !important;
}
</style>
