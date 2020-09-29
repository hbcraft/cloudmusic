<template>
  <div id="player"></div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'Player'
})
export default class Player extends Vue { }
</script>

<style lang="less">
#player {
  height: @playerHeight;
  background-color: @playerBgc;
  border-top: @playerBorderSize solid @playerBorderColor;
}
</style>
