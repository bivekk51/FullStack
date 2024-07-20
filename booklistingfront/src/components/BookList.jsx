import { useState, useEffect } from 'react';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/books');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading) {
        return <p className="text-center mt-10 text-gray-600">Loading...</p>;
    }

    if (error) {
        return <p className="text-center mt-10 text-red-600">{`Error: ${error}`}</p>;
    }

    return (
        <div className="max-w-7xl mx-auto mt-10">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Book List</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map(book => (
                    <div key={book.id} className="bg-white p-6 rounded-lg shadow-md">
                        <img src={book.image} alt={book.title} className="w-full h-64 object-cover rounded-t-lg mb-4" />
                        <h3 className="text-xl font-bold">{book.title}</h3>
                        <p className="text-gray-700">{book.author}</p>
                        <p className="text-gray-600 mt-2">{book.description}</p>
                        <p className="text-gray-600 mt-2">Category: {book.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;
