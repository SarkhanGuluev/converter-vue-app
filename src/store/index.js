import { createStore} from 'vuex'

export default createStore({
    state() {
        return {
            currencies: [],
            from: '',
            to: ''
        }
    },
    mutations: {
        addCurrencies(state, data) {
            for(let key in data) {
                state.currencies.push(data[key])
            }
        },

        addFrom(state, value) {
            state.from = value
        },

        addTo(state, value) {
            state.to = value
        }
    },
    getters: {
        getCurrencies(state) {
            return state.currencies
        },

        getFrom(state) {
            return state.from
        },

        getTo(state) {
            return state.to
        }
    }
})