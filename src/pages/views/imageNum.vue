<template>
  <div>
    <h1>将数字转换成图片展示</h1>
    <div style="display: flex">
      <img
        class="num"
        v-for="(item, index) in numList"
        :key="index"
        :src="numBg[item]"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numList: "321462",
      /** vue js里面引入图片,必须使用require 否则无效 */
      numBg: [
        require("../../images/number/0.png"),
        require("../../images/number/1.png"),
        require("../../images/number/2.png"),
        require("../../images/number/3.png"),
        require("../../images/number/4.png"),
        require("../../images/number/5.png"),
        require("../../images/number/6.png"),
        require("../../images/number/7.png"),
        require("../../images/number/8.png"),
        require("../../images/number/9.png"),
      ],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let arr = [
        { id: 1, name: "部门1", pid: 0 },
        { id: 2, name: "部门2", pid: 1 },
        { id: 3, name: "部门3", pid: 1 },
        { id: 4, name: "部门4", pid: 3 },
        { id: 5, name: "部门5", pid: 4 },
      ];
      console.log("arr", arr);

      // function arrayToTree(items) {
      //   const result = []; // 存放结果集
      //   const itemMap = {}; //
      //   for (const item of items) {
      //     const id = item.id;
      //     const pid = item.pid;

      //     if (!itemMap[id]) {
      //       itemMap[id] = {
      //         children: [],
      //       };
      //     }

      //     itemMap[id] = {
      //       ...item,
      //       children: itemMap[id]["children"],
      //     };

      //     const treeItem = itemMap[id];

      //     if (pid === 0) {
      //       result.push(treeItem);
      //     } else {
      //       if (!itemMap[pid]) {
      //         itemMap[pid] = {
      //           children: [],
      //         };
      //       }
      //       itemMap[pid].children.push(treeItem);
      //     }
      //   }
      //   return result;
      // }

      const getChildren = (data, result, pid) => {
        for (const item of data) {
          if (item.pid === pid) {
            const newItem = { ...item, children: [] };
            result.push(newItem);
            getChildren(data, newItem.children, item.id);
          }
        }
      };

      const arrayToTree = (data, pid) => {
        const result = [];
        getChildren(data, result, pid);
        return result;
      };

       console.log(arrayToTree(arr,0));
    },
  },
};
</script>

<style>
.num {
  margin-right: 1px;
  width: 30px !important;
  height: 100px !important;
  /* background: #f00; */
}
</style>