<template>
	<SectionTitle title="Plan Your Day" />
	<Date @getDataFromLocalDB="getDataFromLocalDB" @updateDate="setDate($event)" :currentDay="currentDay" />
	<div class="my-10 border p-5 rounded-xl">
		<div v-for="(item, index) in fields" :key="item.id">
			<SectionH2 :title="item.title" />
			<SectionQuestion :text="item.question" />
			<SectionAnswer ref="answers" :answers="item.answers" :maxSize="item.maxSize"
				@newAnswers="replace($event, index)" @update:DB="save" />
		</div>
	</div>
</template>

<script setup>
import Dexie from 'dexie'
const db = new Dexie('TEMPLATES')
db.version(1).stores({ PLAN_YOUR_DAY: '&name' })
const currentDay = ref(new Date().toDateString())
const templateID = ref(currentDay.value)
const answers = ref(null)
const cursor = ref({ target: 0, subindex: 0 })
const definition = [
	{
		id: 'brain-dump',
		title: "BRAIN DUMP",
		question: "What tasks are on your mind? Write everything!",
		maxSize: null,
		answers: [{ text: '' }]
	},
	{
		id: 'daily-highlights',
		title: "DAILY HIGHLIGHTS",
		question: "What are the top three priorities or task you want to accomplish today?",
		maxSize: 3,
		answers: [{ text: '' }, { text: '' }, { text: '' }]
	},
	{
		id: 'might-do-list',
		title: "MIGHT-DO LIST",
		question: "What else you might do today?",
		maxSize: null,
		answers: [{ text: '' }]
	},
	{
		id: 'todays-intention',
		title: "TODAY'S INTENTION",
		question: "What is your purpose for today? Keep it short and simple.",
		maxSize: 1,
		answers: [{ text: '' }]
	}
]

const fields = ref([...definition])

onBeforeMount(() => getDataFromLocalDB())

const getDataFromLocalDB = () => {
	db.PLAN_YOUR_DAY.get(templateID.value)
	.then((e) => {
		if (!e) {
			// Create new empty entry
			reset()
			save()
			return
		}
		// Set entry values
		fields.value = e.fields
	})
}

const reset = () => {
	fields.value = definition
}

const save = async () => {
	db.PLAN_YOUR_DAY.put({ name: templateID.value, fields: toRaw(fields.value) })
		.then(() => console.log('SAVE::PUT success'))
		.catch(() => console.log('SAVE::PUT error'))
}

const replace = (e, index) => {
	fields.value[index].answers = e.newArray
	// Set cursor values
	cursor.value.target = index
	cursor.value.subindex = e.index + 1
}

const setDate = (e) => {
	currentDay.value = e
	templateID.value = e
}

const focus = () => {
	answers.value[cursor.value.target].sectionInput[cursor.value.subindex].focus()
}

onUpdated(() => focus())
</script>
