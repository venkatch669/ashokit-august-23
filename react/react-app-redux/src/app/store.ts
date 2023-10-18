import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';
import nameReducer from '../features/counter/nameSlice';
import addtocartReducer from '../features/addtocart/addtocartSlice';
import usersReducer from '../features/users/usersSlice';
export const store = configureStore({
  reducer: {
        counter: counterReducer,
        name:nameReducer,
        addtocart:addtocartReducer,
        users:usersReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch