import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isVerifiedList: true
}

const staffSlice = createSlice({
    name: "staff",
    initialState,
    reducers: {
        setIsVerifiedList: (state)=>{
            state.isVerifiedList = !state.isVerifiedList
        }
    }
})

export const { setIsVerifiedList } = staffSlice.actions
export default staffSlice.reducer