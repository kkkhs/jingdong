<template>
  <div class="wrapper">
    <div class="title">购物车</div>
    <div
      class="products"
      v-for="cart in cartList"
      :key="cart"
      v-show="cart.productList"
    >
      <div class="products__title">{{ cart }}</div>
      <div class="products__list">
        <template
          v-for="item in cart.productList"
          :key="item._id"
        >
          <div class="products__item" v-show="item.count > 0">
            <img class="products__item__img" :src="item.imgUrl">
            <div class="products__item__detail">
              <h4 class="products__item__title">{{ item.name }}</h4>
              <p class="products__item__price">
                <span class="products__item__single">
                  <span class="products__item__yen">&yen;</span>
                  {{ item.price }} x {{ item.count }}
                </span>
                <span class="products__item__total">
                  <span class="products__item__yen">&yen;</span>
                  {{ (item.price * item.count).toFixed(2) }}
                </span>
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
  <Docker :currentIndex='1'/>
</template>

<script>
import { useCommonCartEffect } from '@/effects/cartEffects.js'

import Docker from '@/components/Docker.vue'
import { useStore } from 'vuex'
export default ({
  name: 'CartList',
  components: { Docker },
  setup() {
    const store = useStore()
    const cartList = store.state.cartList
    console.log(cartList)
    for (const i in cartList) {
      console.log(typeof i)
    }
    return { cartList, useCommonCartEffect }
  }
})
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/mixins.scss';

.wrapper{
  //纵向溢出处理
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  background: #eee;
}
.title{
  line-height: .44rem;
  background: $active-color;
  font-size: .16rem;
  color: $content-fontcolor;
  text-align: center;
  border-end-start-radius: .2rem;
  border-end-end-radius: .2rem;
}

.products{
  margin: .16rem .18rem .16rem .18rem;
  background: $active-color;
  border-radius: .12rem;
  max-height: 65%;
  overflow-y: scroll;

  &__title{
    padding: 0 .18rem 0 .16rem;
    margin-top: .16rem;
    line-height: .22rem;
    font-size: .16rem;
    color: $content-fontcolor;
  }
  &__item{
    position: relative;
    display: flex;
    padding: .16rem;
    &__img{
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
      border-radius: .1rem;
    }
    &__detail{
      flex: 1;
      overflow: hidden;
    }
    &__title{
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price{
      display: flex;
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $price-color;
    }
    &__total{
      flex: 1;
      text-align: right;
      color: #000;
    }
    &__yen{
      font-size: .12rem;
    }
  }
}
</style>
