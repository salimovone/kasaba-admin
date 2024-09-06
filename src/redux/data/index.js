import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    professions: []
}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        updateProfessions: (state, {payload}) => {
            state.professions = payload
        } 
    }
})

export const {updateProfessions} = dataSlice.actions
export default dataSlice.reducer