from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Simple Multi User Blog Platform"
    API_V1_STR: str = "/api/v1"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 15
    REFRESH_TOKEN_EXPIRE_MINUTES: int = 43200
    SECRET_KEY: str = "supersecret"
    ALGORITHM: str = "HS256"
    BACKEND_CORS_ORIGINS: list = ["*"]
    class Config:
        env_file = ".env"

settings = Settings()