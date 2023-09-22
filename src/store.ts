import { configureStore } from '@reduxjs/toolkit/dist/configureStore';

import rootReducer from './reducers'

export const store = configureStore({
    reducer: {},
  })