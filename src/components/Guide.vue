<script setup>
import { ref } from 'vue';

const helpDialog = ref(null);
const guideInstructions = ref([
	{ key: 0, imgPath: './src/assets/guide1.png', imgAlt: 'place to hold questions', description: 'Inside the shown box place your questions.' },
	{ key: 1, imgPath: './src/assets/guide2.png', imgAlt: 'question box filled and next question button', description: 'After placing the questions inside the screen should look similar to this. Now press the "Next Question" button.' },
	{ key: 2, imgPath: './src/assets/guide3.png', imgAlt: 'question box filled, random question picked and next question button', description: 'After the question has been picked test yourself and continue pressing the "Next Question" button until you\'re satisfied' }
]);
const guideInstructionsIndex = ref(0);

const incrementGuideInstructionsIndex = () => guideInstructionsIndex.value = (guideInstructionsIndex.value === guideInstructions.value.length - 1)? guideInstructionsIndex.value : guideInstructionsIndex.value + 1;

const decrementGuideInstructionsIndex = () => guideInstructionsIndex.value = (guideInstructionsIndex.value === 0)? 0 : guideInstructionsIndex.value - 1;

</script>	

<template>
	<button class="absolute top-5 left-5 px-6 py-3 rounded-full text-2xl btn-green" @click="helpDialog.showModal()">?</button>
	<dialog ref="helpDialog" class="backdrop:backdrop-blur-sm" @close="guideInstructionsIndex = 0">
		<div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-h-[70%] max-w-5xl p-7 bg-white rounded flex justify-between items-center flex-col">
			<button class="absolute right-3 top-3 px-4 py-2 rounded-full btn-green" @click="helpDialog.close()">X</button>

			<div class="flex justify-center items-center flex-col">
				<img class="w-full h-full" :src="guideInstructions[guideInstructionsIndex].imgPath" :alt="guideInstructions[guideInstructionsIndex].imgAlt">
				<p class="text-center">Step {{ `${guideInstructionsIndex + 1}: ${guideInstructions[guideInstructionsIndex].description}` }}</p>
			</div>

			<div class="w-full mt-5 flex justify-between items-center">
				<button class="float-right px-4 py-3 rounded btn-green" @click="decrementGuideInstructionsIndex">Previous</button>
				<template>
					<div class="w-3 h-3 bg-green-700 rounded-full"></div>
				</template>
				<button class="float-right px-7 py-3 rounded btn-green" @click="incrementGuideInstructionsIndex">Next</button>
			</div>
		</div>
	</dialog>
</template>