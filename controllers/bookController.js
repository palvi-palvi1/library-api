import books from "../data/books.js";

let nextId = books.length +1
export const addBook = (req, res) => {
    const newBook = {id: nextId++, ...req.body};
    books.push(newBook);
    res.status(201).json(newBook);
};

export const getAllBooks =  (req, res) => {
    res.status(200).json(books);

};

export const getBookById = (req, res) => {
    const id = (req.params.id);
    const book = books.find((a) => a.id === id);

    if (!book) {
        return res.status(404).json({ error: 'No book with this id' });
    }
    res.status(200).json(book);
};

export const filterBooks = (req, res) => {
    let filteredBooks = books;

    const { authorId, authorName } = req.query;

    if (authorId) {
        filteredBooks = filteredBooks.filter(book => book.authorId === authorId);
    }

    if (authorName) {
        filteredBooks = filteredBooks.filter(book =>
            book.title.toLowerCase().includes(authorName.toLowerCase())
        );
    }
    res.status(200).json(filteredBooks);
};

export const updateBook = (req, res) => {
    const id = (req.params.id);
    const book = books.find((a) => a.id === id);

    if (!book) {
        return res.status(404).json({message: 'No author with this id'});
    }

    Object.assign(book, req.body);
    res.status(200).json({book});
};

export const deleteBook = (req, res) => {
    const id = (req.params.id);
    const index = books.findIndex((a) => a.id === id);

    if (index === -1) {
        return res.status(404).json({message: 'No author with this id'});
    }

    books.splice(index, 1);
    res.status(200).json({message: 'Author deleted successfully'});
}