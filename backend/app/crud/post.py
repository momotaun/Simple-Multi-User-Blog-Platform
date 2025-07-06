from sqlalchemy.orm import Session
from app.models.post import Post
from app.schemas.post import PostCreate, PostUpdate

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

def update_post(db: Session, post_id: int, post_update: PostUpdate, current_user_id: int):
    post = db.query(Post).filter(Post.id == post_id).first()
    if not post:
        return None
    if post.owner_id != current_user_id:
        return False
    for field, value in post_update.dict().items():
        setattr(post, field, value)
    db.commit()
    db.refresh(post)
    return post

def delete_post(db: Session, post_id: int, current_user_id: int):
    post = db.query(Post).filter(Post.id == post_id).first()
    if not post:
        return None
    if post.owner_id != current_user_id:
        return False
    db.delete(post)
    db.commit()
    return True