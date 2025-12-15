var express = require("express");
const { default: mongoose } = require("mongoose");
let Books = require('./BooksSchema');
const connectDB = require('./MongoDBConnect');
const cors = require('cors');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Default route
app.get('/', (req, res) => {
    res.send("This is default");
});

// Display all books
app.get('/allbooks', async (req, res) => {
    const books = await Books.find();
    res.json(books);
});

// Get a book by ID
app.get('/getbook/:id', async (req, res) => {
    let id = req.params.id;
    const book = await Books.findById(id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ error: "Book not found" });
    }
});

// Add a new book
app.post('/addbooks', (req, res) => {
    let newbook = new Books(req.body);
    newbook.save()
        .then(() => res.status(200).json({ message: 'Book added successfully' }))
        .catch(err => res.status(400).send('Adding new book failed'));
});

// Update a book by ID
app.post('/updatebook/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const update = {
            booktitle: req.body.booktitle,
            PubYear: req.body.PubYear,
            author: req.body.author,
            Topic: req.body.Topic,
            formate: req.body.formate
        };

        const updatedBook = await Books.findByIdAndUpdate(
            id,
            { $set: update },
            { new: true, runValidators: true }
        );

        if (!updatedBook) return res.status(404).json({ error: 'Book not found' });

        res.status(200).json({ message: 'Book updated successfully', book: updatedBook });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update book', details: err.message });
    }
});

// Delete a book by ID
app.post('/deleteBook/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedBook = await Books.findByIdAndDelete(id);

        if (!deletedBook) return res.status(404).json({ error: 'Book not found' });

        res.status(200).send('Book Deleted');
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete book', details: err.message });
    }
});

// Start server after DB connection
(async () => {
    await connectDB();
    app.listen(5000, () => console.log('✅ Server running on port 5000'));
})();
