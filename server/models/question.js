const mongoose = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const question_list = new mongoose.Schema({
    content_id: {
        type: Number,
        unique: true,
    },
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
});

question_list.plugin(autoIncrement.plugin, {
    model: "question",
    field: "content_id",
    startAt: 1, //시작
    increment: 1, // 증가
});

// 문제 전체 조회

question_list.statics.getAllQuestion = async function () {
    return await this.find({});
};

question_list.statics.getQuestionByContentId = async function (content_id) {
    return await this.find({ content_id: content_id });
};

question_list.methods.saveQuestion = async function () {
    return await this.save();
};

module.exports = mongoose.model("question", question_list);
