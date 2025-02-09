import React, { useEffect, useState } from "react";
import "../css/BuscadorLibros.css";

const BuscadorLibros = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch("https://openlibrary.org/search.json?q=programming&limit=12");
                const data = await response.json();
                setBooks(data.docs);
            } catch (error) {
                console.error("Error al obtener libros:", error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className="Container">
            <h2 className="Container-h2">Libros Recomendados</h2>
            <div className="Container-grid">
                {books.map((book) => (
                    <div key={book.key} className="Container-card">
                        {book.cover_i ? (
                            <img
                                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                alt={book.title}
                                className="Container-img"
                            />
                        ) : (
                            <div className="no-img">Sin Imagen</div>
                        )}
                        <h3 className="Libro-titulo">{book.title}</h3>
                        <p className="Libro-autor">Autor: {book.author_name?.join(", ") || "Desconocido"}</p>
                        <p className="Libro-year">Año: {book.first_publish_year || "Desconocido"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BuscadorLibros;

