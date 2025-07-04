// import type { RootState } from "@/redux/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IBook } from "../../../../types";

interface InitialState {
    books: IBook[];
}

const initialState: InitialState = {
    books: [
        // {
        //     title: "The Great Gatsby",
        //     author: "F. Scott Fitzgerald",
        //     genre: "Fiction",
        //     isbn: "978-3-16-148sd0-0",
        //     description: "The Great Gatsby is a 1925 novel written by American writer F. Scott Fitzgerald.",
        //     copies: 5,
        //     available: true
        // },
        // {
        //     title: "The Great Gatsby",
        //     author: "F. Scott Fitzgerald",
        //     genre: "Fiction",
        //     isbn: "978-3-16238410-0",
        //     description: "The Great Gatsby is a 1925 novel written by American writer F. Scott Fitzgerald.",
        //     copies: 5,
        //     available: true
        // },
        // {
        //     title: "The Great Gatsby",
        //     author: "F. Scott Fitzgerald",
        //     genre: "Fiction",
        //     isbn: "978-3-16-148450-0",
        //     description: "The Great Gatsby is a 1925 novel written by American writer F. Scott Fitzgerald.",
        //     copies: 5,
        //     available: true
        // },
        // {
        //     title: "The Great Gatsby",
        //     author: "F. Scott Fitzgerald",
        //     genre: "Fiction",
        //     isbn: "148-3-16-148410-0",
        //     description: "The Great Gatsby is a 1925 novel written by American writer F. Scott Fitzgerald.",
        //     copies: 5,
        //     available: true
        // },
        // {
        //     title: "The Great Gatsby",
        //     author: "F. Scott Fitzgerald",
        //     genre: "Fiction",
        //     isbn: "6l0-3-16-148410-0",
        //     description: "The Great Gatsby is a 1925 novel written by American writer F. Scott Fitzgerald.",
        //     copies: 5,
        //     available: true
        // },
        // {
        //     title: "The Great Gatsby",
        //     author: "F. Scott Fitzgerald",
        //     genre: "Fiction",
        //     isbn: "738-3-16-148410-0",
        //     description: "The Great Gatsby is a 1925 novel written by American writer F. Scott Fitzgerald.",
        //     copies: 5,
        //     available: true
        // },
    ],
}
const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<IBook>) => {
            const newBook = action.payload;
            state.books.push(newBook);
        }
    }
})

// export const selectBooks = (state: RootState) => {
//     return state.bookData.books;
// }

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;