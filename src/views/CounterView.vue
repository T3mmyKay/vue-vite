<template>
    <div>
        <h1>{{ counter.count }}</h1>
        <button @click="counter.increment()">Increment</button>

    </div>
</template>

<script setup>
import {userCounterStore} from "@/stores/CounterStore.js";
let counter = userCounterStore();
</script>

<style scoped>

</style>
