from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.schemas.user import UserCreate, UserOut, PasswordUpdate
from app.crud import user as crud_user
from app.dependencies.auth import get_current_user, get_db
from app.models.user import User

router = APIRouter()

@router.post("/", response_model=UserOut, status_code=status.HTTP_201_CREATED)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    try:
        return crud_user.create_user(db, user)
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail=str(e))
    
@router.get("/", response_model=list[UserOut])
def list_users(db: Session = Depends(get_db)):
    return crud_user.get_users(db)

@router.get("/{user_id}", response_model=UserOut)
def get_user(user_id: int, db: Session = Depends(get_db)):
    user = crud_user.get_userById(db, user_id)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found."
        )
    return user

@router.get("/me", response_model=UserOut)
def read_current_user(current_user: User = Depends(get_current_user)):
    return current_user

@router.patch("/{user_id}/password", response_model=UserOut)
def update_password(user_id: int, update: PasswordUpdate, db: Session = Depends(get_db)):
    user = crud_user.update_user_password(db, user_id, update.password)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user