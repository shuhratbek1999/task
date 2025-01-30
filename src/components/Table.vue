<template>
	<div class="tables w-full flex flex-col items-center">
		<div class="tableheader w-full h-16 flex justify-center items-center">
			<ul class="header__list h-full w-9/12 flex items-center justify-around">
				<li class="header__item">
					<a-dropdown :trigger="['click']" placement="bottom">
						<a-button class="custom-button px-4">
							{{ Mont }}
							<font-awesome-icon class="ml-2" :icon="['fas', 'chevron-up']" />
						</a-button>
						<template #overlay>
							<div class="custom-dropdown">
								<div class="year-selector">
									<a-button type="text" @click="prevYear">
										<span class="text-white font-bold">
											<font-awesome-icon :icon="['fas', 'chevron-left']" />
										</span>
									</a-button>
									<span class="year-text">{{ selectedYear }}</span>
									<a-button
										type="text"
										class="text-white font-bold"
										@click="nextYear"
									>
										<font-awesome-icon :icon="['fas', 'chevron-right']" />
									</a-button>
								</div>
								<ul
									class="custom__menu w-full overflow-y-hidden h-28 text-white"
								>
									<li
										class="custom__menu-item pl-5 py-1 cursor-pointer"
										v-for="(month, index) in months"
										:key="index"
										@click="selectMonth(month)"
									>
										{{ month }}
									</li>
								</ul>
							</div>
						</template>
					</a-dropdown>
				</li>
				<li class="header__item header__item-btns flex justify-between">
					<button class="header__btn header__btn-active">Top Traders</button>
					<button class="header__btn">Global Challenge</button>
				</li>
				<li
					class="header__item-square flex justify-center items-center cursor-pointer"
				>
					<font-awesome-icon
						class="text-gray-500"
						:icon="['fas', 'circle-question']"
					/>
					<span class="font-inter font-medium text-sm text-white ml-2"
						>Правила и требования</span
					>
				</li>
			</ul>
		</div>
		<a-table
			class="w-9/12 tables__list rounded-none"
			:columns="columns"
			:data-source="Users"
			:pagination="false"
		>
			<template #bodyCell="{ column, text, record }">
				<template v-if="column.dataIndex === 'name'">
					<div class="user__name flex items-center">
						<img :src="record.avatar" class="mr-2" alt="userAvatar" />
						<a>{{ text }}</a>
					</div>
				</template>
				<template v-if="column.dataIndex === 'coin'">
					<a-dropdown placement="top" :arrow="{ pointAtCenter: true }">
						<div
							class="drop__coin flex items-center"
							@mouseenter="handleHover(record)"
						>
							<a>
								{{ text }}
							</a>
							<span
								class="header__icon ml-1 text-sm flex justify-center items-center"
								><font-awesome-icon
									class="text-xs header__icon-font"
									:icon="['fasl', 'question']"
							/></span>
						</div>
						<template #overlay>
							<a-menu class="drop__menu">
								<a-menu-item class="drop__item w-96">
									<ul
										class="drop__list flex justify-between text-white"
										v-for="(item, index) in handleHoverUser"
										:key="index"
									>
										<li class="drop__list__item">
											<h1>тикет/компания:</h1>
											<span class="text-sm font-inter font-medium">
												{{ item.apl }}
											</span>
										</li>
										<li class="drop__list__item">
											<h1>профит (%):</h1>
											<p class="flex">
												<span class="text-sm font-inter font-medium">
													{{ item.profit }}
												</span>
												<img
													width="18px"
													height="18px"
													:src="TableImg"
													alt="tableImages"
													class="ml-2"
												/>
											</p>
										</li>
										<li class="drop__list__item">
											<h1>Заработано coin</h1>
											<p class="flex">
												<span
													class="text-sm font-inter font-medium mr-1 inline-block"
													>{{ item.coin }}</span
												>
												<img
													:src="coinImg"
													class="w-5 h-5 ml-2"
													alt="coinImg"
												/>
											</p>
										</li>
									</ul>
								</a-menu-item>
							</a-menu>
						</template>
					</a-dropdown>
				</template>
				<template v-if="column.dataIndex === 'profit'">
					<div class="profit__content flex">
						<a class="mr-2">{{ text }}</a>
						<img width="18px" height="18px" :src="TableImg" alt="tableImages" />
					</div>
				</template>
			</template>
		</a-table>
	</div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import TableImg from '/img/table.png';
import coinImg from '/img/coin.png';
const props = defineProps({
	Users: {
		type: Array,
		required: true,
	},
});
const Users = reactive(props.Users);
const selectedYear = ref(2025);
const prev = ref('<');
let Mont = ref('Aprel'),
	handleHoverUser = reactive([]);
