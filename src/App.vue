<template>
  <div class="app">
    <h1 class="typing">Конвертация валют.</h1>
    <v-select flag='from' />
    <v-select flag='to' />
    {{log()}}
  </div>
</template>

<script>
import VSelect from './components/v-select.vue'

export default {
  name: 'App',
  components: {VSelect},
  mounted() {
    this.$http.get('https://free.currconv.com/api/v7/currencies?apiKey=64c82308f008cf1e3a2d')
      .then(res => this.$store.commit('addCurrencies', res.data.results))
  },  
    methods: {
        log() { console.log(this.$store.getFrom) },
        currencyFrom(event) {
          this.from = event.target
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
  gap: 1rem
}

h1 {
  font-family: 'Inconsolata', Consolas, monospace;
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
    animation: typing 4s steps(18) forwards,
      caret 1s infinite;
}

@keyframes typing {
	to { width: 0 }
}
@keyframes caret {
	50% { color: transparent }
}
</style>
