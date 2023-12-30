<template>
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
  <div class="icons">
    <div class="icons__item">
      <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png">
      <p class="icons__item__desc">超市便利</p>
    </div>
    <div class="icons__item">
      <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/菜市场.png">
      <p class="icons__item__desc">菜市场</p>
    </div>
    <div class="icons__item">
      <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/水果店.png">
      <p class="icons__item__desc">水果店</p>
    </div>
    <div class="icons__item">
      <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/鲜花.png">
      <p class="icons__item__desc">鲜花绿植</p>
    </div>
    <div class="icons__item">
      <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/医药健康.png">
      <p class="icons__item__desc">医药健康</p>
    </div>
    <div class="icons__item">
      <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/家居.png">
      <p class="icons__item__desc">家局时尚</p>
    </div>
    <div class="icons__item">
      <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/蛋糕.png">
      <p class="icons__item__desc">烘培蛋糕</p>
    </div>
    <div class="icons__item">
      <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/签到.png">
      <p class="icons__item__desc">签到</p>
    </div>
    <div class="icons__item">
      <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/大牌免运.png">
      <p class="icons__item__desc">大牌免运</p>
    </div>
    <div class="icons__item">
      <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/红包.png">
      <p class="icons__item__desc">红包套餐</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart'
}
</script>

<style lang="scss">
@import '../../style/variables.scss';
@import '../../style/mixins.scss';

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
.icons{
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;

  &__item{
    width: 20%;
    &__img{
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &__desc{
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap{
  margin: 0 -.18rem;
  height: .1rem;
  background: $content-bgColor;
}
</style>
