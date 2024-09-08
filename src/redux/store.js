import { configureStore } from '@reduxjs/toolkit'
import data from './data'
import staff from './staff'

export const store = configureStore({
  reducer: {
    data,
    staff
  },
})