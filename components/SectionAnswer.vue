<template>
	<ul class="mx-5 mt-2 mb-5" :class="type">
		<li v-for="(item, index) in answers">
			<SectionInput :model-value="item.text" ref="sectionInput"
			@keyup.enter="add(index)"
			@keyup.delete.prevent="del(index)"
			@update:model-value="newValue => item.text = newValue"
			@remove="detach(index)"
			@updated="$emit('update:DB')" />
		</li>
	</ul>
</template>

<script setup>
const props = defineProps(['maxSize', 'answers', 'type'])
const emit = defineEmits(['update:DB', 'add', 'del'])
const sectionInput = ref(null)
const event = ref(null)
const subindex = ref(null)

const add = (index) => {
	event.value = 'add'
	subindex.value = index
	// if list length equals maxSize stop creating entry
	if (props.answers.length === props.maxSize) return
	// else, add entry to answers (rebuild answers array)
	const newAnswersArray = makeAnswersArray(props.answers, index)
	emit('add', newAnswersArray)
	emit('update:DB')
}

const del = (index) => {
	event.value = 'del'
	subindex.value = index
	if (props.answers[index].text === '') {
		detach(index)
	}
	emit('update:DB')
}

const detach = (index) => {
	event.value = 'detach'
	subindex.value = index
	// if input is the only one left, clear the input
	const length = toRaw(props.answers.length)
	if (length <=1) {
		props.answers[index].text = ''
		emit('update:DB')
		return
	}
	// `arr.splice(n, 1)` n = index you want to remove
	props.answers.splice(index, 1)
	emit('update:DB')
}

const makeAnswersArray = (answers, index) => {
	const entry = { text: '' }
	const oldArray = toRaw(answers)
	const newArray = [...oldArray.slice(0, index + 1), entry, ...oldArray.slice(index + 1)]
	return { newArray, index }
}

defineExpose({sectionInput})

onUpdated(() => {
	// check what type of event activated the update
	// focus input accordingly
	try {
		if (event.value == 'add' ) sectionInput.value[subindex.value + 1].focus()
		if (event.value == 'detach' && subindex.value >= 1) {
			sectionInput.value[subindex.value - 1].focus()
		}
		event.value = null
		subindex.value = null
	} catch (e){
		console.log(e)
	}
})
</script>

