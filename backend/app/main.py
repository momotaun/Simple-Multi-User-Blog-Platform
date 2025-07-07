from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.v1 import users, login, refresh, posts

app = FastAPI(title=settings.PROJECT_NAME)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router, prefix=f"{settings.API_V1_STR}/users", tags=["Users"])
app.include_router(login.router, prefix=f"{settings.API_V1_STR}/token", tags=["Auth"])
app.include_router(refresh.router, prefix=f"{settings.API_V1_STR}/refresh", tags=["Auth"])
app.include_router(posts.router, prefix=f"{settings.API_V1_STR}/posts", tags=["Posts"])