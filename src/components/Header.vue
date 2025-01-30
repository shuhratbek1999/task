<script setup>
import { reactive, ref } from 'vue';
import headerLogo from '/img/headerLogo.svg';
import newsImg from '/img/news.png';
import tgImg from '/img/tg.png';
import historyImg from '/img/history.png';
import userImg from '/img/user.png';
import arrImg from '/img/arr.png';
import groupsImg from '/img/groups.png';
let MenuList = reactive([
	{
		title: 'Новости',
		icon: newsImg,
	},
	{
		title: 'Сообщество',
		icon: tgImg,
	},
	{
		title: 'Обучение',
		icon: userImg,
	},
	{
		title: 'Последняя активность',
		icon: historyImg,
	},
]);
</script>

<template>
	<header class="header w-full flex flex-col items-center justify-center h-24">
		<ul
			class="header__list flex items-center justify-between w-11/12 font-inter"
		>
			<li class="header__item">
				<ul class="header__submenu flex">
					<li class="header__submenu-item flex items-center">
						<img
							:src="headerLogo"
							alt="headerLogo"
							class="header__submenu-img"
							width="42px"
							height="42px"
						/>
						<h1 class="text-white text-xl font-medium ml-2">
							Trading Platform
						</h1>
						<!-- <font-awesome-icon icon="user" /> -->
					</li>
				</ul>
			</li>
			<li class="header__item">
				<ul class="header__submenu flex">
					<li
						class="header__submenu-items h-14 flex justify-center items-center py-1 pr-3 pl-1.5 rounded-xl mx-1"
						v-for="(item, index) in MenuList"
						:key="index"
					>
						<span
							class="header__list-img flex justify-center items-center mr-2"
						>
							<span
								class="header__list-imgcircle flex justify-center items-center"
							>
								<img class="h-4.5 w-4.5" :src="item.icon" alt="icons" />
							</span>
						</span>
						<span class="text-listtext font-inter font-medium text-base">{{
							item.title
						}}</span>
					</li>
				</ul>
			</li>
			<li class="header__item">
				<ul class="header__submenu flex">
					<li
						class="header__submenu-item header__list-img mr-3 w-9 h-9 rounded-full flex justify-center items-center relative"
					>
						<span
							class="header__list-imgcircle flex justify-center items-center"
							><font-awesome-icon class="text-notColor" icon="fa-bell"
						/></span>
						<span
							class="submenu__number w-4 h-4 rounded-full bg-notColor text-xx inline-block text-center absolute top-0 -right-1"
							>2</span
						>
					</li>
					<li
						class="header__submenu-itemselect flex items-center justify-around w-40 h-11"
					>
						<img :src="groupsImg" alt="images" />
						<span class="text-gray-200 font-semibold font-inter"
							><span class="text-white">75/</span>100</span
						>
						<img
							:src="arrImg"
							class="header__right__arrow-img"
							alt="header__right__arrow"
						/>
					</li>
				</ul>
			</li>
		</ul>
	</header>
</template>

<style scoped>
.header {
	background-color: rgba(47, 46, 46, 1);
	backdrop-filter: blur(120px);
}
.header__submenu-items {
	background-color: rgba(28, 28, 28, 1);
	border: 1px solid rgba(38, 38, 38, 1);
}
.header__submenu-itemselect {
	border: 1px solid rgba(47, 46, 46, 1);
	background: rgba(33, 32, 32, 1);
	border-radius: 100px;
}
.header__list-img {
	width: 48px;
	height: 48px;
	border-radius: 52px;
	padding: 6px;
	gap: 7.5px;
	background: linear-gradient(
		180deg,
		rgba(202, 255, 51, 0.05) 0%,
		rgba(202, 255, 51, 0) 100%
	);
}
.header__list-imgcircle {
	width: 36px;
	height: 36px;
	border-radius: 37.5px;
	border-width: 0.75px;
	border-image-source: linear-gradient(
		180deg,
		rgba(202, 255, 51, 0.2) -173.65%,
		rgba(202, 255, 51, 0) 87.22%
	);
	background: linear-gradient(
		180deg,
		rgba(202, 255, 51, 0.1) -66.22%,
		rgba(202, 255, 51, 0) 85.46%
	);
}
</style>
