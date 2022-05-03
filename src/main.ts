import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import store from '@/store/index';

createApp(App).use(router).use(store).use(ElementPlus, {locale: zhCn, size: 'small', zIndex: 3000})
    .mount('#app')
