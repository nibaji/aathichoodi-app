import {configureStore} from '@reduxjs/toolkit';
import AppInfoVisibility from './appInfo';

const store = configureStore({
  reducer: {
    appInfoVisibility: AppInfoVisibility,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;
