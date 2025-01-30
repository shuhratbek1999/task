<template>
	<div class="form flex py-5 justify-around">
		<div class="form__content w-2/12">
			<div
				class="form__content-info w-10/12 flex flex-col items-center justify-center"
			>
				<div
					class="form__content_list text-white w-10/12 my-2 border-b-0.1 last:border-b-0 pb-2 flex justify-between items-center"
					v-for="(item, index) in investitsiya"
					:key="index"
				>
					<div class="list__circle" v-if="item.color == 'grey'">
						<span
							class="w-3 h-3 inline-block rounded-full"
							:class="['bg-gray-500']"
						></span>
					</div>
					<div class="list__circle" v-if="item.color == 'red'">
						<span
							class="w-3 h-3 inline-block rounded-full"
							:class="['bg-red-500']"
						></span>
					</div>
					<div class="list__circle" v-if="item.color == 'yellow'">
						<span
							class="w-3 h-3 inline-block rounded-full"
							:class="['bg-notColor']"
						></span>
					</div>
					<h1>
						<p>{{ item.title }}</p>
						<p class="text-gray-400">{{ item.name }}</p>
					</h1>
					<p class="form__price">{{ item.price }} $</p>
				</div>
			</div>
		</div>
		<form class="w-7/12">
			<div class="form__title w-10/12">
				<label class="inline-block" for="name">Тикер, компания *</label> <br />
				<input
					class="w-full h-12"
					type="text"
					value="AAPL"
					v-model="data.name"
				/>
			</div>
			<div class="form__title flex justify-between w-10/12 my-4">
				<div class="form__prices w-91">
					<label for="name">Точка входа *</label>
					<input
						class="w-full h-12"
						type="number"
						value="AAPL"
						v-model="data.price"
					/>
				</div>
				<div class="form__prices w-91">
					<label for="name">Точка выхода *</label>
					<input
						class="w-full h-12"
						type="number"
						value="AAPL"
						v-model="data.price_second"
					/>
				</div>
			</div>
			<div class="form__title flex justify-between w-10/12">
				<div class="form__prices w-91">
					<label for="name">Стоп-лосс *</label>
					<input
						class="w-full h-12"
						type="number"
						value="AAPL"
						v-model="data.loss"
					/>
				</div>
				<div class="form__prices w-91">
					<label for="name">Купон *</label>
					<input
						class="w-full h-12"
						type="number"
						value="AAPL"
						v-model="data.kupon"
					/>
				</div>
			</div>
			<div class="form__buttons w-10/12 my-10 flex justify-end">
				<button
					class="form__btn form__btn-grey rounded-lg font-sans text-gray-300 mr-2"
				>
					Сохранить как черновик
				</button>
				<button class="form__btn form__btn-yellow rounded-lg font-sans ml-1">
					Создать
				</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { reactive, ref } from 'vue';
let data = reactive({
	name: '',
	price: 0,
	price_second: 0,
	loss: 0,
	kupon: 0,
});
let investitsiya = reactive([
	{
		color: 'yellow',
		title: 'AAPL',
		name: 'Apple Inc',
		price: 135,
	},
	{
		color: 'red',
		title: 'AAPL',
		name: 'Apple Inc',
		price: 135,
	},
	{
		color: 'grey',
		title: 'AAPL',
		name: 'Apple Inc',
		price: 135,
	},
	{
		color: 'yellow',
		title: 'AAPL',
		name: 'Apple Inc',
		price: 135,
	},
]);
</script>

<style scoped>
.form__content-info {
	width: 241px;
	height: 292px;
	border-radius: 12px;
	background: rgba(42, 41, 41, 1);
	border: 1px solid rgba(47, 46, 46, 1);
}
.form__title input {
	background: rgba(33, 32, 32, 1);
	outline: none;
	text-indent: 10px;
	border-radius: 8px;
	color: white;
}
.form__title input:nth-child(1) {
	width: 740px !important;
}
.form {
	background: rgba(47, 46, 46, 1);
}
label {
	color: var(--Grey, rgba(179, 179, 179, 1));
	margin-bottom: 5px;
}
.form__btn {
	width: 291px;
	height: 52px;
	background: rgba(40, 40, 40, 1);
}
.form__btn-yellow {
	background: var(--Primary, rgba(202, 255, 51, 1));
	color: black;
	font-weight: 600;
}
</style>
