<template>
	<div class="idea h-screen">
		<Header />
		<div class="idea__tabs flex flex-col items-center">
			<div class="ides__titles flex w-10/12 my-4">
				<h1
					class="idea__title mr-3 idea__titles-active text-xl font-inter"
					@click="Tabs('invest')"
				>
					Создать инвест.идею
				</h1>
				<h1
					class="idea__title ml-3 text-xl font-inter font-medium"
					@click="Tabs('drafts')"
				>
					Мои черновики
				</h1>
			</div>
			<div class="idea__content w-full">
				<IdeaForm v-if="FormShow" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Header from '../../components/Header.vue';
import IdeaForm from '../../components/IdeaForm.vue';
let FormShow = ref(true);
const Tabs = () => {};
</script>

<style scoped>
.idea__tabs {
	background: rgba(47, 46, 46, 1);
	border-top: 1px solid rgb(119, 118, 118);
}
.idea {
	background: rgba(47, 46, 46, 1);
}
.ides__titles h1:nth-child(2) {
	color: var(--Grey, rgba(179, 179, 179, 1));
}
.idea__titles-active {
	color: white;
	font-weight: 600;
	padding-bottom: 5px;
	border-bottom: 3px solid rgba(202, 255, 51, 1);
}
</style>
