import {configureStore} from '@reduxjs/toolkit';
import AppInfoVisibility from './appInfo';

const store = configureStore({
  reducer: {
    appInfoVisibility: AppInfoVisibility,
  },
});

export default store;
