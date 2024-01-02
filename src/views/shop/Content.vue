<template >
  <div class="content">
    <div class="category">
      <div class="category__item category__item--active" >全部商品</div>
      <div class="category__item">秒杀</div>
      <div class="category__item">新鲜水果</div>
      <div class="category__item">休闲食品</div>
      <div class="category__item">时令蔬菜</div>
      <div class="category__item">肉蛋家禽</div>
    </div>
    <div class="product">
      <div class="product__item">
        <img class="product__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png">
        <div class="product__item__detail">
          <h4 class="product__item__title">番茄250g/份</h4>
          <p class="product__item__sales">月售10件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>33.6
            <span class="product__item__origin">&yen;66.6</span>
          </p>
        </div>
        <div class="product__number">
          <span class="product__number__minus">-</span>
          0
          <span class="product__number__plus">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default ({
  setup() {

  }
})
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/mixins.scss';

.content{
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .5rem;
  background: #ccc;
}
.category{
  overflow-y: scroll;
  width: .76rem;
  height: 100%;
  background: $search-bgColor;
  &__item{
    line-height: .4rem;
    text-align: center;
    font-size: 14px;
    color: $content-fontcolor;
    &--active{
      background: $active-color;
    }
  }
}
.product{
  overflow-y: scroll;
  flex: 1;
  &__item{
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;
    &__detail{
      overflow: hidden;
    }
    &__img{
      width: .68rem;
      height: .68rem;
      margin-right: .16rem;
    }
    &__title{
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__sales{
      margin: .06rem 0;
      line-height: .16rem;
      font-size: .12rem;
      color: $content-fontcolor;
    }
    &__price{
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: #b93b3b;
    }
    &__yen{
      font-size: .12rem;
    }
    &__origin{
      margin-left: .06rem;
      line-height: .2rem;
      font-size: .12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
    .product__number{
      position: absolute;;
      right: 0;
      bottom: .12rem;
      &__minus,&__plus
      {
        // 与 display: inline 相比，主要区别在于 display: inline-block 允许在元素上设置宽度和高度。
        // 同样，如果设置了 display: inline-block，将保留上下外边距/内边距，而 display: inline 则不会。
        display: inline-block;
        width: .2rem;
        height: .2rem;
        line-height: .16rem;
        border-radius: 50%;
        font-size: .2rem;
        text-align: center;
      }
      &__minus{
        margin-right: .05rem;
        border: .01rem solid $medium-fontColor;
        color: $medium-fontColor;
      }
      &__plus{
        margin-left: .05rem;
        background: $btn-bgColor;
        color: $active-color;
      }
    }
  }
}
</style>
