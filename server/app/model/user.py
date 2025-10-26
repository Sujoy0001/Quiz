from pydantic import BaseModel, EmailStr

class User(BaseModel):
    id: int
    username: str
    email: EmailStr
    roll: str
    hashed_password: str

class user_register(BaseModel):
    username: str
    emial: EmailStr
    roll: str
    hashed_password: str

class user_login(BaseModel):
    username: str
    hashed_password: str