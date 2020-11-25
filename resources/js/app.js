import store from "./store";
import FactsList from "./components/FactsList.vue";
import DetailsPanel from "./components/DetailsPanel.vue";

window.Vue = require('vue');
Vue.component("facts-list", FactsList);
Vue.component("details-panel", DetailsPanel);

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


new Vue({
    store,
    el: '#app',
    created() {
        this.$store.dispatch('loadFacts');
    }
});
