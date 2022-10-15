/**
 * Define screen's name and screen's params
 */
import {NavigatorScreenParams} from '@react-navigation/native';

export type TRootParamsList = {
  AuthStack: TAuthStackParamsList;
  MainStack: TMainStackParamsList;
};

export type TAuthStackParamsList = {
  LogInScreen: undefined;
  SignUpScreen: undefined;
  ForgotPasswordScreen: undefined;
};

export type TMainStackParamsList = {
  MainTab: NavigatorScreenParams<TMainTabParamsList>;
};

export type TMainTabParamsList = {
  HomeScreen: undefined;
  ExploreScreen: undefined;
  NotifyScreen: undefined;
  AccountScreen: undefined;
};
