import { selectBooks } from '@/redux/features/book/bookSlice';
import { useAppSelector } from '@/redux/hook';


const Books = () => {

    const books = useAppSelector(selectBooks);
    // console.log(books);

    return (
        <div className='m-4'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    books.map((book) => (
                        <div key={book.isbn} className="bg-white shadow-md rounded-xl p-5 border border-gray-100 hover:shadow-lg transition-all duration-200">
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

                            <div className="flex justify-between items-center text-sm">
                                <span><span className="font-medium text-gray-700">Copies:</span> {book.copies}</span>
                                <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${book.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {book.available ? 'Available' : 'Unavailable'}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Books;