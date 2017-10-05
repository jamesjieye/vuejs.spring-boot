<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  width: 735px;
  margin: 120px auto;
}

p.description {
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}
</style>
