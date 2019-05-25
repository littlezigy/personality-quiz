<template>
	<div class = 'page'>
		<p class = 'has-text-centered is-size-3'>Your results are...</p>
		<img src = 'http://images.fineartamerica.com/images-medium-large-5/beautiful-african-american-fairy-adriane-j.jpg'/>
		<div class = 'is-size-4'>{{info}}</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return{
			headline: '',
			info: "Waiting for results..."
		}
	},
	methods: {
		showResults: async function() {
			this.info = window.sessionStorage.results;
			console.info("showResults function.");
		},
	},
	mounted() {
		console.log("Created page: Results");
		this.showResults();
	},
	created() {

	}
}
</script>

<style scoped>
img {
	margin: auto;
	width: 50vh;
}
</style>
