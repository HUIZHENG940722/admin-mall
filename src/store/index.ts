import {createStore} from 'vuex';
import adminStore from "@/store/modules/adminStore";

const store = createStore({
    modules: {
        adminStore,
    },
});

export default store;