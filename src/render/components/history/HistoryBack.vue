<template>
  <a @click.prevent="back" href="#">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    back (): void {
      this.$store.commit('backHistory')
      this.$router.back()
    }
  }
})
</script>
