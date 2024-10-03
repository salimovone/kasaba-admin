import { configureStore } from '@reduxjs/toolkit'
import data from './data'
import staff from './staff'
import api from '../services/redux'

export const store = configureStore({
  reducer: {
    data,
    staff,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(api.middleware)
})