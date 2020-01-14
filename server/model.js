
const mongoose = require('mongoose');
// 连接mongo 
const DB_URL = 'mongodb://localhost:27017/reactChat';
mongoose.connect(DB_URL);

const models = {
    user: {
        'user': {type: String, require: true},
        'password': {type: String, require: true},
        'type': {type: String, require: true},
        'avatar': {type: String},
        'desc': {type: String}, // 简介
        'title': {type: String}, // 职位名
        // 如果是boss 还有以下2个字段
        'company': {type:String},
        'money': {type: String}
    },
    chat: {

    }
}

for(let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function(name) {
        return mongoose.model(name);
    }
}