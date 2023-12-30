<template>
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
</template>

<script>
export default {
  name: 'DockerView'
}
</script>

<style lang="scss">
@import '../../style/variables.scss';
.docker{
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: .01rem solid $content-bgColor;
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
