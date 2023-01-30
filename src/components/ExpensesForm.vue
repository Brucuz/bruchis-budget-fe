
<script>
import LoginForm from "../components/LoginForm.vue";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  components: { LoginForm, Datepicker },
  props: {
    onSubmit: Function,
    hide: Function
  },
  data() {
    return {
      date: new Date(),
      showMenu: false,
      categories: ['Altro', 'Spesa'],
      currentCategory: "",
      amount: null,
      description: ""  
    };
  },
  methods: {
    selectCategory(category){
      this.currentCategory = category;
      this.showMenu = false;
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="form-outline mb-4">
      <input type="number" id="form2Example1" class="form-control" v-model="amount" autocomplete="off"/>
      <label class="form-label" for="form2Example1">Euro</label>
    </div>
    <div class="form-outline mb-4">
      <div class="dropdown">
        <input type="text" id="form2Example1" class="form-control" @click="showMenu = !showMenu" v-model="currentCategory" autocomplete="off"/>
        <div :class="['dropdown-menu', showMenu? 'show' : '']" aria-labelledby="dropdownMenuButton">
          <a v-for="category in categories" @click="selectCategory(category)" class="dropdown-item" href="#">{{ category }}</a>
        </div>
      </div>
      <label class="form-label" for="form2Example1">Categoria</label>
    </div>
    <div class="form-outline mb-4">
      <input type="text" id="form2Example1" class="form-control" v-model="description" autocomplete="off"/>
      <label class="form-label" for="form2Example1">Descrizione</label>
    </div>
    <div class="form-outline mb-4">
      <Datepicker v-model="date"></Datepicker>
      <label class="form-label" for="form2Example1">Data</label>
    </div>
    <div class="form-outline mb-4 button-container">
      <button @click="onSubmit(amount, currentCategory, description, date)" type="button"
        class="btn btn-block btn-outline-primary btn-block mb-4">Add</button>
      <button @click="hide" type="button"
        class="btn btn-block btn-outline-warning btn-block mb-4">Cancel</button>  
    </div>
  </div>
</template>

<style>
.button-container{
    display: flex;
    justify-content: space-evenly;
}

.button-container .btn{
    flex: 1;
    margin: 5px;
}
</style>