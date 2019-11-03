// Axios ไว้เชื่อม fontEnd กับ BackEnd
// เป็นการเรียกใช้ api ... get put delete etc ไรพวกนี้
// มาเชื่อมในนี้นะจ้ะ


import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})


export const insertMovie = payload => api.post(`/movie`, payload)
export const getAllMovies = () => api.get(`/movies`)
export const updateMovieById = (id, payload) => api.put(`/movie/${id}`,payload)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById
}

export default apis

// เสร็จแล้วไปแก้ใน  app/index.js ต่อ เพื่อให้มัน route หน้า Link