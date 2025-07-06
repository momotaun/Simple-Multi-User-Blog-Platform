from sqlalchemy.orm import Session
from app.models.post import Post
from app.schemas.post import PostCreate

def create_post(db: Session, post: PostCreate, owner_id: int):
    db_post = Post(**post.dict(), owner_id=owner_id)
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post

def get_posts(db: Session):
    return db.query(Post).all()

def get_post(db: Session, post_id: int):
    return db.query(Post).filter(Post.id == post_id).first()