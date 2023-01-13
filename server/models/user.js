const mongoose = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const user_list = new mongoose.Schema({
    user_id: {
        type: Number,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    best_score: {
        type: Number,
        required: false,
    },
});

// question_list.plugin(autoIncrement.plugin, {
//     model: "question",
//     field: "content_id",
//     startAt: 1, //시작
//     increment: 1, // 증가
// });

// 문제 전체 조회

user_list.statics.getBestScore = async function () {
    return await this.find({user_id: "test"});
};

// question_list.statics.getQuestionByContentId = async function (content_id) {
//     return await this.find({ content_id: content_id });
// };

// question_list.methods.saveQuestion = async function () {
//     return await this.save();
// };

// question_list.statics.updateCorrectQuestion = async function(content_id, correct_count){
//     return await this.findOneAndUpdate({content_id: content_id}, {correct_count: correct_count} );

// }

// question_list.statics.updateWrongQuestion = async function(content_id, wrong_count){
//     return await this.findOneAndUpdate({content_id: content_id}, {wrong_count: wrong_count} );

// }

module.exports = mongoose.model("user", user_list);
