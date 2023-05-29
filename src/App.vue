<script setup>
import { ref } from 'vue';
import { shuffleArray, removeGivenItemsFromArray } from './functions/arrayFunctions';

const shuffledQuestions = ref([]);
const questionsInput = ref(null);
const showQuestion = ref(false);

const textareaInputHandler = () => {
	const questions = questionsInput.value.value.split('\n');

	shuffledQuestions.value = removeGivenItemsFromArray(shuffleArray(questions), '');

	showQuestion.value = false;
};

const generateNextQuestion = () => {
	if(shuffledQuestions.value.length === 0) return;

	if(!showQuestion.value) showQuestion.value = true;
	else {
		shuffledQuestions.value.shift();

		if(shuffledQuestions.value.length === 0) {
			textareaInputHandler();
			showQuestion.value = true;
		}
	}
}

</script>	

<template>
	<main class="w-[70%] mt-8">
		<header class="mb-8">
			<h1 class="text-center text-3xl">Randomize Questions</h1>
		</header>

		<div>
			<textarea class="w-full p-3 resize-none border-2 border-black rounded focus-visible:border-[3px]" name="questions" id="questions" rows="10"
						ref="questionsInput" @input="textareaInputHandler"></textarea>
			
			<p v-if="showQuestion" class="bg-green-200 p-5 rounded" id="result">{{ shuffledQuestions[0] }}</p>
			
			<button class="mt-4 bg-green-200 float-right p-3 rounded border-2 border-green-700 transition-colors ease-in-out duration-200 hover:bg-green-300"
						@click="generateNextQuestion">
				Next Question
			</button>	
		</div>
	</main>
</template>