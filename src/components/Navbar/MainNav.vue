<template>
  <el-row :gutter="24" class="bgNav Nav">
    <el-col :span="3" :offset="2">
      <div class="logo-page">
        <img src="../../assets/logo360tovisit.png" class = "logo"/>
      </div>
    </el-col>
    <el-col :span="17" >
      <el-menu class="el-menu-demo" mode="horizontal" background-color="#1f2532" text-color="#fff">
        <router-link to="/">
          <el-menu-item index="1">
            <i class="fas fa-home"></i>
            <span>Home</span> 
          </el-menu-item>
        </router-link>
        <router-link to="/mini">
          <el-menu-item index="2">
            <i class="fas fa-spa"></i>
            <span>Mini</span>
          </el-menu-item>
        </router-link>
        <router-link to="/people">
          <el-menu-item index="3">
            <i class="fas fa-user-circle"></i>
            <span>People</span>
          </el-menu-item>
        </router-link>
        <router-link to="/learn">
          <el-menu-item index="4">
            <i class="fas fa-graduation-cap"></i>
            <span>Learn</span>
          </el-menu-item>
        </router-link>
        <router-link to="/about">
          <el-menu-item index="5">
            <i class="fab fa-osi"></i>
            <span>About</span>
          </el-menu-item>
        </router-link>
        
        <el-submenu index="2" :offset="4" >
          <template slot="title"><i class="far fa-user">
            </i><span>{{userName}}</span>
          </template>
          <div class="text-center">
            <router-link to="/user/profile">
              <el-menu-item index="6-1">
                <i class="fas fa-user-circle"></i>
                <span>Profile</span>
              </el-menu-item>
            </router-link>
          </div>
          <div class="text-center">
            <el-menu-item index="6-2" @click="logout">
              <i class="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </el-menu-item>
          </div>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row> 
</template>
<script>
export default {
  name: 'MainNav',
  data() {
    return {
      userName: localStorage.name
    }
  },
  methods: {
    logout() {
      this.$confirm('Logout? Are you sure?', 'Logout', {
        distinguishCancelAndClose: true,
        confirmButtonText: 'Logout',
        cancelButtonText: 'Cancel'
      })
        .then(() => {
          this.$store.commit('logout');
          this.$router.replace({ name: "login" });
          this.$message({
            type: 'success',
            message: 'Logout completed'
          });
        })
        .catch(action => {});  
    }
  }
}
</script>
<style scoped>
  .logo-page {
    display: inline-block;
    height: 70px;
    width: 200px;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
  }

  .logo {
    width: 200px;
    height: 70px;
  }

  li.el-menu-item:hover {
    transform: scale(1.1);
    transition: .4s;
    color: white !important;
  }

  span {
    padding-left: 10px;
  }

</style>

<style>
  li.el-menu-item {
    padding-top: 2px;
    font-size: 18px;
    text-transform: uppercase;
    color: #bd8080 !important;
    display: inline-block;
    transition: .4s;
  }

  li.el-submenu {
    display: inline-block;
    font-size: 18px;
    text-transform: uppercase;
    color: #bd8080 !important;
  }
  .el-menu--horizontal>.el-submenu {
    float: right !important;
  }

  .Nav {
    width: 100%;
    margin: 0 !important;
  }
  .bgNav {
    background-color: #1f2532;
  }
  .el-menu.el-menu--horizontal {
    border: none !important;
  }
  


</style>
