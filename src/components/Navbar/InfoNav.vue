<template>
  <el-row :gutter="24" class="bgNav Nav">
    <el-col :span="20" :offset="2">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#1f2532"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <router-link to="/user/profile">
          <el-menu-item index="1">
            <i class="fas fa-user"></i>
            <span>Profile</span>
          </el-menu-item>
        </router-link>
        <router-link to="/user/password">
          <el-menu-item index="2">
            <i class="fas fa-key"></i>
            <span>Password</span>
          </el-menu-item>
        </router-link>
        <router-link to="/user/billing">
          <el-menu-item index="3">
            <i class="far fa-money-bill-alt"></i>
            <span>Billing</span>
          </el-menu-item>
        </router-link> 
        <router-link to="/user/email">
          <el-menu-item index="4">
            <i class="fas fa-envelope"></i>
            <span>Email Notification</span>
          </el-menu-item>
        </router-link>
        <router-link to="/user/activity">
          <el-menu-item index="5">
            <i class="fas fa-chart-line"></i>
            <span>Activity</span> 
          </el-menu-item>
        </router-link>
        <router-link to="/user/sync">
          <el-menu-item index="6">
            <i class="fas fa-sync"></i>
            <span>Sync</span>
          </el-menu-item>
        </router-link>
        <el-menu-item index="7" class="email">
          <i class="fas fa-envelope"></i>
          <span> {{email}} </span>
        </el-menu-item>
      </el-menu> 
    </el-col>
  </el-row> 
</template>

<script>
  export default {
    name: 'InfoNav',
    data() {
      return {
        email: localStorage.email
      }
    }
  }
</script>

<style scoped>
  li.el-menu-item {
    color: #898f9a;
    font-weight: 500;
    font-size: 15px;
    padding: 0 32px;
    display: inline-block;
  }
  .email li.el-menu-item {
    overflow: hidden;
    text-transform: lowercase !important;
  }
  li.el-menu-item:hover {
    color: white;
    transition: 0.4s;
  }
  .email {
    float: right !important;
    text-transform: lowercase; 
  }
  span {
    padding-left: 10px;
  }
</style>
