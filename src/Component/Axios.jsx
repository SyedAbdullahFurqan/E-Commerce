import React from 'react'
import axios from 'axios'



export const gets= axios.create({
    baseURL:"https://fakestoreapi.in/api/products"
})

