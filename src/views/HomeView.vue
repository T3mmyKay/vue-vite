<script setup>
import Quiz from '@/components/quiz/Quiz.vue'
import {state} from "@/stores/quizStore.js";
</script>

<template>
	<Quiz :quiz="state"/>
</template>
