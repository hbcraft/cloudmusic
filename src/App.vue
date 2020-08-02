<template>
  <div id="app">
    <Topbar />
    <router-view />
    <Player />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Topbar from '@/components/Topbar.vue'
import Player from '@/components/Player.vue'
export default Vue.extend({
  components: { Topbar, Player }
})
</script>

<style lang="less">
</style>
