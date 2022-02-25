import Post from './Post.js';

//только логика взаимодествия с базой данных
class PostService {
    async create(post) {
        //создаем запись в базе данных
        const createdPost = await Post.create(post)
        //возврат в контроллер
        return createdPost
    }

    async getAll() {
        //получение всех данных с бд
        const posts = await Post.find();
        //возврат в контроллер
        return posts
    }

    async getOne(id) {
        //проверка наличия параметра
        if (!id) throw new Error ('Id is missing')
        //обращение к модели базы данных
        const post = await Post.findById(id)
        //возврат в контроллер
        return post
    }

    async update(post) {
        //проверка наличия параметра
        if (!post._id) throw new Error ('Id is missing')
        //обращение к модели базы данных
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true })
        //возврат в контроллер
        return updatedPost
    }

    async delete(id) {
        //проверка наличия параметра
        if (!id) throw new Error ('Id is missing')
        //обращение к модели базы данных
        const post = await Post.findByIdAndDelete(id)
        //возврат в контроллер
        return post
    }
}

export default new PostService();