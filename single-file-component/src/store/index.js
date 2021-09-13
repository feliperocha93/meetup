import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    balance: 0,
    tax: 0.5,
  },
  getters: {
    balance: (state) => state.balance.toFixed(2),
    balanceWithTax: (state) =>
      ((state.balance * (100 - state.tax)) / 100).toFixed(2),
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
      commit("deposit", +value);
    },
    withdraw(context, value) {
      if (+value > context.getters.balanceWithTax) {
        return;
      }
      const valueWithTax = (+value * (100 + context.state.tax)) / 100;
      context.commit("withdraw", valueWithTax);
    },
  },
});
