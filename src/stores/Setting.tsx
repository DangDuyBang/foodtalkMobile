import {Instance, types} from 'mobx-state-tree';

const SettingStore = types
  .model({
    text: types.optional(types.string, ''),
  })
  .actions(self => {
    const templateFunction = (value: string) => {
      self.text = value;
    };
    return {
      templateFunction,
    };
  })
  .create({});

export default SettingStore;
export type TSettingStore = Instance<typeof SettingStore>;
