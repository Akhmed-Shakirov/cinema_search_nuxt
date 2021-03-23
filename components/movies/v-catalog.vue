<template>
  <div>
    <div class="filter">
      <div class="col-md-3">
        <select 
          v-model="filters.genres"
          @change="applyFiltersG('genres', filters.genres)"
          class="custom-select"
        >
          <option
            v-for="option in genresOptions"
            :key="option"
          >
          {{option}}
          </option>
        </select>
      </div>
      <div class="col-md-3">
        <select 
          v-model="filters.age"
          @change="applyFiltersA('age', filters.age)"
          class="custom-select"
        >
          <option
            v-for="option in ageOptions"
            :key="option"
          >
          {{option}}
          </option>
        </select>
      </div>
      <div class="col-md-3">
        <select 
          v-model="filters.country"
          @change="applyFiltersC('country', filters.country)"
          class="custom-select"
        >
          <option
            v-for="option in countryOptions"
            :key="option"
          >
          {{option}}
          </option>
        </select>
      </div>
      <!-- <div class="col-md-3">
        <b-btn @click="methodsClick">Click</b-btn>
      </div> -->
    </div><br/>
    <div class="text-center" v-if="show">
      <div class="loader">Loading...</div>
    </div>
    <div v-if="filteredMovies.length">
      <div class="catalog">
          <b-card
            no-body
            id="my-card"
            style="max-width: 15rem;"
            img-top
            v-for="movie in filteredMovies.slice(8*(currentPage-1),8*(currentPage))"   
            :key="movie.id"
          >
            <template #header>{{movie.title}}</template>
            <nuxt-link :to="`/${movie.id}`">
              <b-card-img :src="movie.img" alt="Image" bottom></b-card-img>
            </nuxt-link>
            <b-card-footer>{{movie.age}}</b-card-footer>
          </b-card>
        </div>
      <div class="overflow-auto" v-show="!show">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-card">
        </b-pagination>      
      </div>
    </div>
     <div class="catalog" v-else> 
      <h1>Not '{{searchValue}}' movies in to search</h1>
    </div>
  </div>
</template>
 
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      show: false,
      sortedMovies: [],
      search: '',
      filters: {
        genres: 'All',
        age: 'All',
        country: 'All'
      },
      sortedG: [],
      sortedC: [],
      perPage: null,
      currentPage: 1
    }
  },
  mounted() {
    if (this.searchValue.length < 1) {
      this.search = this.searchValue
    }
    this.sortedMovies = [...this.movies]
  },
  watch: {
    searchValue() {
      this.filtered(this.searchValue)
    },
    applyFiltersA() {
      this.applyFiltersA(this.applyFiltersA)
    }
  },
  computed: {
    ...mapGetters({
      movies: "movies/getMovies",
      searchValue: 'searchValue/searchValue'
    }),
    rows() {
      this.total = this.filteredMovies.length
      if (this.total <= 8) {
        this.perPage = this.total
      } else
      if (this.total <= 16) {
        this.perPage = this.total-1
      } else
      if (this.total <= 24) {
        this.perPage = (this.total/2)-1
      } else
      if (this.total <= 32) {
        this.perPage = (this.total/3)-1
      }
      return this.filteredMovies.length
    },
    filteredMovies() {
      if (this.search) {
        if (this.sortedMovies.length) {
          return this.sortedMovies.filter(item => {
            return item.title.toString().toLowerCase().includes(this.search.toString().toLowerCase());
          });
        } else {
          return this.movies.filter(item => {
            return item.title.toString().toLowerCase().includes(this.search.toString().toLowerCase());
          });
        }
      } else if (this.sortedMovies.length) {
        return this.sortedMovies;
      } else {
        return this.movies;
      }
    },
    genresOptions() {
      return this.getOptions('genres')
    },
    ageOptions() {
      return this.getOptions('age')
    },
    countryOptions() {
      return this.getOptions('country')
    }
  },
  methods: {
    filtered() {
      this.search = this.searchValue
    },
    getOptions(key) {
      this.show = false
      let result = ['All']
      this.sortedMovies.map((item) => {
          result.push(item[key].toString().toLowerCase())
      })
      return result = [...new Set(result)]         /// Убирает повторяющися элементы в фильтре
    },
    applyFiltersG(key, value) {
      if (value === 'All') {
        this.sortedG = this.sortedMovies = [...this.movies]
        this.filters.age = 'All'
        this.filters.country = 'All'
      } else {
        this.sortedG = this.sortedMovies = this.movies.filter(item => item[key].toLowerCase() === value)
      }
    },
    applyFiltersC(key, value) {
      if (value === 'All' || this.filters.country === 'All') {
        this.sortedMovies = this.sortedG
        this.filters.age = 'All'
      } else {
        this.sortedMovies = this.sortedMovies.filter(item => item[key].toString().toLowerCase() === value)
      }
    },
    applyFiltersA(key, value) {
      if (value === 'All' || this.filters.age === 'All') {
        this.sortedMovies = this.sortedG
        this.filters.country = 'All'
      } else {
        this.sortedMovies = this.sortedMovies.filter(item => item[key].toString().toLowerCase() === value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog {
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
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 73px;
  }
  img {
    height: 300px;
  }
}
.search {
  margin: 0 auto;
  input {
    color: $text-f;
    background: rgba(0, 0, 0, 0);
  }
  option {
    color: $text-f;
    background: rgba(0, 0, 0, 0) !important;
  }
  h1 {
    color: $text-f;
  }
}
.overflow-auto {
  margin: 20px;
  display: flex;
  justify-content: center;
}
.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 100px auto;
  font-size: 20px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.filter {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .col-md-3 {
    display: flex;
    flex-direction: column;
  }
  .badge {
    width: 100px;
    margin: 0 auto;
    padding: 5px;
    cursor: pointer;
  }
  select {
    color: $text-f;
  }
}
.custom-select {
  background: $bg url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='white' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right .75rem center/8px 10px !important;
}

</style>