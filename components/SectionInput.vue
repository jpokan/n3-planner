<template>
<div class="flex group hover:bg-yellow-50 focus-within:bg-gray-100">
	<input type="text" :value="modelValue" ref="input" name="answer-field"
		class="focus:border-b border-b px-1 outline-none bg-transparent w-full"
		@input="update">
	<button v-if="!init" @click="remove"
		class="p-2 font-black group-hover:text-opacity-100 bg-transparent group-focus-within:text-opacity-100 text-opacity-0 border-b text-black transition duration-500">
		<svg class="w-2 h-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586L1.707.293Z" clip-rule="evenodd"/></svg>
	</button>
</div>
</template>

<script setup>
const props = defineProps(['modelValue', 'init'])
const emit = defineEmits(['update:modelValue', 'updated', 'remove'])
const input = ref(null)

const update = (e) => {
	emit('update:modelValue', e.target.value)
	emit('updated')
}

const remove = () => {
	emit('remove')
}

const focus = () => input.value.focus()

defineExpose({focus, input})

</script>
