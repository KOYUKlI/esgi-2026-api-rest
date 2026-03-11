import { DataSource } from "typeorm";
<<<<<<< HEAD
=======
import { Product } from "./entities/product.js";
>>>>>>> ecb1c888baafdf47f46a960f3d70b2369a972779

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "your_password",
    database: "your_database",
    synchronize: true,
<<<<<<< HEAD
    logging: false,
})
=======
    logging: true,
    entities: [Product]
})
>>>>>>> ecb1c888baafdf47f46a960f3d70b2369a972779
