import { configureStore } from '@reduxjs/toolkit'
import { counter } from './Slice/Action'
export const store = configureStore({
  reducer: {
    counter: counter,
  },
})