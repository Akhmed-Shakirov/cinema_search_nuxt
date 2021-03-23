<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item exact to="/">Movies</b-nav-item>
        <!-- <b-nav-item exact to="/tvseries">TVseries</b-nav-item> -->
        <b-nav-item exact to="/favorites">Favorites <b-badge variant="light" v-if="favorites.length">{{favorites.length}}</b-badge></b-nav-item>
      </b-navbar-nav>


      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown> -->
        
        <b-form-input list="my-list-id" size="sm" class="mr-sm-2" placeholder="Search" 
        v-on:keyup.enter="search(searchValue1)" v-model="searchValue1"></b-form-input>
        <datalist id="my-list-id">
          <option v-for="size in sizes" :key="size">{{ size }}</option>
        </datalist>
        <b-button size="sm" class="my-2 my-sm-0" @click="search(searchValue1)" v-if="!searchValue.length">Search</b-button>
        <b-button size="sm" class="my-2 my-sm-0" @click="clear" v-if="searchValue.length">Clear</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      favorites: 'favorites/favorites',
      searchValue: 'searchValue/searchValue'
    })
  },
  data() {
    return {
      sizes: ["Naruto", "Attac Tittan", "Железный человек", "Джон Уик"],
      searchValue1: ''
    }
  },
  methods: {
    search(value) {
      this.$store.commit('searchValue/addSearch', value)
      this.$router.push('/')
    },
    clear() {
      this.searchValue1 = ''
      this.$store.commit('searchValue/clearSearch')
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-dark {
  background: $bg-nav !important;
}
.nav-item a.nuxt-link-active {
  color: rgba(255, 255, 255, 0.753);
}
input {
  color: $text-f;
  background: rgba(0, 0, 0, 0);
  &:focus {
    color: $text-f;
    background: rgba(0, 0, 0, 0);
  }
}
</style>