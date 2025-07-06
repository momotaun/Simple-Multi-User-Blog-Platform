from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class PostBase(BaseModel):
    title: str
    content: str

class PostCreate(PostBase):
    pass

class PostOut(PostBase):
    id: int
    owner_id: int
    publication_date: datetime

    class Config:
        orm_mode = True