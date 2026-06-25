from fastapi import Header


def get_user_agent(user_agent: str | None = Header(default=None)) -> str | None:
    return user_agent


# Placeholder for future dependencies:
# async def get_current_user(...) -> User: ...
# async def get_db_session(...) -> AsyncSession: ...
