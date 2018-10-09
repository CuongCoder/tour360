<template>
  <el-row :gutter="20" class="form form__register" v-loading="isLoadRegister"> 
    <el-col :span="8" :offset="8">
      <h1 class="text-center">REGISTER FORM PAGE</h1>
      <el-form ref="ruleForm" :rules="rules" :model="ruleForm" >
        <el-form-item label="Username" prop="name">
          <el-input autofocus type="text" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input autofocus type="email" v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="Confirm Password" prop="re_password">
          <el-input type="password" v-model="ruleForm.re_password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('ruleForm')">
            Create
          </el-button>
          <router-link to="/login"><el-button>Cancel</el-button></router-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  import axios from "axios";
  export default {
    name: 'RegisterForm',
    data() {
      var check_Pass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm.re_password !== '') {
            this.$refs.ruleForm.validateField('re_password');
          }
          callback();
        }
      };
      var check_Repass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          name: '',
          password: '',
          re_password: '',
          email: ''
        },
        isLoadRegister: false,
        rules: {
          name: [
            {required: true, message: 'Username is required', trigger: 'blur'}
          ],
          password: [
            {validator: check_Pass},
            {min: 6, max: 20, message: 'Password is lease 6 letters', trigger: 'blur'}
          ],
          re_password: [
            {validator: check_Repass}
          ],
          email: [
            {type: 'email', required: true, message: 'Email don\'t empty', trigger: 'change'}
          ]
        }
      }
    },
    methods: {
      onSubmit(formName) {
        this.isLoadRegister = true;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let payload = {
              name: this.ruleForm.name,
              email: this.ruleForm.email,
              password: this.ruleForm.password
            }
            axios.post('/auth/register', payload)
              .then(res => {
                console.log(res);
                if(res.data.status === 1) {
                  this.open('success', 'Register success!!', 2000);
                  this.ruleForm.name = '';
                  this.ruleForm.password = '';
                  this.ruleForm.re_password = '';
                  this.ruleForm.email = '';
                  setTimeout(() => {
                    this.isLoadRegister = false;
                  }, 1000);  
                  this.$router.replace({name: 'login'});
                } 
                else if(res.data.status == 0) {
                  this.open('error', res.data.errors.message, 2000);
                  this.open('error', 'Data is not valid!!', 2000);
                }
              })
              .catch(err => {
                this.open('error', err, 2000);
                this.open('error', 'Register Fail!!', 2500);
                this.isLoadRegister = false;
              })
          } else {
            this.isLoadRegister = false;
            this.open('error', 'error submit', 2000);
            return false;
          }
        });
      },
      open(typeNotify, message, duration) {
        const h = this.$createElement;
        this.$message({
          title: typeNotify,
          type: typeNotify,
          message: h('i', { style: 'color: teal' }, message),
          duration: duration
        });
      }
    }
  }
</script>

<style>
.form__register {
  /* height: 100%; */
  top: 0% !important;
}
</style>
