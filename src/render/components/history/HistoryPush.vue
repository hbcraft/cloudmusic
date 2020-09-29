<template>
  <a @click.prevent="push" href="#">
    <slot></slot>
  </a>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  name: 'HistoryPush'
})
export default class HistoryPush extends Vue {
  @Prop(String) to!: string
  push (): void {
    this.$store.commit('pushHistory', this.to)
    this.$router.push({ name: this.to })
  }
}
</script>
