from typing import Annotated
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

app = FastAPI()

# 1. Define the OAuth2 scheme and point it to the token generation endpoint
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# 2. Create the token endpoint (used by the Swagger login form)
@app.post("/token")
async def login(form_data: Annotated[OAuth2PasswordRequestForm, Depends()]):
    # In a real app, verify the password against a database here
    if form_data.username != "admin" or form_data.password != "secret":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password"
        )
    
    # Return a compliant OAuth2 token payload
    return {"access_token": form_data.username, "token_type": "bearer"}

# 3. Protect a route by requiring the token dependency
@app.get("/users/me")
async def read_users_me(token: Annotated[str, Depends(oauth2_scheme)]):
    # 'token' is extracted automatically from the "Authorization: Bearer <token>" header
    return {"current_user": token, "token_received": token}
