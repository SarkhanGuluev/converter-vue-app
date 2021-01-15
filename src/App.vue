<template>
  <div class="app">
    <h1 class="typing">Конвертер валют.</h1>
    <div>
      <input v-model="from" @keypress="getValue"/>
      <v-select @select="selectFrom"/>
    </div>
  <div>
    <input :value='convert'>
    <v-select @select="selectTo"/>
  </div>
  </div>
</template>

<script>
import VSelect from './components/v-select.vue'

export default {
  name: 'App',
  components: {VSelect},
  data: () => ({
    currencyFrom: '',
    currencyTo: '',
    from: 0,
    value: 0
  }),
  mounted() {
    this.$http.get('https://free.currconv.com/api/v7/currencies?apiKey=64c82308f008cf1e3a2d')
      .then(res => this.$store.commit('addCurrencies', res.data.results))
  },  
  methods: {
    selectFrom(option) {
      this.currencyFrom = option
    },
    selectTo(option) {
      this.currencyTo = option
    },
    async getValue() {
      if(this.currencyFrom && this.currencyTo){
        const res = await this.$http.get(`https://free.currconv.com/api/v7/convert?q=${this.currencyFrom}_${this.currencyTo}&compact=ultra&apiKey=64c82308f008cf1e3a2d`)
        this.value = res.data[`${this.currencyFrom}_${this.currencyTo}`]
      }
      console.log(this.value);
    }
  },
  computed: {
    convert() {
      if(this.currencyTo){
        return this.from * this.value
      } else {
        return 0
      }
    }
  }
}
</script>

<style>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.app {
  background-color: #1d1f20;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  font-family: 'Inconsolata', Consolas, monospace;
}

.app > div {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

input {
  font-size: 1.5em;
  background: #2c3e50;
  color: #fff;
  padding-left: 1em;
  border-radius: .25em;
  border: none;
}

h1 {
	font-size: 4em;
	color: #d7b94c;
}

.typing {
  position: relative;
}

.typing::after {
    content: "|";
    position: absolute;
    right: 0;
    width: 100%;
    color: white;
    background: #1d1f20;;
    animation: typing 4s steps(16) forwards, caret 1s infinite;
}

@keyframes typing {
	to { width: 0 }
}
@keyframes caret {
	50% { color: transparent }
}
</style>
