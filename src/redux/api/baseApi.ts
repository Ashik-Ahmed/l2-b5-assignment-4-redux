import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
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
            query: (params) => {
                let url = "/books";
                if (params?.genre) url += `?filter=${params.genre}`;
                console.log(url);
                return url;
            },
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