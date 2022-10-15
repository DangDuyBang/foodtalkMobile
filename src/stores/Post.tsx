import {Instance, types} from 'mobx-state-tree';

const PostStore = types
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

export default PostStore;
export type TTaskStore = Instance<typeof PostStore>;
