import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    balance: 0,
    tax: 0.5,
  },
  getters: {
    balance: (state) => state.balance,
    balanceWithTax: (state) => state.balance * (state.tax / 100),
  },
  mutations: {
    deposit(state, value) {
      state.balance += value;
    },
    withdraw(state, value) {
      state.balance -= value;
    },
  },
  actions: {
    deposit({ commit }, value) {
      commit("deposit", value);
    },
    withdraw(context, value) {
      if (value > context.state.balance) {
        return;
      }
      context.commit("withdraw", value);
    },
  },
});
