import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IUsers {
  userData: Object,
  userDataLoading:boolean,
  isSuccess?:boolean
}

const initialState: IUsers = {
    userData: {},
    userDataLoading:false
}

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetch('https://dummyjson.com/users').then((res)=> res.json());
    console.log(response);
    return response;
  }
)


export const nameSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
        // state.val = action.payload
    },
  },
  extraReducers:(builder)=>{
    builder
    .addCase(fetchUsers.pending, (state) => {
      state.userDataLoading=true;
      state.isSuccess=true
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.userDataLoading=false;
      state.isSuccess=true;
    })
    .addCase(fetchUsers.rejected, (state, action) => {
      state.userDataLoading=false;
      state.isSuccess=false
    });
  }
})


// Action creators are generated for each case reducer function
export const { updateName } = nameSlice.actions

export default nameSlice.reducer