import {POEM, POEMS_LIST} from './screens';
import {poemType} from './poem';

export type RootStackParamList = {
  [POEMS_LIST]: undefined;
  [POEM]: {
    title: string;
    poem: poemType;
  };
};
