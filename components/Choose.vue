<template>
<div class="max-w-2xl mx-auto">
	<p class="mb-10">Choose your template</p>
	<p>Note: Only "Plan Your Day" available at the moment.</p>
	<div class="grid sm:grid-cols-3 gap-5 my-10">
		<NuxtLink v-for="(item, index) in templates" :to="item.path"
			class="p-5 cursor-pointer rounded-md border shadow-md hover:shadow-lg"
			:class="item.path ? '': 'bg-gray-200'"
			@click="pick(index)"
			@mouseover="hover(index)"
			>{{ item.title }}</NuxtLink>
	</div>
	<p class="mb-5">Preview:</p>
	<img class="rounded-md border" :src="preview" alt="">
</div>
</template>

<script setup>
const preview = ref()

const templates = ref([
	{
		title: 'Plan Your Day',
		path: '/templates/plan_your_day',
		preview: '/PLAN_YOUR_DAY.png'
	},
	{
		title: 'Plan Your Meals'
	},
	{
		title: 'Plan Your Budget'
	}
])

const pick = (index) => {
	console.log('pick', index)
}

const hover = (index) => {
	preview.value = templates.value[index].preview
}
</script>

