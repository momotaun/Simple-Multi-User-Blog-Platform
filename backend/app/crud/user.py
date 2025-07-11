from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from app.models.user import User
from app.schemas.user import UserCreate
from app.core.security import hash_password, verify_password

def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()

def create_user(db: Session, user: UserCreate):
    existing_user = get_user_by_email(db, user.email)

    if existing_user:
        raise ValueError("A user with this email already exists.")
    
    try:
        db_user = User(
            email=user.email,
            hashed_password=hash_password(user.password),
        )
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user
    except IntegrityError:
        db.rollback()
        raise

def get_users(db: Session):
    return db.query(User).all()

def get_userById(db: Session, user_id: int):
    return db.query(User).filter(User.id == user_id).first()

def authenticate_user(db: Session, email: str, password: str):
    user = get_user_by_email(db, email)
    if not user or not verify_password(password, user.hashed_password):
        return None
    return user

def update_user_password(db: Session, user_id: int, new_password: str):
    user = get_userById(db, user_id)
    if not user:
        return None
    user.hashed_password = hash_password(new_password)
    db.commit()
    db.refresh(user)
    return user