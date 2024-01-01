<template>
  <div class="wrapper">
    <div class="search">
      <div
        class="search__back iconfont"
        @click="handleBackClick"
      >
        &#xe608;
      </div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xecc4;</span>
        <input class="search__content__input" placeholder="请输入商品名称"/>
      </div>
    </div>
    <ShopInfo :item="data.item" :hideBorder="true"/>
  </div>
</template>

<script>
import ShopInfo from '@/components/ShopInfo'
import { get } from '@/utils/request'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
export default ({
  name: 'Shop',
  components: { ShopInfo },
  setup() {
    const router = useRouter()
    const data = reactive({ item: {} })
    const getItemData = async () => {
      const result = await get('/api/shop/1')
      if (result?.errno === 0 && result?.data) {
        data.item = result.data
      }
    }

    getItemData()

    const handleBackClick = () => {
      router.push({ name: 'Home' })
    }

    return { data, handleBackClick }
  }
})
</script>

<style lang="scss" scoped>
.wrapper{
  padding: 0 .18rem;
}
.search{
  display: flex;
  margin: .14rem 0 .04rem 0;
  line-height: .32rem;
  &__back{
    width: .3rem;
    font-size: .24rem;
    color: #b6b6b6;
  }
  &__content{
    display: flex;
    flex: 1;
    background: #f5f5f5;
    border-radius: .16rem;
    &__icon{
      width: .44rem;
      text-align: center;
      color: #b7b7b7;
    }
    &__input{
      padding-right: .2rem;
      display: block;
      width: 100%;
      border: none;
      outline: none;
      background: none;
      height: .32rem;
      font-size: .14rem;
      color: #333;
      &::placeholder{
        color: #333;
      }
    }
  }
}
</style>
