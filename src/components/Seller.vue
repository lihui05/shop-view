<script>
import { getSellerList } from "@/api";

export default {
  name: "Seller",
  data() {
    return {
      echartsInstance: null,
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    this.initChartInstance();
    this.initChart();
  },
  methods: {
    initChartInstance() {
      this.echartsInstance = this.$echarts.init(this.$refs.seller_ref);
    },
    initChart() {
      const option = {
        title: {
          text: "|商家销售统计",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: "category",
          data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
        },
        series: [
          {
            name: "2012",
            type: "bar",
            data: [19325, 23438, 31000, 121594, 134141, 681807],
          },
        ],
      };
      this.echartsInstance.setOption(option);
    },
    async getData() {
      try {
        const res = await getSellerList();
        console.log("res>>>>>", res);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<template>
  <div class="content">
    <div ref="seller_ref" class="chart"></div>
  </div>
</template>

<style lang="scss" scoped></style>
