import * as uuid from 'uuid';
import * as path from 'path';

class FileService {
    saveFile(file) {
        try {
            //генерация названия
            const fileName = uuid.v4() + '.jpg';
            //направление пути в директорию
            const filePath = path.resolve('static', fileName);
            //перемещение в указанную директорию
            file.mv(filePath);
            return fileName;
        } catch (e) {
            console.log(e)
        }
    }
}

export default new FileService();