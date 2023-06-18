import {POEM, POEMS_LIST} from './screens';

export type RootStackParamList = {
  [POEMS_LIST]: undefined;
  [POEM]: {
    poemNumber: number;
  };
};
