<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li><a href="reg.html">注册</a></li>
        </ul>
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
          <ValidationObserver ref="observe" v-slot="{ validate }">
            <div class="layui-tab-item layui-show">
              <div class="layui-form layui-form-pane">
                <form method="post">
                  <div class="layui-form-item">
                    <label class="layui-form-label">用户名</label>
                    <ValidationProvider name="email" rules="required|email" v-slot="{errors}">
                      <div class="layui-input-inline">
                        <input
                          type="text"
                          v-model="username"
                          name="username"
                          placeholder="请输入用户名"
                          autocomplete="off"
                          class="layui-input" />
                      </div>
                      <div class="layui-form-mid">
                        <span style="color: #c00">{{errors[0]}}</span>
                      </div>
                    </ValidationProvider>
                  </div>
                  <div class="layui-form-item">
                    <label class="layui-form-label">密码</label>
                    <ValidationProvider name="password" rules="required|min:6" v-slot="{errors}">
                      <div class="layui-input-inline">
                        <input
                          type="password"
                          v-model="password"
                          name="password"
                          placeholder="请输入密码"
                          autocomplete="off"
                          class="layui-input" />
                      </div>
                      <div class="layui-form-mid">
                        <span style="color: #c00">{{errors[0]}}</span>
                      </div>
                    </ValidationProvider>
                  </div>
                  <div class="layui-form-item">
                    <div class="layui-row">
                      <label class="layui-form-label">验证码</label>
                      <ValidationProvider name="code" ref="codefield" rules="required|length:4" v-slot="{errors}">
                        <div class="layui-input-inline">
                          <input
                            type="text"
                            name="code"
                            v-model="code"
                            placeholder="请输入验证码"
                            autocomplete="off"
                            class="layui-input"
                          />
                        </div>
                        <div>
                          <span class="svg" style="color: #c00;" @click="_getCode()" v-html="svg"></span>
                        </div>
                        <div class="layui-form-mid">
                          <span style="color: #c00">{{errors[0]}}</span>
                        </div>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <button class="layui-btn" type="button" @click="validate().then(submit)">立即登录</button>
                    <span style="padding-left:20px;">
                  <a href="forget.html">忘记密码？</a>
                </span>
                  </div>
                  <div class="layui-form-item fly-form-app">
                    <span>或者使用社交账号登入</span>
                    <a href="" onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-qq"
                       title="QQ登入"></a>
                    <a href="" onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-weibo"
                       title="微博登入"></a>
                  </div>
                </form>
              </div>
            </div>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { getCode, login } from '../api/login'
import uuid from 'uuid/v4'
export default {
  name: 'Login',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      username: '',
      password: '',
      code: '',
      svg: ''
    }
  },
  mounted () {
    window.vue = this
    let sid = '';
    if (localStorage.getItem('sid')) {
      sid = localStorage.getItem('sid')
    } else {
      sid = uuid();
      localStorage.setItem('sid', sid)
    }
    this.$store.commit('setSid', sid);
    this._getCode()
  },
  methods: {
    _getCode () {
      const sid = this.$store.state.sid;
      getCode(sid).then((res) => {
        // console.log('res', res)
        if (res.code === 200) {
          // console.log('res.data', res.data)
          this.svg = res.data
        }
      })
    },
    async submit () {
      const isValid = await this.$refs.observe.validate();
      if (!isValid) {
        return
      }
      login({
        username: this.username,
        password: this.password,
        code: this.code,
        sid: this.$store.state.sid
      }).then((res) => {
        if (res.code === 200) {
          this.username = '';
          this.password = '';
          this.code = ''
          requestAnimationFrame(() => {
            this.$refs.observe.reset()
          })
        } else if (res.code === 401) {
          console.log('401----', res)
          this.$refs.codefield.setErrors([res.msg])
        }
      }).catch((err) => {
        const data = err.response.data;
        if (data.code === 500) {
          this.$alert('用户名和密码校验失败')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .svg{
    position: relative;
    top: -4px;
  }
</style>
