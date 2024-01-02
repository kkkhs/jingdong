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
    <div
      class="icons__item"
      v-for="(icon,index) in iconsList"
      :key="index"
    >
      <img class="icons__item__img" :src="`http://www.dell-lee.com/imgs/vue3/${icon.imgName}.png`" />
      <p class="icons__item__desc">{{ icon.desc }}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [
      { imgName: '超市', desc: '超市便利' },
      { imgName: '菜市场', desc: '菜市场' },
      { imgName: '水果店', desc: '水果店' },
      { imgName: '鲜花', desc: '鲜花绿植' },
      { imgName: '医药健康', desc: '医药健康' },
      { imgName: '家居', desc: '家居时尚' },
      { imgName: '蛋糕', desc: '烘培蛋糕' },
      { imgName: '签到', desc: '签到' },
      { imgName: '大牌免运', desc: '大牌免运' },
      { imgName: '红包', desc: '红包套餐' }
    ]
    return {
      iconsList
    }
  }
}
</script>

<style lang="scss" scoped>
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
  background: $search-bgColor;
  color: $search-fontColor;
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
    background:$search-bgColor;
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
