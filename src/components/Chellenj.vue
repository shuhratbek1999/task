<template>
	<div class="chellenj fixed right-10 bottom-20 flex flex-col items-center">
		<div class="chellenj__header flex items-center mt-2">
			<img :src="chelImg" alt="chelImg" class="chellenj__img w-6 h-6 mr-1" />
			<p class="chellenj__text font-inter font-normal text-xs">
				Оставшееся время до конца челлендж:
			</p>
		</div>
		<div class="chellenj__date w-10/12 my-2">
			<p>
				<span class="text-white"
					>19 <span class="text-gray-400">День</span>
					:
				</span>
				<span class="text-white mx-2"
					>23 <span class="text-gray-400">Час</span></span
				>
				<span class="text-white"
					>: 44 <span class="text-gray-400">Минут</span></span
				>
			</p>
		</div>
		<button
			class="chellenj__btn mt-8 w-full h-14 flex items-center"
			@click="IdeaCreate"
		>
			<span class="chellenj__btn-circle flex justify-center items-center m-1">
				<font-awesome-icon class="text-notColor" icon="fa-plus" />
			</span>
			<span class="ml-4 font-inter font-semibold"> Создать инвест.идею </span>
		</button>
	</div>
</template>

<script setup>
import chelImg from '/img/clock.png';
import { useRouter } from 'vue-router';
const router = useRouter();
const IdeaCreate = () => {
	router.push('/idea_create');
};
</script>

<style scoped>
.chellenj__btn {
	background: var(--Primary, rgba(202, 255, 51, 1));
	border-radius: 1200px;
}
.chellenj__btn-circle {
	width: 48px;
	height: 48px;
	background: rgba(40, 40, 40, 1);
	border-radius: 50%;
}
.chellenj {
	width: 259px;
	height: 156px;
	border-radius: 16px 16px 30px 30px;
	background: rgba(40, 40, 40, 1);
	box-shadow: 0px 2px 60px 0px rgba(0, 0, 0, 0.25);
}
.chellenj .chellenj__text {
	width: 131px;
	color: var(--Grey, rgba(179, 179, 179, 1));
}
</style>
