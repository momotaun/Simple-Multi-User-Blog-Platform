import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    API_V1_STR: str = "/api/v1"
    BACKEND_CORS_ORIGINS: list = ["*"]
    PROJECT_NAME: str = "Simple Multi User Blog Platform"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    SECRET_KEY: str = "your-secret-key"
    ALGORITHM: str = "HS256"
    class Config:
        env_file = ".env"

settings = Settings()