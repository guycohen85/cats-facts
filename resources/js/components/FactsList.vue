<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">Facts List</h3>
    </div>
    <div class="border-t border-gray-200">
      <div
        v-for="(fact, index) in facts"
        :key="fact._id"
        @click="simulateDbClickForMobile(fact._id)" 
        class="inline-block lg:block hover:bg-indigo-50 cursor-pointer bg-white-50 px-4 py-4 sm:gap-4 sm:px-6"
      >
        <div class="text-sm font-medium text-gray-500">{{ "Fact " + (index + 1) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
            return {
                delay: 400,
                clicks: 0,
                timer: null
            }
        },
        computed: {
            facts(){
                return this.$store.state.factsList;
            }
        },
        methods: {
            saveFact(id){
                this.$store.dispatch('saveFact', id);
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
                    this.saveFact(id);
                }         
            } 
        },
    }
</script>
