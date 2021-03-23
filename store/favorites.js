export const state = () => ({
  favorites: []
})

export const getters = {
  favorites: state => state.favorites
}

export const mutations = {
  add (state, movie) {
    if (state.favorites.length) {
      let isFavorExists = false
      state.favorites.map(function(item){
        if (item.id === movie.id) {
          isFavorExists = true
          item.colit++
        }
      })
      if (!isFavorExists) {
        state.favorites.push(movie)
      }
    } else {
      state.favorites.push(movie)
    }
  },
  remove (state, movie) {
    state.favorites = state.favorites.filter(item => item.id !== movie.id)
  }
}
