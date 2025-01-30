import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: () => import('../pages/homePage/index.vue'),
	},
	{
		path: '/idea_create',
		name: 'IdeaPage',
		component: () => import('../pages/ideaPage/index.vue'),
	},
];

const router = new createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
