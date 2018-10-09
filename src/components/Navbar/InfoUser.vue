<template>
  <el-row :gutter="24" class="bgNav">
    <el-col :span="22" :offset="2">
      <div class="logo logo-user">
        <img src="https://www.telegraph.co.uk/content/dam/technology/2016/05/11/new-instagram-logo_1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=1400" alt="instagram">
      </div>
      <div class="name">
        <h1>{{userName}}</h1>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'InfoUser',
  data() {
    return {
      userName: localStorage.name
    }
  }
}
</script>
<style>
  .logo {
    display: inline-block;
  }

  .logo-user {
    margin-left: 20px;
  }

  .logo img {
    width: 100px;
    height: 50px;
    border-radius: 50px;
    padding: 0;
    margin: 0;
    margin-right: 45px !important;
  }
  .name {
    display: inline-block;
    color: white;
    position: absolute;
  }
  .name h1 {
    padding-bottom: 10px;
    padding-top: 10px;
    margin-left: 30px;
    margin: 0;
  }
  .bgNav {
    margin: 0 !important;
  }
</style>

