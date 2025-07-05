import { Link } from "react-router";
import heroImage from "../assets/booknestHero.webp"
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { IBook } from "types";
import { useEffect, useState } from "react";

const Homepage = () => {

    const { data } = useGetBooksQuery(undefined);

    const [books, setBooks] = useState<IBook[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<string | undefined>("All");

    console.log(data);

    useEffect(() => {
        if (selectedGenre === "All") {
            setBooks(data?.data || []);
        } else {
            const filteredBooks = data?.data?.filter((book: IBook) => book.genre === selectedGenre);
            setBooks(filteredBooks || []);
        }
    }, [data, selectedGenre]);

    const genres = ["All", "FICTION", "BIOGRAPHY", "SCIENCE", "FANTASY", "HISTORY"];

    return (
        <div>
            {/* Hero Section */}
            <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-24 relative overflow-hidden w-full">
                {/* Decorative shapes */}
                <div className="absolute left-0 top-0 w-80 h-80 bg-gradient-to-br from-[#f7e7ce] to-[#e9e4f0] rounded-full opacity-40 blur-2xl -z-10" />
                <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-tr from-[#e9e4f0] to-[#f7e7ce] rounded-full opacity-30 blur-2xl -z-10" />

                <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl mx-auto">
                    {/* Illustration */}
                    <div className="flex-1 flex justify-center">
                        <img src={heroImage} alt="Bookshelf" className="drop-shadow-xl rounded-2xl border-4 border-[#f3e9e0] bg-white bg-opacity-80" />
                    </div>
                    {/* Hero Content */}
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-[#6b4f1d] mb-4 leading-tight drop-shadow-lg font-serif">Welcome to BookNest</h1>
                        <h2 className="text-2xl md:text-3xl text-[#a67c52] font-semibold mb-6 font-serif">Your Digital Library Sanctuary</h2>
                        <p className="text-lg md:text-xl text-[#5a4a3f] mb-8 max-w-xl font-sans">Effortlessly manage your library’s collection, add new books, and track borrowing activity in a beautiful, intuitive environment inspired by the world’s best book platforms.</p>
                        <div className="flex gap-6 mt-2">
                            <Link to="/books" className="bg-[#a67c52] hover:bg-[#6b4f1d] text-white px-8 py-3 rounded-full font-bold shadow-lg text-lg transition-colors">Browse Books</Link>
                            <Link to="/books" className="bg-white border-2 border-[#a67c52] text-[#a67c52] hover:bg-[#f7e7ce] px-8 py-3 rounded-full font-bold shadow text-lg transition-colors">Add Book</Link>
                        </div>
                    </div>
                </div>
                {/* Discover Section */}
                <section className="w-full max-w-7xl mx-auto mt-24 px-2 md:px-0">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-2 mt-10">Discover Your Next Book</h2>
                    <div className="w-24 h-1 bg-[#a67c52] mx-auto mb-8 rounded-full opacity-30" />
                    {/* Tabs */}
                    <div className="flex justify-center gap-8 mb-10 text-lg font-medium">
                        {
                            genres.map((genre) => {
                                return (
                                    <button key={genre} onClick={() => setSelectedGenre(genre)} className={`${selectedGenre === genre ? "border-b-2 border-[#c0392b]" : ""}text-[#c0392b]  pb-1 px-2 focus:outline-none`}>{genre}</button>
                                )
                            })
                        }
                    </div>
                    {/* Book Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-center items-end">

                        {
                            books?.slice(0, 6)?.map((book: IBook) => {
                                return (
                                    <div className="flex flex-col items-center">
                                        <img src={book.cover} alt={book.title} className="w-44 h-64 object-cover rounded shadow-lg mb-4" />
                                        <div className="text-lg font-semibold text-center">{book.title}</div>
                                        <div className="text-[#c0392b] text-sm mb-1">{book.author}</div>
                                        <div className="flex justify-center mb-1">
                                            <span className="text-yellow-400">★★★★★</span>
                                        </div>
                                        <div className="text-[#c0392b] font-bold">Available: {book.copies}</div>
                                    </div>
                                )
                            })
                        }

                        {/* <div className="flex flex-col items-center">
                            <img src="https://covers.openlibrary.org/b/id/10523338-L.jpg" alt="A Doctor in the House" className="w-44 h-64 object-cover rounded shadow-lg mb-4" />
                            <div className="text-lg font-semibold text-center">A Doctor in the House</div>
                            <div className="text-[#c0392b] text-sm mb-1">Candy Carson</div>
                            <div className="flex justify-center mb-1">
                                <span className="text-yellow-400">★★★★★</span>
                            </div>
                            <div className="text-[#c0392b] font-bold">$6.50 – $16.99</div>
                        </div>
                      
                        <div className="flex flex-col items-center">
                            <img src="https://covers.openlibrary.org/b/id/11153223-L.jpg" alt="Design of the 20th Century" className="w-44 h-64 object-cover rounded shadow-lg mb-4" />
                            <div className="text-lg font-semibold text-center">Design of the 20th Century</div>
                            <div className="text-[#c0392b] text-sm mb-1">Carol Foster</div>
                            <div className="flex justify-center mb-1">
                                <span className="text-yellow-400">★★★★☆</span>
                            </div>
                            <div className="text-[#c0392b] font-bold">$10.99 – $20.00</div>
                        </div>
                     
                        <div className="flex flex-col items-center">
                            <img src="https://covers.openlibrary.org/b/id/10958309-L.jpg" alt="New Galaxy" className="w-44 h-64 object-cover rounded shadow-lg mb-4" />
                            <div className="text-lg font-semibold text-center">New Galaxy</div>
                            <div className="text-[#c0392b] text-sm mb-1">Richard Mann</div>
                            <div className="flex justify-center mb-1">
                                <span className="text-yellow-400">★★★★★</span>
                            </div>
                            <div className="text-[#c0392b] font-bold">$7.90 – $16.90</div>
                        </div>
                      
                        <div className="flex flex-col items-center">
                            <img src="https://covers.openlibrary.org/b/id/10523339-L.jpg" alt="The Long Road to the Deep Silence" className="w-44 h-64 object-cover rounded shadow-lg mb-4" />
                            <div className="text-lg font-semibold text-center">The Long Road to the Deep Silence</div>
                            <div className="text-[#c0392b] text-sm mb-1">Richard Mann</div>
                            <div className="flex justify-center mb-1">
                                <span className="text-yellow-400">★★★★★</span>
                            </div>
                            <div className="text-[#c0392b] font-bold">$12.00 – $22.00</div>
                        </div>
                       
                        <div className="flex flex-col items-center">
                            <img src="https://covers.openlibrary.org/b/id/10958310-L.jpg" alt="Life in the Garden" className="w-44 h-64 object-cover rounded shadow-lg mb-4" />
                            <div className="text-lg font-semibold text-center">Life in the Garden</div>
                            <div className="text-[#c0392b] text-sm mb-1">Candy Carson</div>
                            <div className="flex justify-center mb-1">
                                <span className="text-yellow-400">★★★☆☆</span>
                            </div>
                            <div className="text-[#c0392b] font-bold">$11.99 – $25.00</div>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src="https://covers.openlibrary.org/b/id/10958311-L.jpg" alt="It's a Really Strange Story" className="w-44 h-64 object-cover rounded shadow-lg mb-4" />
                            <div className="text-lg font-semibold text-center">It's a Really Strange Story</div>
                            <div className="text-[#c0392b] text-sm mb-1">Burt Geller</div>
                            <div className="flex justify-center mb-1">
                                <span className="text-yellow-400">★★★★★</span>
                            </div>
                            <div className="text-[#c0392b] font-bold">$8.00 – $18.00</div>
                        </div> */}
                    </div>
                    {/* Discover More Button */}
                    <div className="flex justify-center mt-12">
                        <Link to="/books" className="bg-black text-white px-10 py-4 rounded shadow-lg font-semibold text-lg tracking-wide hover:bg-[#a67c52] hover:text-white transition-colors">DISCOVER MORE BOOKS</Link>
                    </div>
                </section>

                {/* Features Section */}
                <section className="w-full max-w-6xl mx-auto mt-24 px-2 md:px-0">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-2 mt-10">Why Choose BookNest?</h2>
                    <div className="w-16 h-1 bg-[#a67c52] mx-auto mb-8 rounded-full opacity-30" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-white bg-opacity-80 rounded-xl shadow p-8 flex flex-col items-center text-center">
                            <span className="text-5xl mb-4">🔍</span>
                            <h3 className="font-bold text-xl mb-2 text-[#6b4f1d]">Powerful Search</h3>
                            <p className="text-gray-700">Quickly find any book, author, or genre in your library with advanced search and filters.</p>
                        </div>
                        <div className="bg-white bg-opacity-80 rounded-xl shadow p-8 flex flex-col items-center text-center">
                            <span className="text-5xl mb-4">📈</span>
                            <h3 className="font-bold text-xl mb-2 text-[#6b4f1d]">Borrowing Analytics</h3>
                            <p className="text-gray-700">Track borrowing trends, overdue books, and member activity with insightful analytics.</p>
                        </div>
                        <div className="bg-white bg-opacity-80 rounded-xl shadow p-8 flex flex-col items-center text-center">
                            <span className="text-5xl mb-4">🛡️</span>
                            <h3 className="font-bold text-xl mb-2 text-[#6b4f1d]">Secure & Reliable</h3>
                            <p className="text-gray-700">Your data is protected with robust security and regular backups for peace of mind.</p>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="w-full max-w-6xl mx-auto mt-24 px-2 md:px-0">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-2 mt-10">What Our Users Say</h2>
                    <div className="w-16 h-1 bg-[#a67c52] mx-auto mb-8 rounded-full opacity-30" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-white bg-opacity-80 rounded-xl shadow p-8 flex flex-col items-center text-center">
                            <span className="text-5xl mb-4">“</span>
                            <p className="text-gray-700 italic mb-4">BookNest has made managing our school library a breeze. The interface is beautiful and easy to use!</p>
                            <div className="font-bold text-[#6b4f1d]">Sarah M.</div>
                            <div className="text-sm text-[#a67c52]">Librarian</div>
                        </div>
                        <div className="bg-white bg-opacity-80 rounded-xl shadow p-8 flex flex-col items-center text-center">
                            <span className="text-5xl mb-4">“</span>
                            <p className="text-gray-700 italic mb-4">I love the analytics and how easy it is to add new books. Highly recommended for any library!</p>
                            <div className="font-bold text-[#6b4f1d]">James T.</div>
                            <div className="text-sm text-[#a67c52]">Library Volunteer</div>
                        </div>
                        <div className="bg-white bg-opacity-80 rounded-xl shadow p-8 flex flex-col items-center text-center">
                            <span className="text-5xl mb-4">“</span>
                            <p className="text-gray-700 italic mb-4">Our members love the new system. Borrowing and returning books has never been easier!</p>
                            <div className="font-bold text-[#6b4f1d]">Priya S.</div>
                            <div className="text-sm text-[#a67c52]">Community Center</div>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="w-full max-w-4xl mx-auto mt-24 mb-16 px-2 md:px-0">
                    <div className="bg-[#a67c52] rounded-2xl shadow-xl p-10 flex flex-col items-center text-center">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Ready to Transform Your Library?</h2>
                        <p className="text-white text-lg mb-6">Join BookNest today and experience the next generation of library management.</p>
                        <Link to="/books" className="bg-white text-[#a67c52] font-bold px-8 py-4 rounded-full shadow-lg text-lg hover:bg-[#f7e7ce] transition-colors">Get Started Now</Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Homepage;