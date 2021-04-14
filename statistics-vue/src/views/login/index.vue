<template>
  <div class="login-container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item class="style-name" label="" prop="name">
        <i class="el-icon-s-custom"></i>
        <el-input class="el-input" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item class="style-name" label="" prop="password">
        <i class="el-icon-key"></i>
        <el-input class="el-input" type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="submit-button" type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" },
        ]
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm)
          this.$router.push('/')
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
};
</script>
<style lang="less" scoped>
.demo-ruleForm{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 500px;
  height: 300px;
  margin: auto;
}
.submit-button{
  width: 100%;
}

.style-name {
  position: relative;
}

.style-name i{
  position: absolute;
  left: 5px;
  top: 0;
  bottom: 0;
  margin: auto;
  line-height: 40px;
  font-size: 20px;
  z-index: 22;
}

.style-name .el-input input{
  padding-left: 32px;
}

.style-name .el-form-item__content {
  margin-left: 0;
}
</style>