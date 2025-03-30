import { createSlice } from "@reduxjs/toolkit";

const configSLice = createSlice({
    name: 'configSlice',
    initialState: {
        lang: 'en'
    },
    reducers:{
        changeLanguage : (state, action)=>{
            state.lang = action.payload;
        }
    }
});

export default configSLice.reducer;
export const { changeLanguage } = configSLice.actions;