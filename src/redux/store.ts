<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import movieReducer from './slices/moviesSlice';
import authReducer from './slices/authSlice';
import rootSaga from '../redux/sagas/root'; 

const sagaMiddleware = createSagaMiddleware();
=======
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
>>>>>>> origin/master

const store = configureStore({
  reducer: {
    movies: movieReducer,
<<<<<<< HEAD
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false, 
    }).concat(sagaMiddleware),
});

// Run the root saga
sagaMiddleware.run(rootSaga);

=======
  },
});

>>>>>>> origin/master
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
