<template>
  <div class="container"><br>
    <v-favorites v-if="favorites.length" />
    <h1 v-else>Is not movies</h1>
  </div>
</template>

<script>
import vFavorites from '../../components/favorites/v-favorites'
import { mapGetters } from 'vuex'
 
export default {
  components: {
    vFavorites
  },
  layout: 'navbar',
  computed: {
    ...mapGetters({
      favorites: 'favorites/favorites'
    })
  }
}
</script>

<style lang="scss">
h1 {
  text-align: center;
  color: $text-f;
}
</style>