<template>
  <div class="container"><br>
    <v-catalog /><br>
  </div>
</template>

<script>
import vCatalog from '../components/movies/v-catalog'


export default {
  components: {
    vCatalog
  },
  layout: 'navbar'
}
</script>

<style lang="scss">
body {
  background: $bg;
}
</style>