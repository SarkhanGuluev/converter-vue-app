<template>
    <div class="select">
        <select v-model="selected">
            <!-- <option disabled> Выберити валюту </option> -->
            <option v-for="(currency, index) in currencies" :key='index'>
                {{currency.currencyName}}
            </option>
        </select>
        <h1>{{selected}}</h1>
    </div>
</template>

<script>
export default {
    name: 'Select',
    props: ['flag'],
    data() {
        return {
            selected: 'AZN'
        }
    },
    computed: {
      currencies() {
        return this.$store.getters.getCurrencies
      }
    },
    // methods: {
    //     addValue() {
    //         if(this.flag === 'from'){
    //             this.$store.commit('addFrom', this.selected)
    //         }
    //         if(this.flag === 'to'){
    //             this.$store.commit('addTo', this.selected)
    //         }
    //     }
    // }
}
</script>

<style>
 select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background: #2c3e50;
    background-image: none;
}

select::-ms-expand {
    display: none;
}

.select {
    position: relative;
    display: flex;
    width: 20em;
    height: 3em;
    line-height: 3;
    background: #2c3e50;
    overflow: hidden;
    border-radius: .25em;
}
select {
    flex: 1;
    padding: 0 .5em;
    color: #fff;
    cursor: pointer;
}

.select::after {
    content: '\25BC';
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background: #34495e;
    cursor: pointer;
    pointer-events: none;
    -webkit-transition: .25s all ease;
    -o-transition: .25s all ease;
    transition: .25s all ease;
}

.select:hover::after {
     color: #f39c12;
}
</style>