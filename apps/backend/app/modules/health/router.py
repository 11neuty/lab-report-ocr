from fastapi import APIRouter
from starlette import status

from app.modules.health.schemas import HealthResponse
from app.modules.health.service import get_health
from app.shared.responses import ApiResponse

router = APIRouter(tags=['health'])


@router.get(
    '/health',
    response_model=ApiResponse[HealthResponse],
    summary='Health Check',
    description=(
        'Returns the current health status of the service,'
        ' including service name and version.'
    ),
    status_code=status.HTTP_200_OK,
)
def health() -> ApiResponse[HealthResponse]:
    result = get_health()
    return ApiResponse(
        data=result,
        message='Service is healthy',
    )
