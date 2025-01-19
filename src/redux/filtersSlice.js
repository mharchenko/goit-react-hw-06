

import { createSlice } from "@reduxjs/toolkit"

        
const initialState = {
    filters: {
		name: "",
	}

}

const filtersSlice = createSlice({
    name:'filters',
    initialState,
    reducers:{

        changeContact:(state, action)=> {
            state.name=action.payload;
        },
    }
})

export const {changeContact} = filtersSlice.actions
export const  filtersReducer = filtersSlice.reducer;
// export const selectFilter = (state) => state.filters.name;