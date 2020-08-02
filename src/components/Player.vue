<template>
  <div id="player"></div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>

<style lang="less">
#player {
  height: @playerHeight;
  background-color: @playerBgc;
  border-top: @playerBorderSize solid @playerBorderColor;
}
</style>
