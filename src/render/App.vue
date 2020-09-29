<template>
  <div id="app">
    <Topbar />
    <router-view />
    <Player />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Topbar from '@/components/Topbar.vue'
import Player from '@/components/Player.vue'

@Component({
  name: 'App',
  components: {
    Topbar,
    Player
  }
})
export default class App extends Vue {
}
</script>

<style lang="less">
#app {
  -webkit-user-select: none;
}
</style>
