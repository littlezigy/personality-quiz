<template>
	<div class = 'page'>
		<p class= 'text-big'>Take this quiz.</p>
		<div id = 'quiz'>
			<button class = 'button is-dark has-text-white-ter' @click = 'goBack' :disabled = 'questionindex==0'>Previous Question</button>
			<p class = 'has-text-centered is-size-3'>{{data.question}}</p>
			<ol>
				<li v-for = 'answer in data.answers' :key = 'answer'>
					<input type = 'radio' name = 'selected-answer' v-model = 'selected' :value = 'answer'>{{answer}}
				</li>
			</ol>
			<div id = 'action'>
				<button id = 'done' class = 'button has-text-white-ter is-success' v-if='submit' @click = 'finishQuiz' :disabled = 'selected===null'>Submit</button>
				<button id = 'continue' class = 'is-centered is-primary button' v-else @click = 'nextQuestion' :disabled = 'selected===null'>Next Question</button>
			</div>
		</div>
	</div>
</template>

<script>
import {api} from '../gateways/api'
export default {
	data() {
		return {
			dataset: [],
			data: {
				question: '', answers: []
			},
			questionindex: 0,
			submit: false,

			answer: '',
			selected: null,
			quizSubmit: {},
		}
	},
	methods: {
		getQuestions: async function() {
			console.group("=========================\nGetting Questions\n=========================");
			var totaldata = await api.get('/start-quiz');
			console.groupEnd();

			this.dataset = totaldata.data;
			this.data = totaldata.data[0];
		},
		goBack: function() {
			this.questionindex -= 1;
			this.selected = this.quizSubmit[this.questionindex];
			console.info("Question", this.questionindex + 1);
			this.data = this.dataset[this.questionindex];
		},
		nextQuestion: async function() {
			//this.getKeyByValue()
			this.quizSubmit[this.questionindex] = this.selected;
			this.questionindex+=1;
			if(this.questionindex == this.dataset.length - 1) this.submit = true;	console.info(this.submit);

			console.info("Question", this.questionindex + 1);
			this.data = this.dataset[this.questionindex];
			this.selected = null;
		},
		finishQuiz: async function() {
			this.quizSubmit[this.questionindex] = this.selected;
			
			console.info("Rerouting...");
			var results = await api.post('/results', this.quizSubmit);
			window.sessionStorage.results = results.data;
			this.$router.push({path:'/results'});
		},
		getKeyByValue: function(object, value) {
  		return Object.keys(object).find(key => object[key] === value);
		}
	},
	created() {
		this.getQuestions();
	}
}
</script>

<style scoped>
ol {
	list-style-type: lower-alpha;
}
#quiz {
	display: flex;
	flex-direction: column;
	justify-content: center;
	border: 1.5px solid gray;
	width: 70vw;
	min-height: 45vh;
	padding: 3em;
}
.page {
	min-height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
button {
	width: 15em;
}
#action {
	display: flex;
	justify-content: center;
}
#done {
	margin-left: auto;
}
</style>