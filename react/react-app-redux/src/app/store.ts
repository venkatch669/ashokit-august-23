import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';
import nameReducer from '../features/counter/nameSlice';
import addtocartReducer from '../features/addtocart/addtocartSlice';
export const store = configureStore({
  reducer: {
        counter: counterReducer,
        name:nameReducer,
        addtocart:addtocartReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch