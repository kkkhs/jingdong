<template>
  <div class="wrapper">
    <div class="header">
      <div class="header__info">
        <img class="header__info__avatar" src="@/assets/logo.png">
        <div class="header__info__name">Dell</div>
        <div class="header__info__id">ID:0000001</div>
      </div>
    </div>
    <div class="list">
      <div class="list__item">
        <div class="list__item__icon iconfont">&#xe62c;</div>
        <div class="list__item__text">我的地址</div>
        <div class="list__item__into iconfont">&#xe608;</div>
      </div>
    </div>
    <div class="quitBtn">退出登录</div>
  </div>
  <Docker :currentIndex="3"/>
</template>

<script>
import Docker from '@/components/Docker.vue'

export default {
  name: 'Person',
  components: { Docker },
  setup() {
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
.header{
  height: 1.5rem;
  background-image: linear-gradient(239deg,#3a6ff3,#50c7fb);
  padding-top: .4rem;
  &__info{
    position: relative;
    margin: .3rem .18rem 0 .18rem;
    padding-top: .46rem;
    height: .66rem;
    background: #fff;
    border-radius: .08rem;
    &__avatar{
      position: absolute;
      left: 40%;
      top: -30%;
      height: .6rem;
      width: .6rem;
      padding: .1rem;
      background: #FFF;
      border-radius: .2rem;
    }
    &__name{
      font-size: .24rem;
      color: #262628;
      text-align: center;
      line-height: .36rem;
    }
    &__id{
      margin-top: .04rem;
      font-size: .14rem;
      color: #c1c0c9;
      text-align: center;
    }
  }
}
.list{
  margin: .16rem .18rem 0 .18rem;
  background: #fff;
  box-shadow: 0 0.08rem 0.16rem 0 rgba(0,0,0,.08);
  border-radius: .08rem;
  &__item{
    display: flex;
    padding: .2rem;
    font-size: .14rem;
    line-height: .22rem;
    &__icon{
      color: $btn-bgColor;
      font-size: .25rem;
      height: .22rem;
      margin-right:.2rem;
    }
    &__text{
      flex: 1;
    }
    &__into{
      margin-right: .08rem;
      text-align: right;
      color: #c2c4ca;
      transform: rotate(180deg);
    }
  }
}
.quitBtn{
  padding: .15rem .3rem;
  margin: .2rem auto;
  background: $btn-bgColor;
  width: .8rem;
  font-size: .16rem;
  color: #FFF;
  text-align: center;
  border-radius: .3rem;
}
</style>
