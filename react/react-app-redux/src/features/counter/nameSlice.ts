import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IName {
  val: string
}

const initialState: IName = {
    val: 'ankit'
}

export const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
        state.val = action.payload
    },
  },
})


// Action creators are generated for each case reducer function
export const { updateName } = nameSlice.actions

export default nameSlice.reducer