import * as dotenv from "dotenv";
dotenv.config();

class handler {

    private env: string;

    constructor(env: string) {
        this.env = env;
    }

    value() {
        let env_value: string | undefined;
        for (const [key, value] of Object.entries(process.env)) {
            if(this.env == key) {
                env_value = value;
                break;
            };
            env_value = 'missing';
        }
        return env_value;          
    } 
}

const environment = (env: string) => {
    return new handler(env).value();
}

export default environment;