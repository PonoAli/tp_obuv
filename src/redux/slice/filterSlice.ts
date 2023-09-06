import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterSliceState {
  categoryId: number
}

const initialState: FilterSliceState = {
  categoryId: 0
}

const filterSlice = createSlice ({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setFilters(state, action) {
      state.categoryId=Number(action.payload.categoryId);
    }
  }
})

export const {setCategoryId, setFilters} = filterSlice.actions;

export default filterSlice.reducer;