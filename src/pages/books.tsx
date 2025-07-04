import { AddBookDialog } from '@/components/module/AddBookDialog/AddBookDialog';
import { useGetBooksQuery } from '@/redux/api/baseApi';
import type { IBook } from 'types';
// import { selectBooks } from '@/redux/features/book/bookSlice';
// import { useAppSelector } from '@/redux/hook';


const Books = () => {

    const { data, isLoading, isError } = useGetBooksQuery(undefined);

    console.log('Books data:', data, 'Loading:', isLoading, 'Error:', isError);

    // const books = useAppSelector(selectBooks);
    // console.log(books);

    return (
        <div className='m-4'>
            <div className='flex justify-end items-center mb-2'>
                <AddBookDialog />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    data?.data.map((book: IBook) => (
                        <div key={book.isbn} className="bg-white shadow-md rounded-xl p-5 border border-gray-100 hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
                            <div>

                                <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${book.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {book.available ? 'Available' : 'Unavailable'}
                                </span>
                                <h2 className="text-xl font-semibold text-gray-800 mb-1">{book.title}</h2>
                                <p className="text-sm text-gray-600 mb-2 italic">by {book.author}</p>

                                <div className="mb-2 text-sm">
                                    <span className="font-medium text-gray-700">Genre:</span> {book.genre}
                                </div>

                                <div className="mb-2 text-sm">
                                    <span className="font-medium text-gray-700">ISBN:</span> {book.isbn}
                                </div>

                                <p className="text-sm text-gray-700 mb-3">
                                    {book.description.length > 100 ? book.description.slice(0, 100) + '…' : book.description}
                                </p>

                                <span><span className="font-medium text-gray-700">Copies:</span> {book.copies}</span>

                            </div>

                            <div className="flex justify-end gap-3 mt-auto">
                                <button
                                    className="px-3 py-1 text-sm rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
                                    onClick={() => handleEdit(book)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="px-3 py-1 text-sm rounded-md bg-red-100 text-red-700 hover:bg-red-200 transition"
                                    onClick={() => handleDelete(book.isbn)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default Books;