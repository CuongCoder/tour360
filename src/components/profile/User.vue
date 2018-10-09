<template>
  <div>
    <MainNav/>
    <!-- <InfoUser/> -->
    <InfoNav/>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import MainNav from "../Navbar/MainNav";
import InfoUser from "../Navbar/InfoUser";
import InfoNav from "../Navbar/InfoNav";
export default {
  name: "User",
  components: {
    MainNav,
    InfoUser,
    InfoNav
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
