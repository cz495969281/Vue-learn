<template>
  <div v-show="isShow">
      <div class="alert">
        <div class="flex">{{ msg }}</div>
        <div class="btnCommon success" @click="close()">确定</div>
      </div>
      <div class="mask" @click="closeMask()"></div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    msg: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.isShow = false
    },
    closeMask () {
      this.close()
    }
  }
}
</script>

<style lang="scss" scoped>
  $btn-main: #009688;
  $btn-dark: darken($btn-main, 5%);
  .alert{
    width: 300px;
    height: 150px;
    background: #fff;
    position: fixed;
    border-radius: 6px;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -75px;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.5);
    padding: 20px 10px;
    z-index: 3000;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
  .flex{
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
  .btnCommon{
    width: 105px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    border-radius: 6px;
    &.success{
      background: $btn-main;
      color: #ffffff;
      &:hover{
        background: $btn-dark;
      }
    }
  }
  .mask{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    left: 0;
    top: 0;
    overflow: hidden;
    z-index: 2000;
  }
</style>
