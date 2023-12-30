<template>
  <div class="wrapper">
    <StaticPartView />
    <NearbyView />
  </div>
  <DockerView />
</template>

<script>
import StaticPartView from './StaticPartView.vue'
import NearbyView from './NearbyView.vue'
import DockerView from './DockerView.vue'
export default {
  name: 'HomeView',
  components: {
    StaticPartView,
    NearbyView,
    DockerView
  }
}
</script>

<style lang="scss">
.wrapper{
  //纵向溢出处理
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem .2rem .18rem;
}
</style>
