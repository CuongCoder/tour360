<template>
  <el-row :gutter="20" class="form profile" v-loading="isLoadUpdate"> 
    <el-col :span="8" :offset="8">
      <div class="profile-user">
        <div class="profile-avatar">
          <img :src="previewImage" class="avatar" />
        </div>
      </div>
      <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="120px">
        <el-form-item label="User name" prop="name">
          <el-input autofocus type="text" disabled v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input type="email" v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="Address">
          <el-input type="text" v-model="ruleForm.address"></el-input>
        </el-form-item>
        <el-form-item label="Phone" prop="phone">
          <el-input type="number" v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="Company" >
          <el-input type="text" v-model="ruleForm.company"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('ruleForm')">
            Update
          </el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  import {mapActions} from "vuex";
  import axios from "axios";
  export default {
    name: 'Profile',
    data() {
      return {
        isLoadUpdate: false,
        previewImage: 'http://360tovisit.starfruit.com.vn/uploads/user/1/1538021210908-vtourskin_hotspot.png',
        ruleForm: {
          name: '',
          email: '',
          address: '',
          company: '',
          phone: ''
        },
        rules: {
          email: [
            {required: true, message: 'Email is required', trigger: 'blur'}
            // {min: 5, max: 18, message: 'Name must be least 5 letters', trigger: 'blur'}
          ],
          name: [
            {required: true, message: 'Name is required', trigger: 'blur'},
            // {min: 8, max: 20, message: 'Password not strong yet', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: 'Phone is required', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      ...mapActions([
        'UPDATE_USER'
      ]),
      onSubmit(formName) {
        this.isLoadUpdate = true;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let payload = {
              name: this.ruleForm.name,
              email: this.ruleForm.email,
              address: this.ruleForm.address,
              company_name: this.ruleForm.company,
              phone: this.ruleForm.phone
            }
            let config = {
              headers: { 'Authorization': "bearer " + localStorage.myToken }
            };
            axios.post('/profile', payload, config)  
              .then(data => {
                this.isLoadUpdate = false;
                if(data.data.status === 1) {
                  
                  this.notify('success', 'Update Success!!', 2000);
                } else this.notify('error', 'Update Fail!!', 3500);
              })
              .catch(err => {
                alert(err); 
                this.isLoadUpdate = false; 
              });
          } else {
            this.isLoadUpdate = false;
            console.log('error submit!!');
            return false;
          }
        });
      },
      uploadImage(e){
          const image = e.target.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(image);
          reader.onload = e =>{
              this.previewImage = e.target.result;
              console.log(this.previewImage);
          };
      },
      notify(typeNotify, message, duration) {
        const h = this.$createElement;
        this.$notify({
          title: typeNotify,
          type: typeNotify,
          message: h('i', { style: 'color: teal' }, message),
          duration: duration
        });
      }
    },
    mounted() {
      this.isLoadUpdate = true;
      let user = {email: localStorage.email, password: localStorage.password}
      axios.post('auth/login', user)
        .then(data => {
          this.isLoadUpdate = false;
          this.ruleForm.name = data.data.user.name;
          this.ruleForm.email = data.data.user.email;
          this.ruleForm.address = data.data.user.address;
          this.ruleForm.company = data.data.user.company_name;
          this.ruleForm.phone =  data.data.user.phone;
        })
        .catch(err => {
          alert('err: ' + err);
          this.isLoadUpdate = false;
        });
    }
  }
</script>
<style>

.profile {
  margin-top: 50px;
}

.profile-user {
  padding-bottom: 30px;
  margin-left: 30px;
  border: 1px solid black;
  width: 70px;
  height: 70px;
}
.profile-avatar {
  width: 100%;
  height: 100%;
  padding: 0;
}
.avatar {
  max-width: 100%;
  max-height: 100%;
}
</style>
