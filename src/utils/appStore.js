import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import movieSlice from './movieSlice'
import gptSlice from './gptSLice'
import configSlice from './config.slice'

const appStore = configureStore({
    reducer: {
      user: userSlice,
      movies: movieSlice,
      gptSearch: gptSlice,
      config : configSlice
    }
});

export default appStore;