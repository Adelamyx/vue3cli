<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  width: 750px;
  font-size: 50px;
  // height: 100%;
  background: #f5f5f5;
  margin: 0 auto;

}
</style>
