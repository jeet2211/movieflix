// src/redux/store.ts
// import { configureStore } from '@reduxjs/toolkit';
// import productReducer from './slices/productSlice';

// const store = configureStore({
//   reducer: {
//     product: productReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice';

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
