import { Sequelize } from 'sequelize';
import environment from '../helpers/utils/environment';

const base: string | undefined = environment('DB_NAME')!;
const user: string | undefined = environment('DB_USER')!;
const pass: string | undefined = environment('DB_PASSWORD')!;
const host: string | undefined = environment('DB_HOST')!;

const db = new Sequelize(base , user, pass, {
    host,
    dialect: 'mysql',
    logging: false,
    query: {
        raw: true
     },
});

export default db;