export class Config {
    static readonly PORT = process.env.PORT ? +process.env.PORT : 3000;
    static readonly MONGODB_URL =
        process.env.MONGODB_URL ?? "mongodb://127.0.0.1:27017/albums";
}
