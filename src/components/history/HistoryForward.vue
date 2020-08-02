<template>
  <a @click.prevent="forward" href="#">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    forward (): void {
      this.$store.commit('forwardHistory')
      this.$router.forward()
    }
  }
})
</script>
