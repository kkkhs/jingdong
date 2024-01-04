<template>
  <div class="wrapper">
    <div class="top">
      <div class="top__header">
        <div class="iconfont top__header__back" @click="handleBackClick">&#xe608;</div>
        确认订单
      </div>
      <div class="top__receiver">
        <div class="top__receiver__title">收货地址</div>
        <div class="top__receiver__address">合肥工业大学宣城校区南区9号楼1层</div>
        <div class="top__receiver__info">
          <span class="top__receiver__info__name">邝（先生）</span>
          <span class="top__receiver__info__name">1234567890</span>
        </div>
        <div class="top__receiver__icon iconfont">&#xe608;</div>
      </div>
    </div>
    <div class="products">
      <div class="products__title">{{ shopName }}</div>
      <div class="products__list">
        <template
          v-for="item in productList"
          :key="item._id"
        >
          <div
            class="products__item"
            v-if="item.count > 0"
          >
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
                  {{ item.price * item.count }}
                </span>
              </p>
            </div>
          </div>
        </template>

      </div>
    </div>
    <div class="order">
      <div class="order__price">实付金额：<b>&yen;{{ caculations.price }}</b></div>
      <div class="order__btn">提交订单</div>
    </div>
  </div>
</template>

<script>
import { useCommonCartEffect } from '@/effects/cartEffects'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'OrderConfirmation',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const shopId = route.params.id
    const { shopName, productList, caculations } = useCommonCartEffect(shopId)

    const handleBackClick = () => { router.back() }

    return { shopName, productList, caculations, handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
@import '@/style/mixins.scss';

.wrapper{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #eee;
}
.top{
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);
  background-repeat: no-repeat;
  &__header{
    position: relative;
    padding-top: .26rem;
    line-height: .24rem;
    color: #FFF;
    text-align: center;
    font-size: .16rem;
    &__back{
      position: absolute;
      left: .18rem;
      font-size: .22rem
    }
  }
  &__receiver {
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background: #FFF;
    border-radius: .12rem;
    &__title{
      line-height: .22rem;
      padding: .16rem 0 .14rem .16rem;
      font-size: .16rem;
      color: #333;
    }
    &__address{
      line-height: .2rem;
      padding: 0 .4rem 0 .16rem;
      font-size: .14rem;
      color: #333;
    }
    &__info{
      padding: .06rem 0 0 .16rem;
      &__name{
        margin-right: .06rem;
        line-height: .18rem;
        font-size: .12rem;
        color: #666;
      }
    }
    &__icon{
      transform: rotate(180deg); //旋转
      position: absolute;
      right: .16rem;
      top: .5rem;
      font-size: .2rem;
      color: #666;
    }
  }
}
.products{
  margin: .16rem .18rem .55rem .18rem;
  background: #FFF;
  border-radius: .12rem;
  max-height: 65%;
  overflow-y: scroll;

  &__title{
    padding: 0 .18rem 0 .16rem;
    margin-top: .16rem;
    line-height: .22rem;
    font-size: .16rem;
    color: #333;
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
.order{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: .49rem;
  line-height: .49rem;
  background: #FFF;
  border-radius: .3rem;

  &__price{
    flex: 1;
    text-indent: .24rem;  // 文本缩进
    font-size: .14rem;
    color: #333;
  }
  &__btn{
    width: .98rem;
    background: #4fb0f9;
    color: #FFF;
    text-align: center;
    font-size: .14rem;
    border-radius: .3rem;
  }
}
</style>
