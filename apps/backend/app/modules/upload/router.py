from fastapi import APIRouter, UploadFile
from fastapi.responses import FileResponse, JSONResponse

from app.modules.storage.service import storage_service
from app.modules.upload.schemas import UploadResponse
from app.modules.upload.service import save_upload

router = APIRouter(prefix='/upload', tags=['upload'])


@router.post('', response_model=UploadResponse)
async def upload_file(file: UploadFile) -> UploadResponse:
    result = await save_upload(file)

    return UploadResponse(
        upload_id=result.upload_id,
        file_name=result.original_filename,
        file_size=result.file_size,
        mime_type=result.mime_type,
    )


@router.get('/{upload_id}/file')
async def get_upload_file(upload_id: str):
    path = storage_service.get_file(upload_id)
    return FileResponse(str(path))


@router.head('/{upload_id}/file')
async def head_upload_file(upload_id: str):
    path = storage_service.get_file(upload_id)
    return FileResponse(str(path), headers={
        'Content-Length': str(path.stat().st_size),
    })


@router.delete('/{upload_id}')
async def delete_upload(upload_id: str):
    storage_service.delete_upload(upload_id)
    return JSONResponse(content={'success': True})
