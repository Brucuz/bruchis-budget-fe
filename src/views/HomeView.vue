
<script>
import ExpensesForm from "../components/ExpensesForm.vue";
import { addExpenses } from "../services/firebase";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  components: {  Datepicker, ExpensesForm },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    addExpenses(amount, category, description, date) {
      addExpenses(amount, category, description, date);
      this.showModal = false;
    },
    hideModal(){
      this.showModal = false;
      console.log("azzz")
    }
  }
}
</script>

<template>
  <div class="container">
    <button class="btn btn-primary btn-block mb-4" @click="showModal=true">Aggiungi spesa</button>
    <div class="custom-modal" v-if="showModal">
      <div class="custom-modal-content">
        <ExpensesForm :onSubmit="addExpenses" :hide="hideModal"/>
      </div>
    </div>
  </div>
</template>

<style>
.custom-modal{
  position: fixed;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.7);
}  
.custom-modal-content{
 background-color: white;
 padding: 30px 10px 10px 10px;
 border-radius: 5px; 
}
</style>
