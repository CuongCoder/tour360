<template>
  <div>
    <MainNav/>
    <NavProject/>
    <Project/>
  </div>
</template>
<script>
import MainNav from "../Navbar/MainNav";
import NavProject from "../Navbar/NavProject";
import Project from "../project/Project";
import { mapMutations } from "vuex";
export default {
  name: "Home",
  components: {
    MainNav,
    Project,
    NavProject
  },
  mounted() {
    this.$store.dispatch("GET_USER");
  }
};
</script>
