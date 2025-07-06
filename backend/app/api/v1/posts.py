from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from app.schemas.post import PostCreate, PostOut
from app.crud import post as crud_post
from app.dependencies.auth import get_db, get_current_user
from app.models.user import User

router = APIRouter()

@router.post("/", response_model=PostOut, status_code=status.HTTP_201_CREATED)
def create_post(post: PostCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return crud_post.create_post(db, post, current_user.id)

@router.get("/", response_model=List[PostOut])
def get_posts(db: Session = Depends(get_db)):
    return crud_post.get_posts(db)

@router.get("/{post_id}", response_model=PostOut)
def get_post(post_id: int, db: Session = Depends(get_db)):
    post = crud_post.get_post(db, post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return post