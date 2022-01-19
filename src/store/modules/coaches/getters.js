export default {
    coaches(state) {
        return state.coaches;
    },
    hasCoaches(state){
        return state.coaches && state.coaches.length > 0;
    },
    isCoach(state, getters, rootState, rootGetters){
        const coaches = getters.coaches;
        const userId = rootGetters.userId;
        console.log('Coaches are : ', coaches);
        return coaches.some(coach => coach.id == userId);
    },
    shouldUpdate(state){
       // console.log('Last Fetch', state); 
       // return true;
      const lastFetch = state.lastFetch;
       if (!lastFetch) {
           return true;
       }
       const currentTimeStamp = new Date().getTime();
       return (currentTimeStamp - lastFetch) / 1000 > 60;
       // means more than a minute ago
       
    },
};