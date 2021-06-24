<template>
  <div class="hello">
    <el-container style="height:100%">
      <el-header>
        <div class="flex flex-between">
          <div class="title-h1">Vue空间</div>
          <div class="rightUser">
            <span class="welcome">欢迎你,</span>
            <el-dropdown>
              <span class="el-dropdown-link">
                admin
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="updataPassWord">修改密码</el-dropdown-item>
                <el-dropdown-item>退出登陆</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-container style="height: 100%;">
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
    <!-- 下面是修改密码弹出框 -->
    <el-dialog
      title="修改密码"
      :visible.sync="dialogFormVisible"
      close-on-click-modal
      close-on-press-escape
    >
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="原密码" :label-width="formLabelWidth" prop="oldName">
          <el-input v-model="form.oldName" autocomplete="off" placeholder="请输入原密码"></el-input>
        </el-form-item>
        <el-form-item label="新密码" :label-width="formLabelWidth" prop="newName">
          <el-input
            v-model="form.newName"
            autocomplete="off"
            placeholder="请输入新密码   (密码格式6-20位字母或者数字)"
          ></el-input>
        </el-form-item>
        <el-form-item label="再次输入新密码" :label-width="formLabelWidth" prop="againName">
          <el-input v-model="form.againName" autocomplete="off" placeholder="请再次输入新密码"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import routeList from "../mock/routeList";

export default {
  name: "HomePage",
  data() {
    return {
      routeList: [],
      dialogFormVisible: false,
      form: {
        oldName: "",
        againName: "",
        newName: ""
      },
      ruleForm: {},
      formLabelWidth: "140px",
      rules: {
        oldName: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        againName: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        newName: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
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
    //跳转路由页面
    toPage(e) {
      const { id, name, path } = e;
      console.log("22222", e);
      this.$router.push({
        path: `/${path}`,
        query: { id, name }
      });
    },
    //打开跟新密码弹窗
    updataPassWord() {
      this.dialogFormVisible = true;
    },
    //密码提交
    onSubmit() {
      console.log("submit!");
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
  background-color: #ffffff;
  line-height: 60px;
}

.el-aside {
  color: #ffffff;
}
.el-main {
  padding: 0 !important;
}
.title-h1 {
  font-size: 0.25rem;
  color: #6070bf;
  font-weight: 600;
  padding-left: 0.2rem;
}
.rightUser {
}
.welcome {
  color: #606266;
  font-size: 0.13rem;
  padding: 0 5px;
}
</style>
