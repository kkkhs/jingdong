<template>
  <div class="wrapper">
    <div class="title">购物车</div>
  </div>
  <Docker :currentIndex='1'/>
</template>

<script>
import Docker from '@/components/Docker.vue'
export default ({
  name: 'CartList',
  components: { Docker }
})
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
  background: #eee;
}
.title{
  line-height: .44rem;
  background: $active-color;
  font-size: .16rem;
  color: $content-fontcolor;
  text-align: center;
}
</style>
