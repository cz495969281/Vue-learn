import { extend, localize } from 'vee-validate';
import { required, email, length, min, max } from 'vee-validate/dist/rules';
import zh from 'vee-validate/dist/locale/zh_CN';
extend('required', required);
extend('email', email);
extend('length', length);
extend('min', min);
extend('max', max);
localize('zh_CN', {
  // 使用扩展运算符，扩展中文包
  messages: {
    ...zh.messages,
    // 全局定义message
    required: '请输入{_field_}'
  },
  // 与validation-provider中的name对应
  // key为name, value为对应的中文field名称
  names: {
    email: '邮箱',
    password: '密码',
    name: '昵称',
    username: '账号',
    code: '验证码'
  },
  // 针对不同的name，定义不同的message消息
  fields: {
    email: {
      email: '请输入正确的{_field_}',
      required: '请输入{_field_}'
    },
    password: {
      min: (field, { length }) => {
        return `请在${field}输入至少${length}个字符`
      }
    },
    name: {
      min: (field, { length }) => {
        return `请在${field}输入至少${length}个字符`
      }
    }
  }
})
