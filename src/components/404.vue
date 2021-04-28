<template>
  <div>
    <div class="flex flex-center">
      <div class="bg-div">
        <img src="../assets/403.png" />
      </div>
      <div class="btn-div">
        <button class="btn-oa" @click="toOA">返回首页</button>
        <P class="btn-p">请从路由菜单访问</P>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    toOA() {
      this.$router.push("/indexPage");
    }
  }
};
</script>

	<style  scope>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #ffffff;
}
.bg-div {
  width: 700px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -350px;
  margin-top: -150px;
}
.flex {
  display: flex;
}
.btn-div {
  width: 14vw;
  height: 100px;
  position: absolute;
  left: 56.5%;
  top: 62%;
  margin-left: -7vw;
  margin-top: -50px;
}
.btn-oa {
  width: 120px;
  height: 40px;
  color: #ffffff;
  background: rgb(236, 112, 112);
  border-radius: 4px;
  border: none;
  font-size: 16px;
  cursor: pointer;
}
.btn-p {
  font-size: 16px;
  margin-top: 5px;
}
</style>