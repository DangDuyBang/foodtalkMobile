import TabHome from './icons_svg/tab-home.svg';
import TabExplore from './icons_svg/tab-explore.svg';
import TabNotify from './icons_svg/tab-notify.svg';
import TabAccount from './icons_svg/tab-account.svg';

export const iconList = {
  'tab-home': TabHome,
  'tab-explore': TabExplore,
  'tab-notify': TabNotify,
  'tab-account': TabAccount,
};

export type IconTypes = keyof typeof iconList;
