import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';
import requestsModules from './modules/requests/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requestsModules,
        auth: authModule
    }
    
   
});

export default store;