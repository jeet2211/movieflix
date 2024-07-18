import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import movieReducer from './slices/moviesSlice';
import authReducer from './slices/authSlice';
import rootSaga from '../redux/sagas/root'; 

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: movieReducer,
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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
