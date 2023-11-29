<template>
<button @click="$emit('goto')" class="w-6 h-6">
	<svg class="h-3 w-6" :class="`rotate-${angle}`" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.15.5L4 6.65a.48.48 0 0 0 0 .7l6.15 6.15"/></svg>
</button>
</template>

<script setup>
defineProps(['angle'])
defineEmits(['goto'])
</script>
