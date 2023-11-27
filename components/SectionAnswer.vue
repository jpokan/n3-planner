<template>
	<ul class="mx-5 mt-2 mb-5 list-disc">
		<li v-for="(item, index) in answers">
			<SectionInput :model-value="item.text" ref="sectionInput"
			@keyup.enter="add(index)"
			@update:model-value="newValue => item.text = newValue"
			@remove="detach(index)"
			@updated="updateDB" />
		</li>
	</ul>
</template>

<script setup>
const props = defineProps(['maxSize', 'answers'])
const emit = defineEmits(['update:DB','newAnswers'])
const sectionInput = ref(null)

const add = (index) => {
	// if list length equals maxSize stop creating entry
	if (props.answers.length === props.maxSize) return
	// else, add entry to answers (rebuild answers array)
	const newAnswersArray = makeAnswersArray(props.answers, index)
	emit('newAnswers', newAnswersArray)
	updateDB()
}

const detach = (index) => {
	const length = toRaw(props.answers.length)
	if (length <=1) {
		props.answers[index].text = ''
		updateDB()
		return
	}
	// `arr.splice(n, 1)` n = index you want to remove
	props.answers.splice(index, 1)
	updateDB()
}

const updateDB = () => {
	emit('update:DB')
}

const makeAnswersArray = (answers, index) => {
	const entry = { text: '' }
	const oldArray = toRaw(answers)
	const newArray = [...oldArray.slice(0, index + 1), entry, ...oldArray.slice(index + 1)]
	return { newArray, index }
}

defineExpose({sectionInput})
</script>
