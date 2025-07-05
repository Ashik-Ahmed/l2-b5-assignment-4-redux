import { AddBookDialog } from '@/components/module/Book/AddBookDialog';
import { BorrowBookDialog } from '@/components/module/Book/BorrowBookDialog';
import { DeleteBookDialog } from '@/components/module/Book/DeleteBookDialog';
import { EditBookDialog } from '@/components/module/Book/EditBookDialog';
import { columns } from '@/components/module/DataTable/Columns';
import { DataTable } from '@/components/module/DataTable/DataTable';
import { useGetBooksQuery } from '@/redux/api/baseApi';
import type { IBook } from 'types';
// import { selectBooks } from '@/redux/features/book/bookSlice';
// import { useAppSelector } from '@/redux/hook';


const Books = () => {

    const { data, isLoading, isError } = useGetBooksQuery(undefined);
    // console.log('Books data:', data, 'Loading:', isLoading, 'Error:', isError);


    // const books = useAppSelector(selectBooks);
    // console.log(books);

    if (isLoading) return <div className='text-4xl text-[#6b4f1d] w-full mt-10 flex justify-center items-center'>Loading Books...</div>;
    if (isError) return <div>Error</div>;

    return (
        <div className='m-4'>
            <div className='flex justify-end items-center mb-2'>
                <AddBookDialog />
            </div>
            <div>
                {/* {
                    data?.data.map((book: IBook) => (
                        <div key={book._id} className="bg-white shadow-md rounded-xl p-5 border border-gray-100 hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
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

                                <BorrowBookDialog bookId={book?._id} />
                                <EditBookDialog book={book} />
                                <DeleteBookDialog book={book} />
                            </div>
                        </div>
                    ))
                } */}
                <DataTable columns={columns} data={data?.data} />
            </div>


        </div>
    );
};

export default Books;