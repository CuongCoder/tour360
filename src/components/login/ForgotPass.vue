<template>
  <el-row :gutter="20" class="form">
    <el-col :span="8" :offset="8" >
      <h1 class="text-center">RESET PASSWORD</h1>
      <el-form 
        :model="inputEmail" 
        :rules="rules" 
        ref="inputEmail" 
        v-loading="isLoadEmail"
      >
        <el-form-item prop="email" label="Email">
          <el-input autofocus v-model="inputEmail.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('inputEmail')">
            Send Code
          </el-button>
          <router-link to="/login"><el-button>Back</el-button></router-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
import axios from "axios";
export default {
  name: 'ForgotPass',
  data() {
    return {
      isLoadEmail: false,
      inputEmail: {
        email: ''
      },
      rules: {
        email: [
          { 
            required: true, 
            message: 'Please input email address', 
            trigger: 'blur' 
          },
          { 
            type: 'email', 
            message: 'Please input correct email address', 
            trigger: ['blur', 'change']
          }
        ]
      }
    }
  },
  methods: {
    open(typeNotify, message, duration) {
      const h = this.$createElement;
      this.$message({
        title: typeNotify,
        type: typeNotify,
        message: h('i', { style: 'color: teal' }, message),
        duration: duration
      });
    },
    submitForm(formName) {
      this.isLoadEmail = true;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let payload = {
            email : this.inputEmail.email
          }
          axios.post('/auth/forget-password',payload )
            .then(res => {
              if(res.data.status === 0) {
                this.open('error', 'Email not exist', 2000);
              } else {
                this.$router.replace({name: 'reset-pass'});
                this.open('success', 'Please check email..!!!', 2000);
              }
            })
            .catch(err => {
              this.open('error', err, 2000);
            });
          setTimeout(() => {
            this.isLoadEmail = false;
          }, 1000); 
        } else {
          this.isLoadEmail = false;
          this.open('error', 'error submit', 2000);
          return false;
        }
      });
    }
  }
}
</script>
<style>

</style>
