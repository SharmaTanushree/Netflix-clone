import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gptSlice',
    initialState: {
        showGptSearch: false,
        movieResults: [],
        movieNames: ""
    },
    reducers:{
        // eslint-disable-next-line no-unused-vars
        toggleGptSearch: (state,action)=>{
            state.showGptSearch = !state.showGptSearch
        },
        setMovieResults: (state, action) =>{
            const {movieResults, movieNames} = action.payload;
            state.movieResults = movieResults;
            state.movieNames = movieNames;
        }
    }
});

export const { toggleGptSearch, setMovieResults } = gptSlice.actions;
export default gptSlice.reducer;