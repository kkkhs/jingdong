<template lang="">
  <div class="wrapper">
    <div class="title">我的订单</div>
    <div class="orders">
      <div
        class="order"
        v-for="(item,index) in list"
        :key="index"
      >
        <div class="order__title">
          {{item.shopName}}
          <span class="order__status">{{item.isCanceled?'已取消':'已下单'}}</span>
        </div>
        <div class="order__content">
          <div class="order__content__imgs">
            <template
              v-for="(productInfo,infoIndex) in item.products"
              :key="infoIndex"
            >
              <img class="order__content__img" :src="productInfo.product.img">
            </template>
          </div>
          <div class="order__content__info">
            <div class="order__content__info__price">&yen; {{item.totalPrice}}</div>
            <div class="order__content__info__count">共 {{item.totalNum}} 件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Docker :currentIndex="2"/>
</template>

<script>
import Docker from '@/components/Docker.vue'
import { reactive, toRefs } from 'vue'
import { get } from '@/utils/request'

// 处理订单列表逻辑
const useOrderListEffect = () => {
  const data = reactive({ list: [] })
  const getNearbyList = async () => {
    const result = await get('/api/order')
    if (result?.errno === 0 && result?.data?.length) {
      const orderList = result.data
      orderList.forEach(order => {
        const products = order.products || []
        let totalPrice = 0
        let totalNum = 0
        products.forEach((productItem) => {
          totalPrice += ((productItem?.product?.price * productItem?.orderSales) || 0)
          totalNum += (productItem?.orderSales || 0)
        })
        order.totalPrice = totalPrice
        order.totalNum = totalNum
      })
      data.list = result.data
    }
  }
  getNearbyList()
  const { list } = toRefs(data)
  return { list }
}

export default {
  name: 'OrderList',
  components: { Docker },
  setup() {
    const { list } = useOrderListEffect()
    return { list }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.wrapper{
  //纵向溢出处理
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  background: rgb(248, 248, 248);
}
.title{
  line-height: .44rem;
  background: $active-color;
  font-size: .16rem;
  color: $content-fontcolor;
  text-align: center;
}
.orders{

}
.order{
  border-radius: .12rem;
  margin: .16rem .18rem;
  padding: .16rem;
  background: $active-color;
  &__title{
    margin-bottom: .16rem;
    line-height: .22rem;
    font-size: .16rem;
    color: $content-fontcolor;
  }
  &__status{
    float: right;
    font-size: .14rem;
    color: $light-fontColor;
  }
  &__content{
    display: flex;
    &__imgs{
      flex: 1;
      overflow-wrap: scroll;
      max-width: 2.5rem;
    }
    &__img{
      width: .4rem;
      height: .4rem;
      margin-right: .12rem;
      border-radius: .06rem;
    }
    &__info{
      width: .7rem;
      &__price{
        margin-bottom: .04rem;
        line-height: .2rem;
        font-size: .14rem;
        color: $heightlight-font-color;
        text-align: right;
      }
      &__count{
        line-height: .14rem;
        font-size: .12rem;
        color: $content-fontcolor;
        text-align: right;
      }
    }
  }
}
</style>
