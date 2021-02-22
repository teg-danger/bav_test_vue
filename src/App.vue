<template>
  <b-header></b-header>
  <router-view></router-view>
</template>
<script>
import BHeader from '@/components/Header'
export default {
  data () {
    return {
      open: false
    }
  },
  components: {
    BHeader
  }
}
</script>
<style>
#nav a.router-link-exact-active {
  border-color: rgba(129, 140, 248, var(--tw-border-opacity));
}
</style>
