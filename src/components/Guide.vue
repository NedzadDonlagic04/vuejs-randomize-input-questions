<script setup>
import { ref } from 'vue';

const helpDialog = ref(null);
</script>	

<template>
	<button class="absolute top-5 left-5 px-6 py-3 rounded-full text-2xl btn-green" @click="helpDialog.showModal()">?</button>
	<dialog ref="helpDialog" class="backdrop:backdrop-blur-sm">
		<div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[70%] p-7 bg-white rounded">
			<button class="float-right" @click="helpDialog.close()">X</button>
			<div class="flex justify-center items-center flex-col">
				<img class="w-full h-full" src="./../assets/guide3.png" alt="where to make question input">
				<p class="text-center">Description</p>
			</div>
			<div class="mt-5 flex justify-between items-center">
				<button>Previous</button>
				<button>Next</button>
			</div>
		</div>
	</dialog>
</template>