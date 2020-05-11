import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    total: 90000000000,
  },
  mutations: {
    pushItem(state, payload) {
      const index = state.items.findIndex(item => item.id === payload.id);
      if (index >= 0) {
        state.items[index] = payload;
      } else {
        state.items.push(payload);
      }
      return state.items;
    },
    spliceItem(state, payload) {
      const index = state.items.findIndex(item => item.id === payload.id);
      state.items.splice(index, 1);
      return state.items.push(payload);
    },
  },
  actions: {
    addItem(context, payload) {
      context.commit('pushItem', payload);
    },
    removeItem(context, payload) {
      context.commit('spliceItem', payload);
    },
  },
  getters: {
    cartItems(state) {
      return state.items;
    },
    cartTotal(state, getters) {
      let total = 0;
      getters.cartItems.forEach((item) => {
        total += item.price * item.quantity;
      });
      return state.total - total;
    },
  },
});
