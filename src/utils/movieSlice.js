import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMoviesList :null,
        movieTrailer : null,
        popularMoviesList: null
    },
    reducers: {
        addNowPlayingMovieList: (state, action)=>{
            state.nowPlayingMoviesList = action.payload;
        },

        addMovieTrailer: (state, action) =>{
            state.movieTrailer = action.payload;
        },

        addPopularMoviesList:(state, action)=>{
            state.popularMoviesList = action.payload;
        }
    }
});

export default movieSlice.reducer;
export const {addNowPlayingMovieList, addMovieTrailer, addPopularMoviesList} = movieSlice.actions;