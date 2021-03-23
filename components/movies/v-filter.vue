<template>
  <div class="filter">
    <div class="col-md-3">
      <b-form-select v-model="selected1" :options="options1"></b-form-select><!-- <br>
      <b-badge @click="selected = null">{{selected}}</b-badge><br> -->
    </div>
    <div class="col-md-3">
      <b-form-select v-model="selected2" :options="options2"></b-form-select><!-- <br>
      <b-badge @click="selected = null">{{selected}}</b-badge><br> -->
    </div>
    <div class="col-md-3">
      <b-form-select v-model="selected3" :options="options3"></b-form-select><!-- <br>
      <b-badge @click="selected = null">{{selected}}</b-badge><br> -->
    </div>
    <div class="col-md-3">
      <b-form-select v-model="selected4" :options="options4"></b-form-select><!-- <br>
      <b-badge @click="selected = null">{{selected}}</b-badge> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected1: null,
      options1: [
        { value: null, text: 'Год' },
        { value: 'Фантастика', text: '1990-2000 г.' },
        { value: 'Ужас', text: '2000-2005 г.' },
        { value: 'Комедия', text: '2005-2010 г.' },
        { value: 'Мультики', text: '2010-2021 г.' /*, disabled: true  */}
      ],
      selected2: null,
      options2: [
        { value: null, text: 'Жанры' },
        { value: 'Фантастика', text: 'Фантастика' },
        { value: 'Ужас', text: 'Ужас' },
        { value: 'Комедия', text: 'Комедия' },
        { value: 'Мультики', text: 'Мультики' /*, disabled: true  */}
      ],
      selected3: null,
      options3: [
        { value: null, text: 'Страна' },
        { value: 'Фантастика', text: 'США' },
        { value: 'Ужас', text: 'Канада' },
        { value: 'Комедия', text: 'Англия' },
        { value: 'Мультики', text: 'Индия' /*, disabled: true  */}
      ],
      selected4: null,
      options4: [
        { value: null, text: 'Рейтинг' },
        { value: 'Фантастика', text: '2.5-4.0' },
        { value: 'Ужас', text: '4.5-6.0' },
        { value: 'Комедия', text: '6.5-8.0' },
        { value: 'Мультики', text: '8.5-10.0' /*, disabled: true  */}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
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