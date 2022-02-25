import Post from './Post.js';

class PostController {
    async create(req, res) {
        try {
            //получаем из данных клиента нужные поля
            const { author, title, content, picture } = req.body
            //создаем запись в базе данных
            const post = await Post.create({ author, title, content, picture })
            console.log(req.body)
            //возврат клиенту
            return res.json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getAll(req, res) {
        try {
            //получение всех данных с бд
            const posts = await Post.find();
            //возврат клиенту
            return res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            //получение параметра из строки запроса
            const { id } = req.params
            //проверка наличия параметра
            if (!id) res.status(400).json({message:'Id is missing'})
            //обращение к модели базы данных
            const post = await Post.findById(id)
            //возврат клиенту
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            //получение тела нового поста из запроса
            const post = req.body
            //проверка наличия параметра
            if (!post._id) res.status(400).json({ message: 'Id is missing' })
            //обращение к модели базы данных
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true })
            //возврат клиенту
            return res.json(updatedPost)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            //получение параметра из строки запроса
            const { id } = req.params
            //проверка наличия параметра
            if (!id) res.status(400).json({message:'Id is missing'})
            //обращение к модели базы данных
            const post = await Post.findByIdAndDelete(id)
            //возврат клиенту
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

//на экспорт объект созданный на основании класса
export default new PostController();