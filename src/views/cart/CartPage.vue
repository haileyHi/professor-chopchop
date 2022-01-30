<template>
  <div>
    <div class="cart-top">
      <div class="cart-nickname cart-text">{{ nickname }}님,</div>
    </div>
    <div class="cart-catalog">
      <table class="cart-table">
        <tr>
          <td class="cart-menu-name">고르곤졸라 피자</td>
          <td class="cart-menu-remove">
            <div class="remove-button">X</div>
          </td>
        </tr>
        <tr>
          <td class="cart-menu-name">고르곤졸라 피자</td>
          <td class="cart-menu-remove">
            <div class="remove-button">X</div>
          </td>
        </tr>
        <tr>
          <td class="cart-menu-name">고르곤졸라 피자</td>
          <td class="cart-menu-remove">
            <div class="remove-button">X</div>
          </td>
        </tr>
        <tr>
          <td class="cart-menu-name">고르곤졸라 피자</td>
          <td class="cart-menu-remove">
            <div class="remove-button">X</div>
          </td>
        </tr>
        <tr>
          <td class="cart-menu-name">고르곤졸라 피자</td>
          <td class="cart-menu-remove">
            <div class="remove-button">X</div>
          </td>
        </tr>
      </table>
    </div>
    <div class="margin-32-horizontal">
      <div class="cart-detail cart-text">를 선택하셨어요.</div>
    </div>
    <div>5개까지 고를 수 있어요.</div>
    <more-button />
    <confirm-button />
    <div>
      <back-float-button />
      <div class=""></div>
    </div>
  </div>
</template>

<script>
import MoreButton from "@/components/button/MoreButton.vue";
import ConfirmButton from "@/components/button/ConfirmButton.vue";
import BackFloatButton from "@/components/button/BackFloatButton.vue";
export default {
  components: {
    MoreButton,
    ConfirmButton,
    BackFloatButton,
  },
  created() {},
  data() {
    return {
      list: [],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/4_components/text.scss";
@import "@/assets/scss/2_pages/CartPage.scss";
</style>
