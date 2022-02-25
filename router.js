import Router from 'express';
import Post from './Post.js';

//создаем новый экземпляр объекта роутер
const router = new Router()


//endpoint для post запроса
router.post('/posts', async (req, res) => {
    try {
        //получаем из данных клиента нужные поля
        const { author, title, content, picture } = req.body
        //создаем запись в базе данных
        const post = await Post.create({ author, title, content, picture })
        console.log(req.body)
        //ответ клиенту
        res.json(post)
    } catch (e) {
        res.status(500).json(e.message)
    }
})

//endpoint для get запроса
router.get('/posts', (req, res) => {
    //запрос к серверу (URL строка с параметрами)
    //console.log(req.query)

    //ответ клиенту
    res.status(200).json('Server is working')
})

router.get('/posts/:id')
router.put('/posts')
router.delete('/posts/:id')


export default router;