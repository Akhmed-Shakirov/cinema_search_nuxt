<template>
  <div class="search col-md-3">
    <b-form-input list="my-list-id" v-model="search" placeholder="Live search"></b-form-input>
    <datalist id="my-list-id">
      <option v-for="size in sizes" :key="size">{{ size }}</option>
    </datalist>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizes: ['Naruto', 'Attac Tittan', 'Airon Man', 'Super Man'],
      search: ''
    }
  }
}
</script>

<style lang="scss" scoped>
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
}
</style>