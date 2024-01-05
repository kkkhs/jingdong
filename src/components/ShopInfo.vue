<template>
  <div
    class="shop">
    <img class="shop__img" :src="item.imgUrl" >
    <div
      :class="{'shop__content': true, 'shop__content--bordered': hideBorder ? false : true}"
    >
      <div class="shop__content__title">{{ item.name }}</div>
      <div class="shop__content__tags">
        <span class="shop__content__tag">月售{{ item.sales }}+</span>
        <span class="shop__content__tag">起送&yen;{{ item.expressLimit }}元</span>
        <span class="shop__content__tag">基础运费&yen;{{ item.expressPrice}}元</span>
      </div>
      <p class="shop__content__highlight">{{ item.slogan }}</p>
    </div>
  </div>
</template>

<script>

export default ({
  name: 'ShopInfo',
  props: ['item', 'hideBorder']
})
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.shop{
  display: flex;
  padding-top: .12rem;
  &__img{
    width: .56rem;
    height: .56rem;
    margin-right: .16rem;
  }

  &__content{
    flex: 1;
    padding-bottom: .12rem;
    &--bordered{
      border-bottom: .01rem solid $content-bgColor;
    }
    &__title{
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }
    &__tags{
      margin-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontcolor;
    }
    &__tag{
      margin-right: .14rem;
    }
    &__highlight{
      margin: .08rem 0 0 0;
      line-height: .18rem;
      font-size: .13rem;
      color: $heightlight-font-color;
    }
  }
}

</style>
