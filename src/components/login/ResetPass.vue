<template>
  <el-row :gutter="20" class="form form__resetpass" v-loading="isLoadPassword"> 
    <el-col :span="8" :offset="8">
      <h1 class="text-center">RESET PASSWORD FORM PAGE</h1>
      <el-form ref="ruleForm" :rules="rules" :model="ruleForm" >
        <el-form-item label="Email" prop="email">
          <el-input type="email" v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="Confirm Password" prop="re_password">
          <el-input type="password" v-model="ruleForm.re_password"></el-input>
        </el-form-item>
        <el-form-item label="Code" prop="code">
          <el-input type="text" v-model="ruleForm.code"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('ruleForm')">
            Submit
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
    name: 'ResetPass',
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
          password: '',
          re_password: '',
          code: ''
        },
        isLoadPassword: false,
        rules: {
          code: [
            {required: true, message: 'Code is required', trigger: 'blur'}
          ],
          email: [
            {required: true, message: 'Email is required', trigger: 'blur'},
            {type: 'email', message: 'Email is not valid', trigger: 'blur'}
          ],
          password: [
            {validator: check_Pass},
            {min: 6, max: 20, required: true, message: 'Password is lease 6 letters', trigger: 'blur'}
          ],
          re_password: [
            {validator: check_Repass},
            {required: true}
          ]
        }
      }
    },
    methods: {
      onSubmit(formName) {
        this.isLoadPassword = true;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let payload = {
              code: this.ruleForm.code,
              email: this.ruleForm.email,
              password: this.ruleForm.password
            }
            axios.post('/auth/reset-password', payload)
              .then(res => {
                if(res.data.status == 0) {
                  this.open('error', res.data.errors.message.other[0], 2000);
                } else {
                  this.open('success', 'Reset password success!!', 2000);
                  this.$router.replace({name: 'login'});
                }
                this.isLoadPassword = false;
              })
              .catch(err => {
                this.open('error', err, 2000);
                this.open('error', 'Reset Password Fail!!', 2500);
                this.isLoadPassword = false;
              })
          } else {
            this.isLoadPassword = false;
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

<style scoped>
  .form__resetpass {
    top: 10%;
  }
</style>
