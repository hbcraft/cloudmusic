<template>
  <a @click.prevent="back" href="#">
    <slot></slot>
  </a>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'HistoryBack'
})
export default class HistoryBack extends Vue {
  back (): void {
    this.$store.commit('backHistory')
    this.$router.back()
  }
}
</script>
