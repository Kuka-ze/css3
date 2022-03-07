<template>
  <div>
    <breadcrum :breadcrumbs="breadcrumbs"></breadcrum>
    <el-card class="box-card">功能正在开发ing...</el-card>
    <!-- 表单start -->
    <div class="demo-drawer__content overflowAuto">
      <el-form
        ref="updataProjectFrom"
        :model="informationModify"
        :rules="rules"
      >
        <el-form-item
          :required="true"
          label="项目名称"
          :label-width="formLabelWidth"
          prop="projectName"
        >
          <el-input v-model="informationModify.projectName"></el-input>
        </el-form-item>
        <el-form-item
          :required="true"
          label="有效期"
          :label-width="formLabelWidth"
          prop="haveTerm"
        >
          <el-date-picker
            v-model="informationModify.haveTerm"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>

        <el-form-item
          :required="true"
          label="项目地址"
          :label-width="formLabelWidth"
          prop="address[0]"
        >
          <el-cascader
            v-model="informationModify.address[0]"
            :options="addressOptions"
            :props="{
              value: 'name',
              label: 'name',
            }"
          >
          </el-cascader>
        </el-form-item>
        <!-- <el-form-item
                :required="true"
                label=""
                :label-width="formLabelWidth"
                prop="address[1]"
              >
                <el-input
                  v-model="informationModify.address[1]"
                  placeholder="请输入详细地址"
                ></el-input>
              </el-form-item> -->

        <el-form-item label="所属企业" :label-width="formLabelWidth">
          <el-input v-model="informationModify.haveEnterprise"></el-input>
        </el-form-item>
        <el-form-item label="联系人" :label-width="formLabelWidth">
          <el-input v-model="informationModify.contacts"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <el-input v-model="informationModify.contactsTel"></el-input>
        </el-form-item>
        <el-form-item label="人数" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入内容"
            v-model="informationModify.peoples"
          >
            <template #append>人</template>
          </el-input>
        </el-form-item>
        <el-form-item label="面积" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入内容"
            v-model="informationModify.surfaceArea"
          >
            <template #append>m<sup style="font-size: 10px">2</sup></template>
          </el-input>
        </el-form-item>
        <el-form-item label="年产值" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入内容"
            v-model="informationModify.outPutValue"
          >
            <template #append>万元</template>
          </el-input>
        </el-form-item>
        <el-form-item label="企业图片" :label-width="formLabelWidth">
          <el-upload
            ref="myUploadPic"
            list-type="picture-card"
            limit="1"
            action=""
            :on-error="errorFile"
            :auto-upload="false"
            :on-change="getFile"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog v-model="informationModify.enterpriseImg.dialogVisible">
            <img
              width="100%"
              :src="informationModify.enterpriseImg.dialogImageUrl"
              alt=""
            />
          </el-dialog>
        </el-form-item>
      </el-form>
    </div>
    <div class="demo-drawer__footer">
      <el-button
        style="color: #3d94ff; border: 1px solid #3d94ff; margin-right: 12px"
        class="but"
        @click="resetForm"
        >重 置</el-button
      >
      <el-button
        type="primary"
        class="but"
        style="margin-right: 36px"
        @click="updataFrom"
        :loading="loading"
        >{{ loading ? "保存中 ..." : "保 存" }}</el-button
      >
    </div>
  </div>
</template>

<script>
import breadcrum from "../../components/breadcrumb.vue";
export default {
  name: "indexPage",
  components: {
    breadcrum,
  },
  data() {
    return {
      msg: "indexPage",
      breadcrumbs: [
        {
          name: "首页",
          href: "indexPage",
        },
        {
          name: "工作台",
          href: "twoArray",
        },
      ],
      id: "5",
    };
  },
  created() {
    this.getData();
  },
  methods: {
 
  },
};
</script>

<style>
</style>