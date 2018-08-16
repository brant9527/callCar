<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
  }
}
</script>

<style lang="scss">
*{
  text-decoration:none
}
body:before {

width: 100%;
height: 100%;
content: ' ';
position: fixed;
z-index: -1;
top: 0;
right: 0;
bottom: 0;
left: 0;
background: #fff;
}
</style>
