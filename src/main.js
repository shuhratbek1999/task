import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faArrowAltCircleLeft,
	faBell,
	faChevronLeft,
	faChevronRight,
	faChevronUp,
	faCircleQuestion,
	faHome,
	faPlus,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Antd from 'ant-design-vue';
// import 'ant-design-vue/';
import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion';
import { createApp } from 'vue';
import App from './App.vue';
import './css/style.css';
import router from './router';
library.add(
	faUser,
	faHome,
	faBell,
	faArrowAltCircleLeft,
	faChevronUp,
	faChevronLeft,
	faChevronRight,
	faCircleQuestion,
	faQuestion,
	faPlus
);
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(Antd);
app.use(router);
app.mount('#app');
