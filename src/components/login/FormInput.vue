<template>
  <el-row :gutter="24" class="form" v-loading="isLogin">
    <el-col :span="10" :offset="7">
      <h2 class="text-center">LOG IN</h2>
      <el-form ref="form" :rules="rules" :model="form" >
        <el-form-item label="Email" prop="email" >
          <el-input type="email" autocomplete autofocus v-model="form.email" ></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password" >
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('form')">
            Sign in
          </el-button>
          <router-link to="/register">
            <el-button>Create New Account</el-button>
          </router-link>
        </el-form-item>
        <router-link to="/reset"> Forgot Password</router-link>
      </el-form>
    </el-col>
  </el-row>
</template>
  
<script>
import axios from "axios";
export default {
  name: "FormInput",
  data() {
    return {
      form: {
        email: "1@gmail.com",
        password: "123456"
      },
      isLogin: false,
      rules: {
        email: [
          { required: true, message: "Name is required", trigger: "blur" }
          // {min: 5, max: 18, message: 'Name must be least 5 letters', trigger: 'blur'}
        ],
        password: [
          { required: true, message: "Password is required", trigger: "blur" }
          // {min: 8, max: 20, message: 'Password not strong yet', trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    async onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.isLogin = true;
          let user = { email: this.form.email, password: this.form.password };
          axios
            .post("auth/login", user)
            .then(res => {
              this.isLogin = false;
              if (res.data.status == 1) {
                console.log(res);
                localStorage.myToken = res.data.token;
                localStorage.email = this.form.email;
                localStorage.password = this.form.password;
                localStorage.name = res.data.user.name;
                this.open("success", "Login Sucess", 2000);
                this.$router.replace({ name: "home" });
              } else this.open("error", "Login Failed", 3500);
            })
            .catch(err => {
              alert("err: " + err);
            });
        } else {
          alert("error submit!!");
          return false;
        }
      });
    },
    open(typeNotify, message, duration) {
      const h = this.$createElement;
      this.$message({
        title: typeNotify,
        type: typeNotify,
        message: h("i", { style: "color: teal" }, message),
        duration: duration
      });
    }
  }
};
</script>
<style>
.form {
  position: absolute !important;
  top: 25%;
  width: 100%;
  overflow: hidden;
}
.text-center {
  text-align: center;
}
a {
  text-decoration: none;
}
button.el-button.el-button--default {
  margin-left: 10px;
}
</style>
