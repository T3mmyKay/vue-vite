<template>
	<textarea
			@keydown.tab.prevent="onTabPress"
			@keyup="update" v-text="comment"/>
</template>

<script setup>
defineProps({
	comment: String,
});

let emit = defineEmits(['update:comment']);

function onTabPress(e) {
	let textarea = e.target, val = textarea.value, start = textarea.selectionStart, end = textarea.selectionEnd;

	textarea.value = val.substring(0, start) + "\t" + val.substring(end);
	textarea.selectionStart = textarea.selectionEnd = start + 1;
}

let update = (e) => emit('update:comment', e.target.value)
</script>

<style scoped>

</style>
