<template>
  <el-row class="list-project" v-show="$store.state.home.listProject.length != 0" >
    <Card type="flex" v-loading="$store.state.home.isLoadProject"
      v-for="(project, index) in $store.state.home.listProject"  
      :key="index"
      :name='$store.state.home.listProject[index].name' 
      :time="$store.state.home.listProject[index].created_at" >
    </Card>
  </el-row>
</template>
<script>
import { mapActions } from "vuex";
import Card from "./cardProject.vue";
export default {
  name: "Project",
  data() {
    return {
      listProject: this.$store.state.home.listProject
    };
  },

  methods: {
    ...mapActions(["GET_USER"])
  },
  components: {
    Card
  }
};
</script>
<style>
.list-project {
  margin-left: 5%;
  margin-right: 5%;
}
</style>
