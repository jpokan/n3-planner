<template>
	<p class="text-gray-500"><Arrow @goto="prevDay" />{{ currentDay }}<Arrow @goto="nextDay" angle="180"/></p>
</template>

<script setup>
const props = defineProps(['currentDay'])
const emit = defineEmits(['getDataFromLocalDB','updateDate'])
let today = new Date()
const nextDay = () => {
	const tomorrow = new Date(today.setDate(today.getDate() + 1)).toDateString()
	emit('updateDate', tomorrow)
	emit('getDataFromLocalDB')
}

const prevDay = () => {
	const yesterday = new Date(today.setDate(today.getDate() - 1)).toDateString()
	emit('updateDate', yesterday)
	emit('getDataFromLocalDB')
}
</script>
