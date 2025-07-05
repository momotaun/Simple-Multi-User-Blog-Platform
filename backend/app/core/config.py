import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    API_V1_STR: str = "/api/v1"
    BACKEND_CORS_ORIGINS: list = ["*"]
    PROJECT_NAME: str = "Simple Multi User Blog Platform"
    class Config:
        env_file = ".env"

settings = Settings()