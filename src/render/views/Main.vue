<template>
  <div id="main">
    <router-view />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'Main'
})
export default class Main extends Vue { }
</script>

<style lang="less">
#main {
  height: calc(100% - @topbarHeight - @playerHeight - @playerBorderSize);
}
</style>
