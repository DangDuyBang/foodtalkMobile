import React from 'react';
import {SvgProps} from 'react-native-svg';

declare module '*.svg' {
  export const content: React.FC<
    SvgProps & {
      fillSecondary?: string;
    }
  >;
  export default content;
}
