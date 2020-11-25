<template>
<div class="bg-white shadow overflow-hidden sm:rounded-lg">
  <div class="relative flex items-center px-4 py-5 sm:px-6">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      Details Panel
    </h3>
    <button @click="saveFactsToJson" type="submit" class="absolute right-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">Save</button>
    <transition name="fade"><div v-show="saved" class="absolute font-medium right-24 text-indigo-500">saved</div></transition>
  </div>
  <div class="border-t border-gray-200">
      <div v-for="(fact, index) in facts" :key="fact._id" @click="simulateDbClickForMobile(fact._id)" :class="[  index % 2 === 0 ? 'bg-gray-50' : 'bg-white' ]" class="hover:bg-indigo-50 cursor-pointer px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <div class="text-sm font-medium text-gray-500 ">
          {{ fact.user.name.first + ' ' + fact.user.name.last }}
        </div>
        <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <div>{{ fact.text }}</div>
            <div class="font-bold mt-1">Rating {{ fact.upvotes }}</div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
    export default {
        data(){
            return {
                saved: false,
                delay: 400,
                clicks: 0,
                timer: null
            }
        },
        computed: {
            facts(){
                return this.$store.state.savedFacts;
            },
            savedFactsDetailes(){
                return this.$store.getters.savedFactsDetailes;
            }
        },
        methods: {
            removeFact(id){
                this.$store.dispatch('removeFact', id);
            },
            saveFactsToJson(){
                if(this.savedFactsDetailes.length){
                    axios.post('/api/cats-facts', { facts: this.savedFactsDetailes })
                    .then( (response) => {
                        if(response.status === 200){
                            this.saved = true;
                            setTimeout( () => { this.saved = false; }, 1000);
                        }
                    })
                    .catch( (error) => {
                        alert(error.response.data.message);
                    });
                }else{
                    alert('Please add facts to details panel');
                }
            },
            //Double click is not working in mobile, So I added a function to handle the double click for mobile - for a larger project I would create a helper function fo this
            simulateDbClickForMobile: function(id, event){
                this.clicks++ 
                if(this.clicks === 1) {
                    var self = this
                    this.timer = setTimeout(function() {
                      self.clicks = 0
                    }, this.delay);
                } else{
                    clearTimeout(this.timer);  
                    this.clicks = 0;
                    this.removeFact(id);
                }         
            } 
        },
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
</style>