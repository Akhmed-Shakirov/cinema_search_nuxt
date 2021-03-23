<template>
  <div class="container"><br>
    <v-movie-list />
  </div>
</template>

<script>
import vMovieList from '../components/movies/v-movie-list'
 
export default {
  components: {
    vMovieList
  },
  layout: 'navbar'
}
</script>
