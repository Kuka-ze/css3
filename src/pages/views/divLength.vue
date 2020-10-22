<template>
  <div class="divpading">
    <h1>动态渲染div宽度</h1>
    <h3>以最大的数值为100%,其他的动态渲染百分比</h3>
    <div class="aa" v-for="(item,index) in data" :key="index">
      <div style="display: flex;">
        <div>{{item.name}}</div>
        <div>{{item.number}}</div>
      </div>
      <div class="bg" :style="{width: item.length + '%'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      viewTopics: [
        {
          name: "面包",
          number: "100",
          index: 1
        },
        {
          name: "包子",
          number: "90",
          index: 2
        },
        {
          name: "馒头",
          number: "80"
        },
        {
          name: "窝头",
          number: "50"
        },
        {
          name: "大饼",
          number: "30"
        }
      ]
    };
  },
  created() {
    let that = this;
    that.denominator = this.viewTopics[0].number || "";
    console.log("11111", that.denominator);
    let res = that.viewTopics.map(item => {
      return {
        name: item.name,
        number: item.number,
        index: item.index,
        length: (item.number / that.denominator) * 100
      };
    });
    that.data = res;
    console.log(that.data, 111);
  },
  methods: {}
};
</script>

<style>
.divpading{
    padding: 20px;
}
.aa {
  width: 200px;
}

.bg {
  height: 20px;
  background: #000;
}
</style>