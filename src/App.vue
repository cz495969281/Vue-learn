<template>
  <div id="app">
    <imooc-header></imooc-header>
    <router-view></router-view>
    <imooc-footer></imooc-footer>
  </div>
</template>
<script>
import Header from './components/Header';
import Footer from './components/Footer';
export default {
  name: 'app',
  components: {
    'imooc-header': Header,
    'imooc-footer': Footer
  }
}
</script>
<style lang="scss">
  /*scoped 在当前页面样式生效 */
  @import 'assets/layui/css/layui.css';
  @import 'assets/css/global.css';
  @import 'assets/layui/css/modules/layer/default/layer.css';
</style>
