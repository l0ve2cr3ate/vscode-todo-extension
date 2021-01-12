declare namespace NodeJS {
  export interface ProcessEnv {
    DB_USER: string;
    DB_PASSWORD: string;
    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;
    JWT_SECRET: string;
  }
}
