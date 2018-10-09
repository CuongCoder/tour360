<template>
  <div id="app">
    <div>
      <transition name="tray">
        <router-view ></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  methods: {}
};
</script>

<style>
  
  @font-face {
    font-family: myFirstFont;
    src: url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  }
  html,
  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-weight: bold;
    font-family: myFirstFont;
  }

  #app {
    width: 100%;
    height: 100%;
  }

  .tray-enter,
  .tray-leave-to {
    opacity: 0;
    display: none;
  }

  .tray-leave,
  .tray-enter-to {
    opacity: 1;
  }

  .tray-enter-active,
  .tray-leave-active {
    transition: opacity 300ms;
  }
</style>
