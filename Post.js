import mongoose from "mongoose";

//создание описания модели поста
const Post = new mongoose.Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    picture: {type: String} //для картинки только название, сама картинка с диска
})

//на экспорт модель с названием и самой моделью данных
export default mongoose.model('Post', Post)