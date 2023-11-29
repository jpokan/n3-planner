<template>
	<p>
	<Left @goto="prevDay" />
		<span class="px-5">{{ currentDay }}</span>
	<Right @goto="nextDay" />
	</p>
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
