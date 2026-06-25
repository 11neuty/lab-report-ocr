from fastapi import APIRouter

from app.modules.health.schemas import HealthResponse
from app.modules.health.service import get_health

router = APIRouter(tags=['health'])


@router.get('/health', response_model=HealthResponse)
def health() -> HealthResponse:
    return get_health()
