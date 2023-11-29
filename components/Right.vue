<template>
<button @click="$emit('goto')" class="w-6 h-6">
	<svg class="h-3 w-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M48 80v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Zm24-8a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8Zm165.66 50.34l-96-96A8 8 0 0 0 128 32v40h-24a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h24v40a8 8 0 0 0 13.66 5.66l96-96a8 8 0 0 0 0-11.32Z"/></svg>
</button>
</template>

<script setup>
defineEmits(['goto'])
</script>
