<template>
  <a @click.prevent="push" href="#">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    push (): void {
      this.$store.commit('pushHistory', this.to)
      this.$router.push({ name: this.to })
    }
  }
})
</script>
