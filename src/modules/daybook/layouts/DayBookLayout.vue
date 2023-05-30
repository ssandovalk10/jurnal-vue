<template>
   <Navbar/>

   <div v-if="isLoading" class="row justify-content-md-center">
      <div class="col-3 alert-info text-center mt-5">
         Esper por favor...
         <h3 class="mt-2"><i class="fa fa-spin fa-sync"></i></h3>
      </div>
   </div>
   <div v-else class="d-flex">
      <div class="col-4">
         <EntryList />
      </div>
      <div class="col">
         <router-view></router-view>
      </div>
   </div>
</template>




<script>
import { defineAsyncComponent }  from 'vue';
import { mapActions, mapState } from 'vuex';

///import Navbar from '../components/Navbar'

   export default {
     
      components:{
         Navbar: defineAsyncComponent(() => import('../components/Navbar.vue')),
         EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
         //Navbar
      },
      computed:{
         ...mapState('journal', ['isLoading'])

      },
      methods:{
         ...mapActions('journal', ['loadEntries'])

         
      },
      created(){
        this.loadEntries() 
      }
   }
</script>

<style lang="scss" scoped>

</style>