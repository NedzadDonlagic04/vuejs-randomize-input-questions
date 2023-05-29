<script setup>

const textareaInputHandler = () => {
	console.log('Textarea');
};

const generateNextQuestion = () => {
	console.log('Click');
};

</script>	

<template>
	<main class="w-[70%] mt-8">
		<header class="mb-8">
			<h1 class="text-center text-3xl">Randomize Questions</h1>
		</header>

		<div>
			<textarea class="w-full p-3 resize-none border-2 border-black rounded focus-visible:border-[3px]" name="questions" id="questions" rows="10"
						@input="textareaInputHandler"></textarea>
			
			<p class="bg-green-200 p-5 rounded" id="result">Randomized Question Goes Here</p>
			
			<button class="mt-4 bg-green-200 float-right p-3 rounded border-2 border-green-700 transition-colors ease-in-out duration-200 hover:bg-green-300"
						@click="generateNextQuestion">
				Next Question
			</button>	
		</div>
	</main>
</template>