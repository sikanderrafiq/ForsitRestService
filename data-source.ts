import "reflect-metadata"
import { DataSource } from "typeorm"
import User  from "./entity/user.entity"
import Photo from "./entity/photo.entity"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Whyforgotit66!",
    database: "typeormdemo",
    synchronize: true,
    logging: false,
    entities: [User, Photo],
    migrations: [],
    subscribers: [],
})

export default AppDataSource;
