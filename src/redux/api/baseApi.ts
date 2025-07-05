import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ['Book', 'Borrow'],
    endpoints: (builder) => ({
        addBook: builder.mutation({
            query: (bookData) => ({
                url: "/books",
                method: 'POST',
                body: bookData
            }),
            invalidatesTags: ['Book'],
        }),
        getBooks: builder.query({
            query: () => "/books",
            providesTags: ['Book']
        }),
        editBook: builder.mutation({
            query: ({ bookId, bookData }) => ({
                url: `/books/${bookId}`,
                method: 'PATCH',
                body: bookData
            }),
            invalidatesTags: ['Book'],
        }),
        deleteBook: builder.mutation({
            query: ({ bookId }) => ({
                url: `/books/${bookId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Book'],
        }),


        // Borrow API
        borrowBook: builder.mutation({
            query: (borrowData) => ({
                url: "/borrow",
                method: 'POST',
                body: borrowData
            }),
            invalidatesTags: ['Borrow', 'Book'],
        }),
        getBorrowSummary: builder.query({
            query: () => "/borrow",
            providesTags: ['Borrow']
        })
    })
})

export const { useAddBookMutation, useGetBooksQuery, useEditBookMutation, useDeleteBookMutation, useBorrowBookMutation, useGetBorrowSummaryQuery } = baseApi