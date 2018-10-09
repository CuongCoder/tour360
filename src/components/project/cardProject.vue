<template>
  <el-col class="card-project" :span="8" >
    <el-card shadow="hover" :body-style="{ padding: '0px' }">
      <img src="https://i1.wp.com/wp.laravel-news.com/wp-content/uploads/2018/01/vue-spa-with-laravel.png?resize=2200%2C1125" class="image">
      <div style="padding: 14px;">
        <span>{{name}}</span>
        <div class="bottom clearfix">
          <time class="time">{{time}}</time>
          <el-dropdown trigger="hover" class="setting-project">
            <el-button type="primary">
              <i class="fas fa-cog"></i>
              <span>Setting</span>
            </el-button>
            <el-dropdown-menu slot="dropdown" class="menu-setting-project">
              <el-button class="btn-setting-project" v-on:click="viewProject">
                <i class="fas fa-eye"></i>
                <span>View</span>
              </el-button>
              <el-button class="btn-setting-project" v-on:click="editProject">
                <i class="fas fa-edit"></i>
                <span>Edit</span>
              </el-button>
              <el-button class="btn-setting-project">
                <i class="fas fa-trash-alt"></i>
                <span>Delete</span>
              </el-button>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-card>
  </el-col>
</template>

<script>
export default {
  name: "Card",
  props: {
    name: String,
    time: String
  },
  methods: {
    viewProject() {
      alert("View Project");
    },
    editProject() {
      alert("Edit Project");
    }
  }
};
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.card-project {
  margin-top: 5%;
  padding-left: 5%;
  padding-right: 5%;
}

.button {
  padding: 10px;
  font-size: 20px;
  transition: 0.5s;
}

.button.el-button.button.el-button--button:hover i.fas.fa-cog {
  transform: rotate(180deg);
  transition: 0.5s;
}

time.time {
  position: absolute;
  left: 6.5%;
  margin-top: 20px;
}

.menu-setting-project {
  padding: 0;
  width: 200px;
  padding-top: 10px;
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
}

.setting-project {
  float: right;
}

.btn-setting-project {
  width: 90%;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  float: left;
  color: #bd8080;
  transition: 0.4s;
}

.btn-setting-project:hover {
  transform: scale(1.1);
  color: black;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  transition: 0.4s;
}

span {
  padding-left: 10px;
}
</style>