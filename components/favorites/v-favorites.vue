<template>
  <div class="favorites">
    <b-card
      no-body
      style="max-width: 15rem;"
      img-top
      v-for="movie in favorites"
      :key="movie.id"
    > 
      <template #header>
        {{movie.title}}
      </template>
        <nuxt-link :to="`/favorites/${movie.id}`">
        <b-card-img :src="movie.img" alt="Image" bottom></b-card-img>
      </nuxt-link>
      <b-card-footer>{{movie.age}}</b-card-footer>    
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      favorites: 'favorites/favorites'
    })
  }
}
</script>

<style lang="scss" scoped>
.favorites {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    background-color: transparent;
  }
  .card {
    text-align: center;
    margin: 10px;
    background: $bg;
    color: $text-f;
    border: 1px solid #fff;
  }
  .card-header {
    min-height: 73px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    height: 300px;
  }
}
</style>