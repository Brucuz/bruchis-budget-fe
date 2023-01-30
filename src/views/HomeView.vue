
<script>
import LoginForm from "../components/LoginForm.vue";
import { addExpenses } from "../services/firebase";

export default {
  components: { LoginForm },
  methods: {
    addExpenses(amount, category, description, date){
      addExpenses(amount, category, description, date);
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="form-outline mb-4">
      <input type="number" id="form2Example1" class="form-control" />
      <label class="form-label" for="form2Example1">Euro</label>
    </div>
    <div class="form-outline mb-4">
      <input type="text" id="form2Example1" class="form-control" />
      <label class="form-label" for="form2Example1">Categoria</label>
    </div>
    <div class="form-outline mb-4">
      <input type="text" id="form2Example1" class="form-control" />
      <label class="form-label" for="form2Example1">Descrizione</label>
    </div>
    <div class="form-outline mb-4">
      <input type="text" id="form2Example1" class="form-control" />
      <label class="form-label" for="form2Example1">Data</label>
    </div>
    <div class="form-outline mb-4">
      <button @click="addExpenses(10, 'tommaso', 'pannolotti', new Date())" type="button"
        class="btn btn-primary btn-block mb-4">Sign in</button>
    </div>

  </div>
</template>
