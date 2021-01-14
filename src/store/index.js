import { createStore} from 'vuex'

export default createStore({
    state() {
        return {
            currencies: []
        }
    },
    mutations: {
        addCurrencies(state, data) {
            for(let key in data) {
                state.currencies.push(data[key])
            }
        }
    },
    getters: {
        getCurrencies(state) {
            return state.currencies
        }
    }
})