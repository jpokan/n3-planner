<template>
	<p><Left @goto="prevDay" />{{ today }}<Right @goto="nextDay" /></p>
</template>

<script setup>
const emit = defineEmits(['getDataFromLocalDB','updateDate'])

let day = ref(new Date())

const today = computed(()=>{
	return day.value.toDateString()
})

onMounted(() => { day.value = new Date() })

const nextDay = () => {
	const tomorrow = new Date(day.value.setDate(day.value.getDate() + 1))
	day.value = tomorrow
	emit('updateDate', tomorrow)
	emit('getDataFromLocalDB')
}

const prevDay = () => {
	const yesterday = new Date(day.value.setDate(day.value.getDate() - 1))
	day.value = yesterday
	emit('updateDate', yesterday)
	emit('getDataFromLocalDB')
}
</script>