const months = [
	'Yanvar',
	'Fevral',
	'Mart',
	'Aprel',
	'May',
	'Iyun',
	'Iyul',
	'Avgust',
	'Sentabr',
	'Oktabr',
	'Noyabr',
	'Dekabr',
];

const columns = reactive([
	{
		title: 'Ранг',
		dataIndex: 'id',
	},
	{
		title: 'Трейдер',
		dataIndex: 'name',
	},
	{
		title: 'Риск/профит',
		dataIndex: 'risk',
	},
	{
		title: 'профит (%)',
		dataIndex: 'profit',
	},
	{
		title: 'coin',
		dataIndex: 'coin',
	},
]);
const prevYear = () => {
	selectedYear.value -= 1;
};
const nextYear = () => {
	selectedYear.value += 1;
};
const selectMonth = month => {
	Mont.value = month;
};
const handleHover = record => {
	handleHoverUser = [];
	handleHoverUser.push(record);
};
</script>

<style scoped>
.tableheader {
	border-top-left-radius: 16px;
	border-top-right-radius: 16px;
}
.tables__list {
	background: rgba(33, 32, 32, 1) !important;
	color: white !important;
}
/* Jadval sarlavha (thead) rangini o'zgartirish */
:deep(.ant-table-thead > tr > th) {
	background: rgba(33, 32, 32, 1) !important;
	color: white !important;
	border-color: rgb(99, 98, 98) !important;
}
/* Jadval satr (tbody) rangini o'zgartirish */
:deep(.ant-table-tbody > tr > td) {
	background: rgba(28, 28, 28, 1) !important;
	color: white !important;
	border-color: rgb(99, 98, 98) !important;
}
/* Yil tanlash paneli */
.year-selector {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2px 10px;
	color: white;
	width: 90%;
	border-radius: 10px;
	background: rgba(255, 255, 255, 0.06) !important;
	margin: 10px 0px;
}

/* Tugmalar styling */
.year-btn {
	color: white !important;
}
.year-btn:hover {
	background: rgba(255, 255, 255, 0.1) !important;
}

/* Yil matni */
.year-text {
	font-weight: bold;
	font-size: 16px;
	color: white;
}

/* Dropdown menyu */
.custom__menu {
	background: rgba(42, 41, 41, 1) !important;
	color: white !important;
}
.custom__menu-item {
	color: rgba(179, 179, 179, 1) !important;
	transition: all 0.3s ease-in-out;
}
.custom__menu-item:hover {
	color: rgba(202, 255, 51, 1) !important;
}
.ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item {
	color: white !important;
}
.custom-dropdown {
	background: rgba(42, 41, 41, 1) !important;
	width: 250px;
	/* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); */
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 170px;
	border-radius: 6px;
}
/* Dropdown menyu */
.custom-menu .ant-dropdown-menu-item {
	color: white !important;
}
.custom-menu .ant-dropdown-menu-item:hover {
	background: rgba(255, 255, 255, 0.1) !important;
}

/* Tugma */
.custom-button {
	background: #333 !important;
	color: white !important;
	border: 1px solid #555 !important;
}
.custom-button:hover {
	background: #444 !important;
}
.header__list {
	background: rgba(26, 26, 26, 0.55) !important;
}
.header__list .header__item-btns {
	width: 382px;
	height: 50px;
	border-radius: 44px;
	background: rgba(33, 32, 32, 1);
	border: 1px solid rgba(47, 46, 46, 1);
}
.header__btn-active {
	width: 188px;
	height: 50px;
	border-radius: 100px;
	background: rgba(42, 41, 41, 1);
	color: rgba(202, 255, 51, 1);
}
.header__btn {
	width: 188px;
	height: 50px;
}
.header__item-square {
	width: 212px;
	height: 38px;
	border-radius: 6px;
	background: rgba(42, 41, 41, 1);
}
.drop__coin:hover .header__icon {
	border: 1.25px solid var(--Primary, rgba(202, 255, 51, 1));
}
.drop__coin:hover .header__icon-font {
	color: rgba(202, 255, 51, 1);
}
.header__icon {
	width: 16px;
	height: 16px;
	border-radius: 50%;
	transition: all 0.5s ease-out;
	border: 1.25px solid black;
	cursor: pointer;
}
.drop__menu {
	background-color: #333 !important;
}
.drop__item a {
	color: rgb(240, 238, 238) !important;
}
/* .coin__question {
	border-radius: 50%;
	overflow: hidden;
}
.coin__question:hover {
	border: 1.25px solid var(--Primary, rgba(202, 255, 51, 1));
} */
</style>
