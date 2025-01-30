<template>
	<div class="content flex justify-center py-2">
		<ul class="content__list flex w-9/12">
			<li
				class="content__item relative p-5 mx-2"
				v-for="(item, index) in Users"
				:key="index"
			>
				<h1
					class="content__item-title uppercase font-inter font-medium text-base"
				>
					{{ item.worth }}
				</h1>
				<div
					class="content__user-info flex my-2 border-b-0.1 w-1/2 pb-3 border-gray-400"
				>
					<img :src="item.user_avatar" alt="" class="user__avatar mr-2" />
					<div class="content__user-name">
						<p class="font-inter text-base">{{ item.name }}</p>
						<p>{{ item.email }}</p>
					</div>
				</div>
				<div
					class="content__protif-risk w-1/2 flex justify-between font-inter font-medium"
				>
					<p class="text-gray-300" v-if="item.apl">
						AAPL <br />
						<span class="text-white">{{ item.apl }}</span>
					</p>
					<p class="text-gray-300">
						профит: <br />
						<span class="text-white">{{ item.profit }}</span>
					</p>
					<p v-if="item.risk" class="text-gray-300">
						Риск/профит: <br />
						<span class="text-white">{{ item.risk }}</span>
					</p>
				</div>
				<button class="content__btn">
					Просмотр инвест.идея
					<span>></span>
				</button>
				<img
					:src="item.img"
					alt="cup"
					class="content__img absolute right-0 top-0"
				/>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { reactive } from 'vue';
import userAvatar from '/img/avatar.png';
import userAvatar2 from '/img/avatar1.png';
import Rocket from '/img/rocket.png';
import cup from '/img/cup.png';
let Users = reactive([
	{
		worth: 'best trader',
		name: 'Abdulaziz Ketmonov',
		email: '@marketsniper',
		profit: '+45%',
		risk: '1/4',
		coin: 150,
		user_avatar: userAvatar,
		img: cup,
	},
	{
		worth: 'best idea',
		name: 'Narimon Samadov',
		email: '@king1212',
		profit: '+45%',
		apl: 'Apple Inc',
		user_avatar: userAvatar2,
		img: Rocket,
	},
]);
</script>

<style scoped>
.content {
	border-top: 1px solid gray;
}
.content__item {
	width: 527px;
	height: 261px;
	border-radius: 32px;
	background: rgba(33, 32, 32, 1);
	border: 1.5px solid;
	border-image-source: linear-gradient(
		88.23deg,
		rgba(255, 255, 255, 0) -22%,
		rgba(255, 255, 255, 0.1) 100%
	);
}
.content__item-title {
	color: var(--Primary, rgba(202, 255, 51, 1));
}
.content__user-name p:nth-child(2) {
	color: var(--Grey, rgba(179, 179, 179, 1));
}
.content__user-name p:nth-child(1) {
	color: white;
	font-weight: 500;
	font-size: 16px;
}
.content__btn {
	width: 203px;
	height: 40px;
	border-radius: 100px;
	background: rgba(255, 255, 255, 0.06);
	font-weight: 500;
	font-size: 14px;
	color: var(--Primary, rgba(202, 255, 51, 1));
	margin: 10px 0px;
}
</style>
