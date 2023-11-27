<template>
<div class="flex group hover:bg-yellow-50 focus-within:bg-gray-100">
	<input type="text" :value="modelValue" ref="input"
		class="focus:border-b border-b px-1 outline-none bg-transparent w-full"
		@input="update">
	<button v-if="!init" @click="remove"
		class="font-black group-hover:text-opacity-100 bg-transparent group-focus-within:text-opacity-100 text-opacity-0 border-b w-6 text-black transition duration-500">⨯</button>
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

defineExpose({focus})

</script>
