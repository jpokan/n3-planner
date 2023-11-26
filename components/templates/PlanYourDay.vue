<template>
	<SectionTitle title="Plan Your Day" />
	<div class="my-10 border p-5 rounded-xl">
		<div v-for="(item, index) in fields" :key="item.id">
			<SectionH2 :title="item.title" />
			<SectionQuestion :text="item.question" />
			<SectionAnswer @payload="update($event, index)" :maxSize="item.maxSize" />
		</div>
	</div>
</template>

<script setup>
import Dexie from 'dexie'
const db = new Dexie('TEMPLATES')
db.version(1).stores({ template_A: '&name' })

let fields = [
	{
		id: 'brain-dump',
		title: "BRAIN DUMP",
		question: "What tasks are on your mind? Write everything!",
		maxSize: null,
		answers: []
	},
	{
		id: 'daily-highlights',
		title: "DAILY HIGHLIGHTS",
		question: "What are the top three priorities or task you want to accomplish today?",
		maxSize: 3,
		answers: []
	},
	{
		id: 'might-do-list',
		title: "MIGHT-DO LIST",
		question: "What else you might do today?",
		maxSize: null,
		answers: []
	},
	{
		id: 'todays-intention',
		title: "TODAY'S INTENTION",
		question: "What is your purpose for today? Keep it short and simple.",
		maxSize: 1,
		answers: []
	}
]

onBeforeMount(() => checkLocalDB())

const checkLocalDB = () => {
	db.template_A.get("plan_your_day")
	.then((e) => fields = e.fields)
}

const update = (e, index) => {
	// updates field object
	fields[index].answers = e
	save()
}

const save = async () => {
	db.template_A.put({ name: 'plan_your_day', fields })
	.then(()=>console.log('success'))
	.catch(()=>console.log('error'))
}

const saveToLocalStorage = () => {
	localStorage.setItem('template', JSON.stringify(fields))
}

</script>
