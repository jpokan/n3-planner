export default class PlanYourDayTemplate {
	constructor() {
		return [
			{
				id: 'brain-dump',
				title: "BRAIN DUMP",
				question: "What tasks are on your mind? Write everything!",
				maxSize: null,
				type: 'list-disc',
				answers: [{ text: '' }]
			},
			{
				id: 'daily-highlights',
				title: "DAILY HIGHLIGHTS",
				question: "What are the top three priorities or task you want to accomplish today?",
				maxSize: 3,
				type: 'list-decimal',
				answers: [{ text: '' }, { text: '' }, { text: '' }]
			},
			{
				id: 'might-do-list',
				title: "MIGHT-DO LIST",
				question: "What else you might do today?",
				maxSize: null,
				type: 'list-disc',
				answers: [{ text: '' }]
			},
			{
				id: 'todays-intention',
				title: "TODAY'S INTENTION",
				question: "What mindset or attitude do you want to carry with you throughout the day?",
				maxSize: 1,
				type: 'list-disc',
				answers: [{ text: '' }]
			}
		]
	}
}
