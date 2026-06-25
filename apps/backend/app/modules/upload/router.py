from fastapi import APIRouter, UploadFile
from fastapi.responses import FileResponse
from starlette import status

from app.modules.storage.service import storage_service
from app.modules.upload.schemas import UploadResponse
from app.modules.upload.service import save_upload
from app.shared.responses import ApiResponse

router = APIRouter(prefix='/upload', tags=['upload'])


@router.post(
    '',
    response_model=ApiResponse[UploadResponse],
    summary='Upload File',
    description=(
        'Upload a lab report file. The file is stored and a unique'
        ' upload ID is returned for subsequent retrieval or deletion.'
    ),
    status_code=status.HTTP_200_OK,
)
async def upload_file(file: UploadFile) -> ApiResponse[UploadResponse]:
    result = await save_upload(file)

    return ApiResponse(
        data=UploadResponse(
            upload_id=result.upload_id,
            file_name=result.original_filename,
            file_size=result.file_size,
            mime_type=result.mime_type,
        ),
        message='File uploaded successfully',
    )


@router.get(
    '/{upload_id}/file',
    response_class=FileResponse,
    summary='Retrieve Uploaded File',
    description=(
        'Download the uploaded file by its upload ID. Returns the raw file content.'
    ),
    response_description='The raw file content with appropriate Content-Type header.',
    responses={
        status.HTTP_404_NOT_FOUND: {
            'description': 'Upload or file not found',
            'model': ApiResponse[None],
        },
    },
)
async def get_upload_file(upload_id: str):
    path = storage_service.get_file(upload_id)
    return FileResponse(str(path))


@router.head(
    '/{upload_id}/file',
    response_class=FileResponse,
    summary='Get File Metadata',
    description=(
        'Retrieve metadata (Content-Length) for an uploaded file'
        ' without downloading it.'
    ),
    response_description='File headers returned. No response body.',
    responses={
        status.HTTP_404_NOT_FOUND: {
            'description': 'Upload or file not found',
            'model': ApiResponse[None],
        },
    },
)
async def head_upload_file(upload_id: str):
    path = storage_service.get_file(upload_id)
    return FileResponse(
        str(path),
        headers={
            'Content-Length': str(path.stat().st_size),
        },
    )


@router.delete(
    '/{upload_id}',
    response_model=ApiResponse[None],
    summary='Delete Upload',
    description=('Delete an uploaded file and its associated data by upload ID.'),
    response_description='Upload deleted successfully.',
    status_code=status.HTTP_200_OK,
    responses={
        status.HTTP_404_NOT_FOUND: {
            'description': 'Upload not found',
            'model': ApiResponse[None],
        },
    },
)
async def delete_upload(upload_id: str) -> ApiResponse[None]:
    storage_service.delete_upload(upload_id)
    return ApiResponse(
        success=True,
        message='Upload deleted successfully',
        data=None,
    )
