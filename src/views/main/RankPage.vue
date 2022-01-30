<template>
  <div>
    <RankItem
      v-for="(id, i) in ranks"
      v-bind:자식꺼="ranks[i]"
      v-bind:key="i"
      >{{ id }}</RankItem
    >
  </div>
</template>

<script>
import RankItem from "../../components/layout/RankItem.vue";
import FoodApi from "@/apis/FoodApi.js";
export default {
  components: {
    RankItem: RankItem,
  },
  created() {
    this.getRank();
    console.log(this.ranks[0].menuName + " ");
  },
  data() {
    return {
      ranks: [
        "후라이드 치킨",
        "떡국/떡만둣국",
        "아이스 아메리카노",
        "포테이토 피자",
        "양념 치킨",
      ],
    };
  },
  methods: {
    getRank() {
      // let id = this.$route.params.id;
      FoodApi.requestFoodRank().then((res) => {
        this.ranks = res.data;
        //return res.data.data;
      });
    },
  },
  mounted: async function () {
    const response = await this.getRank();
    this.ranks = response;
  },
};
</script>

<style></style>
