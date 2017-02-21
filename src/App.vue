<template>
  <div class="wrapper">
    <v-header></v-header>
    <el-row class="tac">
      <el-col :span="20" class="app-main">
        <div class="app-content">
          <router-view></router-view>
        </div>
      </el-col>
      <el-col :span="4" class="app-sidebar">
        <v-sidebar></v-sidebar>
      </el-col>
    </el-row>
  </div>
</template>

<style>
  .app-sidebar {
    width: 230px;
  }
  .app-main {
    position: absolute;
    padding-left: 230px;
    width: 100%;
  }
  .app-content {
    padding: 20px
  }
</style>

<script>
  import VHeader from './components/header'
  import VSidebar from './components/sidebar'

  export default {
    components: {
      VHeader,
      VSidebar
    }
  }
</script>
