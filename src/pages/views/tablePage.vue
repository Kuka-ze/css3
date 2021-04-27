<template>
  <div>
    <h1>element 里面table相关</h1>
    <div style="width:50vw">
      <el-table :data="tableData" style="width: 100%" @cell-click="handle">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="person" label="人员2" :formatter="formatData"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          person: ["姐姐", "妹妹", "哥哥"]
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          person: ["姐姐", "妹妹"]
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          person: ["姐姐", "妹妹", "哥哥"]
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          person: ["姐姐", "妹妹"]
        }
      ]
    };
  },
  methods: {
    formatData(row) {
      let rowPerson = (row && row.person) || [];
      let arr = [];
      rowPerson.forEach(item => {
        arr.push(item);
      });
      return arr.join(",");
    },
    handle(row, column, event, cell) {
      console.log(row);
      console.log(column);
      console.log(event);
      console.log(cell);
    }
  },
  created() {
    console.log("table数据", this.tableData);
  }
};
</script>

<style>
</style>