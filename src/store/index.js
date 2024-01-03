import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      // 第一层级是商铺id
      // shopId: {
      //   // 第二层是商品内容以及购物数量
      //   productId: {
      //   }
      // }
    }
  },
  getters: {
  },
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) { shopInfo = {} }

      let product = shopInfo[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count += payload.num

      if (payload.num > 0) {
        product.check = true
      }
      product.count = product.count < 0 ? 0 : product.count

      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
    },
    changeCartItemChecked(state, payload) {
      const { shopId, productId } = payload
      state.cartList[shopId][productId].check = !state.cartList[shopId][productId].check
    },
    cleanCartProducts(state, payload) {
      const { shopId } = payload
      state.cartList[shopId] = {}
    },
    setCartItemChecked(state, payload) {
      const { shopId } = payload
      const products = state.cartList[shopId]
      if (products) {
        for (const key in products) {
          products[key].check = true
        }
      }
    }

  },
  actions: {
  },
  modules: {
  }
})
