import { store } from "quasar/wrappers";
import {Actions, Getters, createStore, createComposable, Module, Mutations} from "vuex-smart-module";
import { paletteStore } from "src/store/paletteStore"

class RootState {
}

class RootGetters extends Getters<RootState> {
}

class RootMutations extends Mutations<RootState> {
}

class RootActions extends Actions<RootState, RootGetters, RootMutations, RootActions> {
}

export const root = new Module({
  state: RootState,
  getters: RootGetters,
  mutations: RootMutations,
  actions: RootActions,
  modules: {
    paletteStore
  }
});
export default store( function() {
  const rootStore = createStore(root, {
    strict: !!process.env.DEBUGGING,
  });
  return rootStore;
})
export const useStore = createComposable(root);
