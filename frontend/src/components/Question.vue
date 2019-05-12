<template>
  <div id = 'question'>
    <p>{{question}}</p>
    <ol>
      <li v-for = 'answer in answers' :key = 'answer'>
        <input type = 'radio' name = 'selected-answer' v-model = 'selected'>{{answer}}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return{
      answer: '',
      selected: ''
    }
  },
  props: ['question', 'answers'],
}
</script>


<style scoped>
.question {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: grey 1px solid;
  border-radius: 15px;
}
ol {
  list-style-type: lower-alpha;
}
</style>
