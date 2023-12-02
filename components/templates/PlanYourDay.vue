<template>
	<SectionTitle title="Plan Your Day" />
	<Date @getDataFromLocalDB="getDataFromLocalDB" @updateDate="setDate($event)" />
	<div class="my-10 border p-5 rounded-xl">
		<div v-for="(item, index) in fields" :key="item.id">
			<SectionH2 :title="item.title" />
			<SectionQuestion :text="item.question" />
			<SectionAnswer ref="sectionAnswer"
				:answers="item.answers" :maxSize="item.maxSize" :type="item.type"
				@add="add(index, $event)" @update:DB="save" />
		</div>
	</div>
</template>

<script setup>
import PlanYourDayTemplate from 'assets/js/templates/PlanYourDay.js'
import Dexie from 'dexie'
const db = new Dexie('TEMPLATES')
db.version(1).stores({ PLAN_YOUR_DAY: '&name' })
const currentDay = ref(null)
const templateID = ref(null)
const sectionAnswer = ref(null)

const fields = ref(new PlanYourDayTemplate())

onBeforeMount(() => {
	currentDay.value = new Date().toDateString()
	templateID.value = currentDay.value
	getDataFromLocalDB()
})

const getDataFromLocalDB = () => {
	db.PLAN_YOUR_DAY.get(templateID.value)
	.then((e) => {
		if (!e) {
			// Create new empty entry
			reset()
			save()
			return
		}
		// Set entry values from saved DB
		fields.value = e.fields
	})
}

const reset = () => {
	fields.value = new PlanYourDayTemplate()
}

const save = async () => {
	db.PLAN_YOUR_DAY.put({ name: templateID.value, fields: toRaw(fields.value) })
		.then(() => console.log('SAVE::PUT success'))
		.catch(() => console.log('SAVE::PUT error'))
}

const add = (index, e) => {
	fields.value[index].answers = e.newArray
}

const setDate = (e) => {
	currentDay.value = e.toDateString()
	templateID.value = e.toDateString()
}

</script>

