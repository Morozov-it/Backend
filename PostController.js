import PostService from "./PostService.js";

//только взаимодествие с запросами и ответами
class PostController {
    async create(req, res) {
        try {
            //получаем данные от бизнес-сервиса
            const post = await PostService.create(req.body)
            //возврат клиенту
            return res.json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getAll(req, res) {
        try {
            //получение данные от бизнес-сервиса
            const posts = await PostService.getAll();
            //возврат клиенту
            return res.json(posts)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getOne(req, res) {
        try {
            //получение данные от бизнес-сервиса
            const post = await PostService.getOne(req.params.id)
            //возврат клиенту
            return res.json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async update(req, res) {
        try {
            //получение данные от бизнес-сервиса
            const updatedPost = await PostService.update(req.body)
            //возврат клиенту
            return res.json(updatedPost)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            //получение данные от бизнес-сервиса
            const post = await PostService.delete(req.params.id)
            //возврат клиенту
            return res.json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

//на экспорт объект созданный на основании класса
export default new PostController();