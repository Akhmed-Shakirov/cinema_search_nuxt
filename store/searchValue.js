export const state = () => ({
  searchValue: []
})

export const getters = {
  searchValue: state => state.searchValue
}

export const mutations = {
  addSearch: (state, value) => {
    state.searchValue = value;
  },
  clearSearch: (state) => {
    state.searchValue = '';
  }
}