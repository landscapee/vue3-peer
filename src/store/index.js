 import { createStore } from 'vuex'
 import getters from './getters'
 import pageControl from './module/pageControl'
let store =createStore({
    modules:{
        pageControl
    },
    getters
})

export default store
