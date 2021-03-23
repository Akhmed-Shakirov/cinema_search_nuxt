<template>
  <div class="container"><br>
    <div class="movie-list">
      <b-row no-gutters>
        <b-col md="3">
          <b-card-img :src="movie.img" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="9">
          <b-card-body :title="movie.title">
            <b-card-text>
              <div class="row">
                <div class="col-md-6 row">
                  <div class="col-md-3">
                    <small class="text-muted">Рейтинг:</small>
                  </div>
                  <div class="col-md-9">
                    <span v-for="rating in movie.rating" :key="rating.id">
                      <span v-if="rating.id == 1">{{rating.name}}</span>
                      <span v-if="rating.id == 2">{{rating.name}}</span>
                      <span v-if="rating.id == 3">{{rating.name}}</span>
                    </span>
                  </div><br>
                  <div class="col-md-3">
                    <small class="text-muted">Название:</small>
                  </div>
                  <div class="col-md-9">
                    {{movie.title}}
                  </div><br>
                  <div class="col-md-3">
                    <small class="text-muted">Год:</small>
                  </div>
                  <div class="col-md-9">
                    {{movie.age}}
                  </div><br>
                  <div class="col-md-3">
                    <small class="text-muted">Жанры:</small>
                  </div>
                  <div class="col-md-9">
                    {{movie.genres}}
                  </div><br>
                  <div class="col-md-3">
                    <small class="text-muted">Страна:</small>
                  </div>
                  <div class="col-md-9">
                    {{movie.country}}
                  </div><br>
                  <div class="col-md-3">
                    <small class="text-muted">Режиссёр:</small>
                  </div>
                  <div class="col-md-9">
                    {{movie.producer}}
                  </div><br>
                </div>
                <div class="col-md-6 row">
                  <div class="col-md-3">
                    <small class="text-muted">Сценарий:</small>
                  </div>
                  <div class="col-md-9">
                    {{movie.scenario}}
                  </div><br>
                  <div class="col-md-3">
                    <small class="text-muted">Актёры:</small>
                  </div>
                  <div class="col-md-9">
                    {{movie.actors}}
                  </div><br>
                  <div class="col-md-3">
                    <small class="text-muted">Время:</small>
                  </div>
                  <div class="col-md-9">
                    {{movie.time}}
                  </div><br>
                  <div class="col-md-3">
                    <small class="text-muted">Премьера:</small>
                  </div>
                  <div class="col-md-9">
                    <div v-for="premier in movie.premiere" :key="premier.index">
                      {{premier}}
                    </div>
                  </div>
                </div>
              </div><br>
              <div>
                  {{movie.description}}
              </div>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
      <div class="rows">
        <b-btn variant="success" @click="addFavorites(movie, 'success')">Add to favorites</b-btn>
      </div> 
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  layout: 'navbar',
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  computed: {
    ...mapGetters({
      movies: 'movies/getMovies',
      favorites: 'favorites/favorites'
    }),
    id () {
      return this.$route.params.id
    },
    movie() {
      let result = {}
      let vm = this
      this.movies.map(function(item) {
        if (item.id == vm.$route.params.id) {
          result = item;
        }
      })
      return result
    }
  },
  methods: {
    addFavorites (movie, variant = null) {
      this.$store.commit('favorites/add', movie)
      this.$bvToast.toast('This is movie add to favorites', {
        title: `${movie.title}`,
        variant: variant,
        autoHideDelay: 2000,
        solid: true
      })
    },
    makeToast() {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-list {
  background: $bg;
  color: $text-f;
  .favorites {
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    border-radius: 40px;
    background: #fff;
    position: absolute;
    cursor: pointer;
    margin: -33px 0px 0px 333px;
    &:hover {
      background: #dc2267;
    }
  }
  .favoritesT {
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    border-radius: 40px;
    background: #dc2267;
    position: absolute;
    cursor: pointer;
    margin: -33px 0px 0px 333px;
    &:hover {
      background: #fff;
    }
  }
}
.rows {
  display: flex;
  justify-content: center;
}
</style>