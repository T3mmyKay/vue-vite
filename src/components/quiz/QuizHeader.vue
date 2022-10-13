<template>
    <h2>This is the Header</h2>

    <h4>{{ state.name }}</h4>
</template>

<script setup>
import { state } from "@/stores/quizStore.js";
</script>

<style scoped>

</style>
