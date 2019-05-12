<template>
	<div>
		<p>Your results are...</p>
		<div>{{info}}</div>
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
