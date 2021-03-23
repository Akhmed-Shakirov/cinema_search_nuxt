<template>
  <div class="container"><br>
    <!-- <v-filter /><br> -->
    <!-- <v-search /><br> -->
    <v-catalog /><br>
  </div>
</template>

<script>
/* import vFilter from '../components/movies/v-filter' */
/* import vSearch from '../components/movies/v-search' */
import vCatalog from '../components/movies/v-catalog'


export default {
  components: {
    /* vFilter, *//*  vSearch, */ vCatalog
  },
  layout: 'navbar'
}
</script>

<style lang="scss">
body {
  background: $bg;
}
</style>