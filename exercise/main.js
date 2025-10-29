import fs from "fs";
import path from "path";

let ext = "";
const basePath = "D:\\Web dovelpment\\4 Node Js\\91 exercise 15";

let files = fs.readdirSync(basePath);

for (const file of files) {
    ext = path.extname(file).slice(1);
    if(ext !="js" && ext !="json" && ext !="")
    {
        if(!fs.existsSync(path.join(basePath, ext)))
        {
            fs.mkdirSync(ext)
        }
        fs.renameSync(path.join(basePath, file), path.join(basePath, ext, file))
    }
}