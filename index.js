import express from "express";
import mongoose from "mongoose";
import Post from './Post.js';


const PORT = 5000;
const DB_URL = 'mongodb+srv://user:user@my-cluster.zf8wv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


const app = express();
//для работы с форматом json
app.use(express.json())



//endpoint для get запроса
app.post('/', async (req, res) => {
    try {
        //получаем из данных клиента нужные поля
        const { author, title, content, picture } = req.body
        //создаем запись в базе данных
        const post = await Post.create({ author, title, content, picture })
        console.log(req.body)
        //ответ клиенту
        res.status(200).json(post)
    } catch (e) {
        res.status(500).json(e.message)
    }
})

//endpoint для post запроса
app.get('/', (req, res) => {
    //запрос к серверу (URL строка с параметрами)
    //console.log(req.query)

    //ответ клиенту
    res.status(200).json('Server is working')
})




//функция для запуска приложения
async function startApp() {
    try {
        //подключение к базе данных
        await mongoose.connect(DB_URL,
            //{ useUnifiedTopology: true, useNewUrlParser: true }
        )
        //создаем экземпляр приложения и прослушиваем port 5000
        app.listen(PORT, () => {
            console.log('SERVER STARTED ON PORT ' + PORT)
        })
    } catch (e) {
        console.log(e)
    }
}
startApp()