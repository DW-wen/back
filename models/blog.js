const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({ // 用 required: true ， 格式必定要正確 -> 這很重要
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    }
    
}, { timestamps: true});

const Hi = mongoose.model('data', blogSchema); // 更改 data，會在 mongodb 新增另外一個儲存伺服器，並且會顯示為 " data's' "，會在尾端家 s 
module.exports = Hi;