from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Simple Multi User Blog Platform"
    API_V1_STR: str = "/api/v1"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 15
    REFRESH_TOKEN_EXPIRE_MINUTES: int = 43200
    SECRET_KEY: str = "4cdf2d250dc815d49ea185cb5854d4a2d57e0f529c3d094200c514d12264406a"
    ALGORITHM: str = "HS256"
    BACKEND_CORS_ORIGINS: list = ["*"]
    class Config:
        env_file = ".env"

settings = Settings()