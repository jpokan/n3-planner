<template>
	<SectionTitle title="Plan Your Day" />
	<div class="my-10 border p-5 rounded-xl">
		<div v-for="item in fields">
			<SectionH2 :title="item.title" />
			<SectionQuestion :text="item.question" />
			<SectionAnswer :maxSize="item.maxSize" />
		</div>
	</div>
</template>

<script setup>
const fields = [
	{
		title: "BRAIN DUMP",
		question: "What tasks are on your mind? Write everything!",
		maxSize: null,
	},
	{
		title: "DAILY HIGHLIGHTS",
		question: "What are the top three priorities or task you want to accomplish today?",
		maxSize: 3,
	},
	{
		title: "MIGHT-DO LIST",
		question: "What else you might do today?",
		maxSize: null,
	},
	{
		title: "TODAY'S INTENTION",
		question: "What is your purpose for today? Keep it short and simple.",
		maxSize: 1,
	}
]
</script>
