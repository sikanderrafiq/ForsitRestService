import {
  cleanEnv, port, str,
} from 'envalid';

function validateEnv() {
  cleanEnv(process.env, {
    JWT_SECRET: str(),
    POSTGRES_HOST: str(),
    POSTGRES_PORT: str(),
    POSTGRES_USER: str(),
    POSTGRES_DB: str(),
    PORT: str(),
  });
}

export default validateEnv;
