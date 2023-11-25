<template>
	<ul class="mx-5 mt-2 mb-5">
		<li v-for="(item, index) in answers">
			<SectionInput :model-value="item.text" @update:model-value="newValue => item.text = newValue" @remove="detach(index)" />
		</li>
		<li>
			<SectionInput @keyup.enter="add" :model-value="init" @update:model-value="newValue => init = newValue" @build="buildJSON" />
		</li>
	</ul>
</template>

<script setup>
let temp
const props = defineProps(['maxSize'])
const init = ref('')
const answers = ref([])

const add = (e) => {
	// if list length equals maxSize return stop creating entry
	if (answers.value.length == props.maxSize - 1) return
	// add entry to answers
	answers.value.push({ text: e.target.value })
	// Clear input
	init.value = ''
	// Prepare data
	buildJSON()
}

const detach = (index) => {
	// `arr.splice(n, 1)` n = index you want to remove
	answers.value.splice(index, 1)
	buildJSON()
}

const buildJSON = () => {
	temp = [...toRaw(answers.value), { init: init.value }]
}
</script>
