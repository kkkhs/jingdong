<template>
  <div class="order">
    <div class="order__price">实付金额：<b>&yen;{{ caculations.price }}</b></div>
    <div class="order__btn" @click="() => handleSubmitClick(true)">提交订单</div>
  </div>
  <div
    class="mask"
    v-show="showConfirm"
    @click="() => handleSubmitClick(false)"
  >
    <div class="mask__content" @click.stop>
      <h3 class="mask__content__title">确认要离开收银台？</h3>
      <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
      <div class="mask__content__btns">
        <div
          class="mask__content__btn mask__content__btn--first"
          @click="() => handleConfirmOrder(true)"
        >取消订单</div>
        <div
          class="mask__content__btn mask__content__btn--last"
          @click="() => handleConfirmOrder(false)"
        >确认支付</div>
      </div>
      <Toast v-if="show" :message="toastMessage"/>
    </div>
  </div>
</template>
<script>
import { useRoute, useRouter } from 'vue-router'
import { post } from '@/utils/request'
import { useCommonCartEffect } from '@/effects/cartEffects.js'
import Toast, { useToastEffect } from '@/components/Toast.vue'
import { useStore } from 'vuex'
import { ref } from 'vue'

// 下单相关逻辑
const useMakeOrderEffect = () => {
  const router = useRouter()
  const route = useRoute()
  const store = useStore()
  const shopId = parseInt(route.params.id, 10)

  const { shopName, caculations, productList } = useCommonCartEffect(shopId)
  const { show, toastMessage, showToast } = useToastEffect()

  // 提交、取消订单
  const handleConfirmOrder = async (isCanceled) => {
    const products = []
    for (const i in productList.value) {
      const product = productList.value[i]
      products.push({ id: parseInt(product._id, 10), num: product.count })
    }
    try {
      const result = await post('/api/order', {
        addressId: 1,
        shopId,
        shopName: shopName.value,
        isCanceled,
        products
      })
      console.log(result)
      if (result?.errno === 0) {
        store.commit('clearCartData', shopId)
        router.push({ name: 'OrderList' })
      } else {
        showToast('下单失败')
      }
    } catch (e) {
      showToast('下单失败')
    }
  }
  return { show, toastMessage, caculations, handleConfirmOrder }
}

// 弹窗相关逻辑
const useShowMaskEffect = () => {
  const showConfirm = ref(false)
  const handleSubmitClick = (state) => {
    showConfirm.value = state
  }

  return { showConfirm, handleSubmitClick }
}
export default {
  name: 'Order',
  components: { Toast },
  setup() {
    const { show, toastMessage, caculations, handleConfirmOrder } = useMakeOrderEffect()
    const { showConfirm, handleSubmitClick } = useShowMaskEffect()

    return { caculations, show, toastMessage, showConfirm, handleConfirmOrder, handleSubmitClick }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.order{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: .49rem;
  line-height: .49rem;
  background: $active-color;
  border-top-left-radius: .3rem;
  border-top-right-radius: .3rem;

  &__price{
    flex: 1;
    text-indent: .24rem;  // 文本缩进
    font-size: .14rem;
    color: $content-fontcolor;
  }
  &__btn{
    width: .98rem;
    background: #4fb0f9;
    color: $active-color;
    text-align: center;
    font-size: .14rem;
    border-radius: .3rem;
  }
}
.mask{
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0,0,0,.5);
  &__content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); // 按自己的50%向左上移动
    width: 3rem;
    height: 1.56rem;
    background: $active-color;
    border-radius: .12rem;
    text-align: center;
    &__title{
      margin: .24rem 0 0 0;
      line-height: .26rem;
      font-size: .18rem;
      color: $content-fontcolor;
    }
    &__desc{
      margin: .08rem 0 0 0;
      font-size: .14rem;
      color: #666;
    }
    &__btns{
      display: flex;
      margin: .24rem .58rem;
    }
    &__btn{
      flex: 1;
      width: .8rem;
      line-height: .32rem;
      border-radius: .16rem;
      font-size: .14rem;
      &--first{
        margin-right: .12rem;
        border: .01rem solid #4fb0f9;
        color: #4fb0f9;
      }
      &--last{
        margin-left: .12rem;
        background: #4fb0f9;
        color: $active-color;
      }
    }
  }
}
</style>
