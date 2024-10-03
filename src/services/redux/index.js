import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = "https://afu1.pythonanywhere.com"


// API yaratish
const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getApplications: builder.query({
      query: () => '/application/',
    }),
    getEmployees: builder.query({
      query: () => '/employe/',
    }),
    getNews: builder.query({
      query: () => '/news/news/', // Yangiliklarni olish uchun API so'rovi
    }),
    getAriza: builder.query({
      query: () => '/application/', // Arizalarni olish uchun API so'rovi
    }),
  }),
});

// Hookslarni eksport qilish
export const { useGetApplicationsQuery, useGetEmployeesQuery, useGetNewsQuery, useGetArizaQuery } = api;
export default api;
