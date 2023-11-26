<template>
<div class="flex group">
	<input type="text" :value="modelValue" class="focus:border-b border-b px-1 outline-none focus:bg-gray-100 w-full"
		@input="update">
	<button v-if="!init" @click="remove"
		class="font-black group-focus-within:bg-gray-100 group-focus-within:text-opacity-100 hover:text-opacity-100 hover:bg-gray-100 text-opacity-0 border-b w-6 text-black transition duration-500">⨯</button>
</div>
</template>

<script setup>
defineProps(['modelValue', 'init'])
const emit = defineEmits(['update:modelValue', 'build', 'remove'])

const update = (e) => {
	emit('update:modelValue', e.target.value)
	emit('build')
}

const remove = () => {
	emit('remove')
}
</script>
