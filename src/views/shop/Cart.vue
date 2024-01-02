<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img class="check__icon__img" src="http://www.dell-lee.com/imgs/vue3/basket.png">
        <div class="check__icon__tag">{{ total }}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; {{ price }}</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

// 获取购物车信息逻辑
const useCartEffect = () => {
  const store = useStore()
  const route = useRoute()
  const shopId = route.params.id
  const cartList = store.state.cartList

  const total = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += product.count
      }
    }
    return count
  })
  const price = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += (product.count * product.price)
      }
    }
    return count.toFixed(2)
  })

  return { total, price }
}

export default {
  name: 'Cart',
  setup() {
    const { total, price } = useCartEffect()

    return { total, price }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.cart{
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
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
    width: .98rem;
    color: $active-color;
    background-color: #4fb0f9;
    font-size: .14rem;
    text-align: center;
  }
}
</style>
