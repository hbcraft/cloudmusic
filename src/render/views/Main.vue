<template>
  <div id="main">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>

<style lang="less">
#main {
  height: calc(100% - @topbarHeight - @playerHeight - @playerBorderSize);
}
</style>
