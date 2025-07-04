// import type { RootState } from "@/redux/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IBook } from "../../../../types";

interface InitialState {
    books: IBook[];
}

const initialState: InitialState = {
    books: [],
}
const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<IBook>) => {
            const newBook = action.payload;
            state.books.push(newBook);
        },
        editBook: (state, action: PayloadAction<IBook>) => {
            const updatedBook = action.payload;
            const index = state.books.findIndex(book => book.isbn === updatedBook.isbn);
            if (index !== -1) {
                state.books[index] = updatedBook;
            }
        }
    }
})

// export const selectBooks = (state: RootState) => {
//     return state.bookData.books;
// }

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;