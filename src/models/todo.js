const mongoose = require('mongoose');

const insertTodo = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 5
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

// creating collections(table) - Start with Uppercase only
const Insert = new mongoose.model("Insert", insertTodo);

module.exports = Insert;

