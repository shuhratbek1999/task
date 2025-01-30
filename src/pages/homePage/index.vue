<template>
	<div class="home relative">
		<Header />
		<UserContent />
		<Table :Users="Users" />
		<Chellenj />
	</div>
</template>

<script setup>
import Header from '../../components/Header.vue';
import UserContent from '../../components/UserContent.vue';
import Table from '../../components/Table.vue';
import Chellenj from '../../components/Chellenj.vue';
import CircleAvatar from '/img/circleavatar.png';
import { reactive } from 'vue';
let Users = reactive([
	{
		id: 1,
		apl: 'Apple Inc',
		name: 'Abdulaziz Ketmonov',
		profit: '+45%',
		risk: '1/4',
		coin: 150,
		avatar: CircleAvatar,
	},
	{
		id: 2,
		name: 'Narimon Samadov',
		profit: '+45%',
		apl: 'Apple Inc',
		risk: '1/4',
		coin: 150,
		avatar: CircleAvatar,
	},
	{
		id: 3,
		name: 'Siddiqov Otabek',
		profit: '+60%',
		apl: 'Apple Inc',
		risk: '1/3',
		coin: 500,
		avatar: CircleAvatar,
	},
	{
		id: 4,
		name: 'Botirov Abror',
		profit: '+65%',
		apl: 'Apple Inc',
		risk: '1/7',
		coin: 450,
		avatar: CircleAvatar,
	},
	{
		id: 5,
		name: 'Komilov Bobur',
		profit: '+25%',
		apl: 'Apple Inc',
		risk: '1/5',
		coin: 100,
		avatar: CircleAvatar,
	},
	{
		id: 6,
		name: 'Alimov Sarvar',
		profit: '+55%',
		apl: 'Apple Inc',
		risk: '1/3',
		coin: 250,
		avatar: CircleAvatar,
	},
]);
</script>

<style scoped>
.home {
	background-color: rgba(47, 46, 46, 1);
}
</style>
