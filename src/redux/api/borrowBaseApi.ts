import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const borrowBaseApi = createApi({
    reducerPath: 'borrowBaseApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ['Borrow'],
    endpoints: (builder) => ({
        borrowBook: builder.mutation({
            query: (bookData) => ({
                url: "/borrow",
                method: 'POST',
                body: bookData
            }),
            invalidatesTags: ['Borrow'],
        }),
        getBorrowSummary: builder.query({
            query: () => "/borrow",
            providesTags: ['Borrow']
        })
    })
})

export const { useBorrowBookMutation, useGetBorrowSummaryQuery } = borrowBaseApi