import fs from 'fs';

class DataFile {

    private path_db: string;
    private file: string;
    private pivot_data = {};

    constructor(name: string = 'unknown', path: string = 'temp') {
        this.path_db = `./${path}/`;
        this.file = this.path_db + name;
        if (name != 'unknown') {
            this.create_dir();
            this.create_db();
        }
    }

    /**
     * genero archivo si no existe
     * name: mp,nre con extension para almacnenar daots
    */
    async create_db() {
        fs.appendFile(this.file, '', (err: any) => {
            if (err) console.log(err);
        })
    }

    async create_dir() {
        try {
            if (!fs.existsSync(this.path_db)) {
                fs.mkdirSync(this.path_db, { recursive: true });
            }
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Almaceno datos en json
    */
    async save_db(data: object) {
        fs.writeFileSync(this.file, JSON.stringify(data))
    }

    async update_db(data: object):Promise<void> {
        console.log(data);
        fs.writeFileSync(this.file, JSON.stringify(data) + ',', { flag: 'a+' })
    }
    

    /**
     * Almacenos los datos como llegan 
     * espera el formato en JSON
    */
    async save_data(data: any) {
        fs.writeFileSync(this.file, data)
    }

    /**
     * almaceno datos en un XML
    */
    async save_xml(data: string) {
        fs.writeFileSync(this.file, data)
    }

    async read_db() {
        try {
            if (!fs.existsSync(this.file)) {
                return null;
            }
            const info = fs.readFileSync(this.file, { encoding: 'utf-8' });
            return JSON.parse(info);
        } catch (error) {
            console.log(error);
            return 'error';
        }

    }
}
export default DataFile;