import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })],
    state: {
      user: {
        loggedIn: false,
        data: null, //holds information about logged-in user?
      },
      menu: {
        data: null,
      },
      hawker: {
        uid: null,
      },
      hawkerhp: {
        hpnumber: null,
      }
    },
    //provide a way of accessing data stored in state   
    getters: { 
      user(state){
        return state.user
      },
      menuData(state){
        return state.menu.data;
      },
      uid(state){
        return state.hawker.uid;
      },
      hawkerhp(state) {
        return state.hawkerhp.hpnumber;
      }
    },
    //allows us to make changes to our state
    mutations: { 
      SET_LOGGED_IN(state, value) {
        state.user.loggedIn = value;
      },
      SET_USER(state, data) {
        state.user.data = data;
      },
      setStallEntered(state, data) {
        state.menu.data = data;
      },
      setUid(state, uid){
        state.hawker.uid = uid;
      },
      setHpNumber(state, hpnumber) {
        state.hawkerhp.hpnumber = hpnumber;
      }
    },
    //commits the state after mutating.
    actions: {
      fetchUser({ commit }, user) {
        commit("SET_LOGGED_IN", user !== null);
        if (user) {
          commit("SET_USER", {
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
          });
          console.log(user.uid);
        } else {
          commit("SET_USER", null);
        }
      }
    }
  });