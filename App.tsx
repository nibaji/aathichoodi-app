import React from 'react';
import {Provider} from 'react-redux';

import StackedNavigation from './src/Navigation/stackedNavigation';
import InfoModal from './src/Components/InfoModal';

import store from './src/Redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <StackedNavigation />
      <InfoModal />
    </Provider>
  );
}
