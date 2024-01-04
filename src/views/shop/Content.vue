<template >
  <div class="content">
    <div class="category">
      <div
        :class="{'category__item':true, 'category__item--active': (item.tab===currentTab?true:false)}"
        v-for="item in categories"
        :key="item.name"
        @click="handleTabClick(item.tab)"
      >
      {{ item.name }}
      </div>
    </div>
    <div class="product">
      <div
        class="product__item"
        v-for="item in list"
        :key="item._id"
        >
        <img class="product__item__img" :src="item.imgUrl">
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item__sales">月售{{ item.sales }}件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{ item.price }}
            <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="product__number">
          <span
            class="product__number__minus"
            @click="() => {changeCartItem(shopId, item._id, item, -1, shopName)}"
          >-</span>
          {{ cartList?.[shopId]?.productList?.[item._id]?.count || 0 }}
          <span
            class="product__number__plus"
            @click="() => {changeCartItem(shopId, item._id, item, 1, shopName)}"
          >+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRef, toRefs, watchEffect } from 'vue'
import { get } from '@/utils/request'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '@/effects/cartEffects'
import { useStore } from 'vuex'

const categories = [
  { name: '全部商品', tab: 'all' },
  { name: '秒杀', tab: 'seckill' },
  { name: '新鲜水果', tab: 'fruit' }
]

// 和tab切换相关的逻辑
const useTabEffect = () => {
  const currentTab = toRef(categories[0].tab)

  const handleTabClick = (tab) => {
    currentTab.value = tab
  }

  return { currentTab, handleTabClick }
}

// 列表内容相关的逻辑
const useCurrentListEffect = (currentTab, shopId) => {
  const content = reactive({ list: [] })

  const getContentData = async (tab) => {
    const result = await get(`api/shop/${shopId}/products`, { tab: currentTab.value })
    if (result?.errno === 0 && result?.data?.length) {
      content.list = result.data
    }
  }

  // 首次加载页面和当页面依赖的数据currentTab发生变化时执行
  watchEffect(() => {
    getContentData(currentTab)
  })

  const { list } = toRefs(content)
  return { shopId, list }
}

const useCartEffect = () => {
  const store = useStore()
  const { cartList, changeCartItemInfo } = useCommonCartEffect()

  const changeShopName = (shopId, shopName) => {
    store.commit('changeShopName', { shopId, shopName })
  }
  const changeCartItem = (shopId, productId, item, num, shopName) => {
    changeCartItemInfo(shopId, productId, item, num)
    changeShopName(shopId, shopName)
  }
  return { cartList, changeCartItem }
}

export default ({
  name: 'Content',
  props: ['shopName'],
  setup() {
    const route = useRoute()
    const shopId = route.params.id
    const { currentTab, handleTabClick } = useTabEffect()
    const { list } = useCurrentListEffect(currentTab, shopId)
    const { cartList, changeCartItem } = useCartEffect()

    return { cartList, shopId, list, categories, currentTab, handleTabClick, changeCartItem }
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
}
.category{
  overflow-y: scroll;
  width: .76rem;
  background: $search-bgColor;
  height: 100%;
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
      border-radius: .1rem;
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
