<template>
  <div
    class="mask"
    v-if="showCart && caculations.total"
    @click="handleCartShowChange"
  ></div>
  <div class="cart" >
    <div class="product" v-if="showCart && caculations.total">
      <div class="product__header">
        <div class="product__header__all" @click="setCartItemChecked">
          <span
            class="product__header__icon iconfont"
            v-html="caculations.allChecked ? '&#xe652;' : '&#xe619;'"
          ></span>
          全选
        </div>
        <div class="product__header__clear">
          <span class="product__header__clear__btn"  @click="cleanCartProducts">清空购物车</span>
        </div>
      </div>
      <template
        v-for="item in productList"
        :key="item._id"
      >
        <div class="product__item">
          <div
            class="product__item__checked iconfont"
            v-html="item.check ? '&#xe652;' : '&#xe619;'"
            @click="() => {changeCartItemChecked(item._id)}"
          >
          </div>
          <img class="product__item__img" :src="item.imgUrl">
          <div class="product__item__detail">
            <h4 class="product__item__title">{{ item.name }}</h4>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{ item.price }}
              <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
            </p>
          </div>
          <div class="product__number">
            <span
              class="product__number__minus"
              @click="() => {changeCartItemInfo(shopId, item._id, item, -1)}"
            >-</span>
            {{ item.count || 0 }}
            <span
              class="product__number__plus"
              @click="() => {changeCartItemInfo(shopId, item._id, item, 1)}"
            >+</span>
          </div>
        </div>
      </template>
    </div>
    <div class="check">
      <div
        class="check__icon"
        @click="handleCartShowChange"
      >
        <img class="check__icon__img" src="http://www.dell-lee.com/imgs/vue3/basket.png">
        <div class="check__icon__tag">{{ caculations.total }}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; {{ caculations.price }}</span>
      </div>
      <div class="check__btn">
        <router-link :to="{path: `/orderConfirmation/${shopId}`}">
          去结算
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { useCommonCartEffect } from '@/effects/cartEffects'

// 获取购物车信息逻辑
const useCartEffect = () => {
  const store = useStore()
  const route = useRoute()
  const shopId = route.params.id
  const { changeCartItemInfo, productList, caculations } = useCommonCartEffect(shopId)

  const changeCartItemChecked = (productId) => {
    store.commit('changeCartItemChecked', { shopId, productId })
  }

  const cleanCartProducts = () => {
    store.commit('cleanCartProducts', { shopId })
  }

  const setCartItemChecked = () => {
    store.commit('setCartItemChecked', { shopId })
  }

  return { shopId, productList, caculations, changeCartItemInfo, changeCartItemChecked, cleanCartProducts, setCartItemChecked }
}

// 展示/隐藏购物车逻辑
const toggleCartEffect = (total) => {
  const showCart = ref(false)

  const handleCartShowChange = () => {
    showCart.value = !showCart.value
  }

  return { showCart, handleCartShowChange }
}

export default {
  name: 'Cart',
  setup() {
    const { productList, shopId, caculations, changeCartItemInfo, changeCartItemChecked, cleanCartProducts, setCartItemChecked } = useCartEffect()
    const { showCart, handleCartShowChange } = toggleCartEffect(caculations.total)

    return { productList, shopId, caculations, showCart, changeCartItemInfo, changeCartItemChecked, cleanCartProducts, setCartItemChecked, handleCartShowChange }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/mixins.scss';
@import '@/style/variables.scss';
.mask{
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 1;
}
.cart{
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  background: $active-color;
}
.product{
  overflow-y: scroll;
  flex: 1;
  background: $active-color;
  &__header{
    display: flex;
    line-height: .52rem;
    font-size: .14rem;
    color: $content-fontcolor;
    &__all{
      width: .64rem;
      margin-left: .18rem;
    }
    &__icon{
      display: inline-block;
      margin-right: .1rem;
      vertical-align: top;
      color: $btn-bgColor;
      font-size: .2rem;
    }
    &__clear{
      flex: 1;
      margin-right: .16rem;
      text-align: right;
      &__btn{
        display: inline-block;
      }
    }
  }
  &__item{
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;
    &__detail{
      overflow: hidden;
    }
    &__checked{
      line-height: .5rem;
      margin-right: .2rem;
      color:$btn-bgColor;
      font-size: .2rem;
    }
    &__img{
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
      border-radius: .1rem;
    }
    &__title{
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price{
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $price-color;
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
      bottom: .26rem;
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
.check{
  display: flex;
  box-sizing: border-box;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  line-height: .49rem;
  &__icon{
    position: relative;
    width: .84rem;
    &__img{
      display: block;
      margin: .12rem auto;
      width: .28rem;
      height: .26rem;
    }
    &__tag{
      position: absolute;
      left: .48rem;
      top: .02rem;
      padding: .02rem .02rem;
      min-width: .2rem;
      line-height: .2rem;
      background-color: $heightlight-font-color;
      border-radius: .3rem;
      font-size: .13rem;
      text-align: center;
      color: $active-color;
      transform: scale(.7);
      transform-origin: left center;
    }
  }
  &__info{
    flex: 1;
    color: $content-fontcolor;
    font-size: .12rem;
    &__price{
      line-height: .49rem;
      color: $heightlight-font-color;
      font-size: .18rem;
    }
  }
  &__btn{
    width: 1.08rem;
    color: $active-color;
    background-color: #4fb0f9;
    border-radius: .3rem;
    font-size: .14rem;
    text-align: center;
    a {
      color: $active-color;
      text-decoration: none;
    }
  }
}
</style>
