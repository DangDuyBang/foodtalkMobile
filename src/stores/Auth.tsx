import {Instance, types} from 'mobx-state-tree';

const AuthStore = types
  .model({
    isLogined: types.optional(types.boolean, false),
  })
  .actions(self => {
    const setIsLogined = (value: boolean) => {
      self.isLogined = value;
    };
    return {
      setIsLogined,
    };
  })
  .create({});

export default AuthStore;
export type TTaskStore = Instance<typeof AuthStore>;
