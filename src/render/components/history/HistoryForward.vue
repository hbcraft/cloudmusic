<template>
  <a @click.prevent="forward" href="#">
    <slot></slot>
  </a>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'HistoryForward'
})
export default class HistoryForward extends Vue {
  forward (): void {
    this.$store.commit('forwardHistory')
    this.$router.forward()
  }
}
</script>
