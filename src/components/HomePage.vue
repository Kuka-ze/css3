<template>
  <div class="hello">
    <el-container style="height:100%">
      <el-header style="text-align: right; font-size: 12px">
        <span>admin</span>
      </el-header>
      <el-container style="height: 100%; border: 1px solid #eee">
        <el-aside width="180px" style="height:100%;background:#32384e; ">
          <el-menu
            v-for="(item,index) in routeList"
            :key="index"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#32384e"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu :index="index.toString()">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span style="color:#fff;">{{item.name}}</span>
              </template>
              <el-menu-item-group v-for="(ite,idx) in item.children" :key="idx">
                <el-menu-item :index="idx.toString()" @click="toPage(ite)">{{ite.name}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-container>
          <el-main style="margin:20px;">
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
    // console.log("2222", routeList);
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
  background: rgb(242, 244, 245);
}
.el-header {
  background-color: #b3c0d1;
  line-height: 60px;
}

.el-aside {
  color: #ffffff;
}
.el-main {
  padding: 0 !important;
}
</style>
