import { defineStore } from "pinia";

export let userCounterStore = defineStore('counter', {
    state() {
        return {
            count: 0,
        }
    },
    actions: {
        increment() {
            if(this.count >= 10) {return;}
            this.count++
        }
    },
    getters:{
        remaining(){
            return 10 - this.count;
        }
    }
})
