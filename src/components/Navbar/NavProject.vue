<template>
  <el-row :gutter="24" class="bgNav Nav">

    <el-col :span="2.5" :offset="2">
      <el-menu class="el-menu-demo" mode="horizontal" background-color="#1f2532">
        <el-menu-item index="3">
          <i class="fas fa-project-diagram"></i>
          <span>All</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="fas fa-filter"></i>
          <span>Filter</span>
        </el-menu-item>
      </el-menu>
    </el-col>

    <el-col :span="8">
      <div style="margin-top: 10px;">
        <el-input placeholder="Search Project Here..." v-model="searchProject" class="input-search" />
        <el-button class="btn-search">Search</el-button>
      </div>
    </el-col>

    <el-col :span="2" :offset="5">
      <el-tooltip class="item" effect="light" placement="right">
        <div slot="content">ADD NEW PROJECT</div>
        <el-button class="btn-add-project" @click="showAddProject" style="margin-top: 10px; cursor: pointer;">
          <i class="fas fa-plus icon-add-project"></i>
        </el-button>
      </el-tooltip>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "NavProject",
  data() {
    return {
      searchProject: ""
    };
  },
  methods: {
    showAddProject() {
      console.log("add Project");
    }
  },
  components: {}
};
</script>
<style scoped>
span {
  padding-left: 10px;
}
button.el-button.el-button--default {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: rgb(95, 192, 196);
  color: rgb(255, 255, 255);
  transition: 0.4s;
  font-weight: bold;
}
/*  */
.input-search {
  width: 97%;
  display: inline-block;
  margin: 0;
}
.btn-search {
  position: absolute;
  left: 52%;
  float: right;
  margin: 0 !important;
}
.btn-search:hover {
  transform: scale(1.1);
  transition: 0.4s;
  color: rgb(230, 230, 230);
}
/*  */
i.fas.fa-plus-circle {
  color: white;
}

.btn-add-project {
  float: right;
  position: absolute;
  top: 20%;
  left: 84%;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background-color: rgb(11, 247, 11) !important;
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
}

i.fas.fa-plus-circle.icon-add-project {
  font-size: 30px;
}

.btn-add-project {
  animation: shake 1.9s infinite cubic-bezier(0.36, 0.07, 0.19, 0.97);
  transition-delay: 0.5s;
  transform: translate3d(10deg, 10deg, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  25% {
    transform: translate3d(-1px, 0, 0);
    box-shadow: 0 0 10px 5px rgba(21, 165, 36, 0.6);
  }
  5%,
  15%,
  25% {
    transform: translate3d(2px, 2px, 0);
    box-shadow: 0 0 10px 5px rgba(1, 211, 200, 0.6);
  }
  20%,
  30% {
    transform: translate3d(-11px, 0, 0);
    box-shadow: 0 0 10px 5px rgba(189, 7, 7, 0.6);
  }
  35%,
  40% {
    transform: translate3d(20px, 7px, 0);
    box-shadow: 0 0 10px 5px rgba(4, 88, 231, 0.6);
  }
  40%,
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
