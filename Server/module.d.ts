declare namespace NodeJS{
  export interface ProcessEnv{
    JWT_SECRET_KEY: string;
    JWT_REFRESH_KEY: string;
    DB_PASSWORD: string;
    CLOUDINARY_NAME: string;
    CLOUDINARY_API_KEY: string;
    CLOUDINARY_API_SECRET: string;
  }
}