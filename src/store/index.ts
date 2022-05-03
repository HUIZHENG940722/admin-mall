import {createStore} from 'vuex';
import admin from "@/store/modules/admin";

const store = createStore({
    modules: {
        admin,
    },
});

export default store;