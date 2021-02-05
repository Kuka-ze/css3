<template>
  <div class="main">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="(item,index) in newList" :key="index">
        <div v-for="(i,idx) in item" :key="idx">
          <div>{{i.id}}</div>
          <div>{{i.name}}</div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import { arrTrans } from "../../util/utils";
export default {
  data() {
    return {
      list: [
        {
          id: "01",
          name: "哈哈01",
          content: "我是01"
        },
        {
          id: "02",
          name: "哈哈01",
          content: "我是01"
        },
        {
          id: "03",
          name: "哈哈01",
          content: "我是01"
        },
        {
          id: "04",
          name: "哈哈01",
          content: "我是01"
        },
        {
          id: "05",
          name: "哈哈01",
          content: "我是01"
        },
        {
          id: "06",
          name: "哈哈01",
          content: "我是01"
        },
        {
          id: "07",
          name: "哈哈01",
          content: "我是01"
        },
        {
          id: "08",
          name: "哈哈01",
          content: "我是01"
        },
        {
          id: "09",
          name: "哈哈01",
          content: "我是01"
        },
        {
          id: "10",
          name: "哈哈01",
          content: "我是01"
        },
        {
          id: "11",
          name: "哈哈01",
          content: "我是01"
        }
      ],
      arr: [],
      newList: []
    };
  },
  created() {
    console.log("000", this.list);
    let newList = arrTrans(5, this.list);
    console.log("1111", newList);
    this.newList = newList;
  },
  methods: {}
};
</script>


<style>
.main {
  width: 400px;
  height: 500px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 500px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>