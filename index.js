import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";


const PORT = 5000;
const DB_URL = 'mongodb+srv://user:user@my-cluster.zf8wv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//создание backend приложения
const app = express();

//для работы с форматом json
app.use(express.json())


//для работы с файлами
app.use(express.static('static'))
app.use(fileUpload({}))

//регистрация всех роутеров
app.use('/api', router)


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