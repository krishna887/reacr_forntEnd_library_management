import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/books/';

export const ListBookService = () => axios.get(REST_API_BASE_URL);
export const PostBookService = (book) => axios.post(REST_API_BASE_URL, book);
export const GetBookService = (id) => axios.get(`${REST_API_BASE_URL}${id}`);
export const UpdateBookService = (id, book) => axios.put(`${REST_API_BASE_URL}${id}`, book);
export const DeleteBookService = (id) => axios.delete(`${REST_API_BASE_URL}${id}`);
