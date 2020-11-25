import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    factsList: [],
    savedFacts: [],
  },
  getters: {
    savedFactsDetailes( state  ){

        var savedFactsDetailes = state.savedFacts.map(function (fact) {
            return { text: fact.text, user: fact.user.name.first + ' ' + fact.user.name.last, upvotes: fact.upvotes }
        });
        return savedFactsDetailes;
    }
  },
  mutations: {
    setFactsList(state, payload){
        state.factsList = payload;
    },
    saveFact(state, id){
        var factIndex;
        var fact = state.factsList.find( (fact, index) => {
            if(fact._id == id){
                factIndex = index;
                return true;
            }
        });
        state.factsList.splice(factIndex, 1);
        state.savedFacts.push( fact );
    },
    removeFact(state, id){
        var factIndex;
        var fact = state.savedFacts.find( (fact, index) => {
            if(fact._id == id){
                factIndex = index;
                return true;
            }
        });
        state.savedFacts.splice(factIndex, 1);
        state.factsList.push(fact);
    }
  },
  actions: {
    loadFacts({ commit }){
        if(sessionStorage.getItem("catsFacts")){//Load faster in the next pageload
            var catsFacts = JSON.parse(sessionStorage.getItem("catsFacts"));
            commit('setFactsList', catsFacts);
        }else{
            axios.get('https://cat-fact.herokuapp.com/facts')
            .then( (response) => {
                if(response.status === 200){
                    var catsFacts = response.data.all.slice(0, 10);
                    sessionStorage.setItem("catsFacts", JSON.stringify(catsFacts));
                    commit('setFactsList', catsFacts);
                }
            });
        }
    },
    saveFact({ commit }, id){
        commit('saveFact', id);
    },
    removeFact({ commit }, id){
        commit('removeFact', id);
    }
  }
})

export default store;