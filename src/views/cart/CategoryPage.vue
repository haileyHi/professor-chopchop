<template>
  <div class="category-background">
    <div class="order-top-window">
      <div class="order-top-title">
        <div class="order-top-guide">
          <div class="order-top-nickname">
            "{{ nickname }}오렌지 태양 아래 갈라파고스 펭귄"
          </div>
          님,
        </div>
        새해 목표가 무엇인가요?
      </div>
      <div class="order-top-detail description">먼저 분류를 골라보세요.</div>
    </div>
    <div class="order-category-window">
      <div>
        <table class="category-table">
          <tr>
            <td>
              <div class="category-image">
                <img src="" />
              </div>
              명절음식
            </td>
            <td>
              <div class="category-image">
                <img src="" />
              </div>
              찜탕찌개국
            </td>
            <td>
              <div class="category-image">
                <img src="" />
              </div>
              한식밥류
            </td>
          </tr>
          <tr>
            <td>
              <div class="category-image">
                <img src="" />
              </div>
              고기
            </td>
            <td>
              <div class="category-image">
                <img src="" />
              </div>
              분식
            </td>
            <td>
              <div class="category-image">
                <img src="" />
              </div>
              치킨피자햄버거
            </td>
          </tr>
          <tr>
            <td>
              <div class="category-image">
                <img src="" />
              </div>
              양식
            </td>
            <td>
              <div class="category-image">
                <img src="" />
              </div>
              디저트&음료
            </td>
            <td>
              <div class="category-image">
                <img src="" />
              </div>
              아시안
            </td>
          </tr>
          <tr>
            <td>
              <div class="category-image">
                <img src="" />
              </div>
              일식
            </td>
            <td>
              <div class="category-image">
                <img src="" />
              </div>
              중식
            </td>
          </tr>
          <tr>
            <td>
              <div class="category-image">
                <img src="" />
              </div>
              기타
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="icon-cart">장바구니아이콘</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickname: "",
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/4_components/text.scss";

.category-background {
  background: linear-gradient(
    180.66deg,
    #a3eef2 -3.5%,
    #ebebeb -3.5%,
    #ffffff 43.61%
  );
}

.category-table {
  margin: auto;
}

.category-table tr td {
  padding: 0 10px;
}
.category-image {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-color: white;
}
</style>
