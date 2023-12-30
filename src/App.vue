<template>
  <div>
    <div class="wrapper">
      <div class="position">
        <span class="iconfont position__icon">&#xe64c;</span>
        合肥工业大学宣城校区南区9号楼1层
        <span class="iconfont position__notice">&#xe6cc;</span>
      </div>
      <div class="search">
        <span class="iconfont">&#xecc4;</span>
        <input class="search__input" type="text" name="" id="" placeholder="山姆会员商店优惠商品">
      </div>
      <div class="banner">
        <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="">
      </div>
    </div>

    <div class="docker">
      <div class="docker__item docker__item--active">
        <div class="iconfont">&#xe63f;</div>
        <div class="docker__title">首页</div>
      </div>
      <div class="docker__item">
        <div class="iconfont">&#xe6af;</div>
        <div class="docker__title">购物车</div>
      </div>
      <div class="docker__item">
        <div class="iconfont">&#xe613;</div>
        <div class="docker__title">订单</div>
      </div>
      <div class="docker__item">
        <div class="iconfont">&#xe78b;</div>
        <div class="docker__title">我的</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './style/variables.scss';
@import './style/mixins.scss';
.wrapper{
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem;
}
.position{
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;

  .position__icon{
    position: relative;
    top: .01rem;
    font-size: .2rem;
  }
  .position__notice{
    position: absolute;
    font-size: .22rem;
    right: 0;
    top: .17rem;
  }
  color:$content-fontcolor;
}
.search{
  display: flex;
  align-items: center;
  margin-bottom: .12rem;
  line-height: .32rem;
  background: #f5f5f5;
  color: #b7b7b7;
  border-radius: .16rem;

  .iconfont{
    position: relative;
    display: inline-block;
    padding: 0 .1rem 0 .16rem;
    font-size: .16rem;
  }

  &__input{
    flex: 1;
    display: inline-block;
    font-size: .14rem;
    border: none;
    //聚焦时的样式：
    outline: none;
    background:#f5f5f5;
    height: 100%;
  }
}

.banner{
  //防止加载图片时下方内容抖动
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;        //图片高宽比

  &__img{
    width: 100%;
  }
}
.docker{
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: .01rem solid #F1F1F1;
  color:$content-fontcolor;

  &__item{
    flex: 1;
    text-align: center;
    .iconfont{
      font-size: .18rem;
      margin: 0.07rem 0 0.02rem 0;
    }
    &--active{
      color: #1FA4FC;
    }
  }

  &__title{
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}
</style>
