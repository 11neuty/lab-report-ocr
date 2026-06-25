from pathlib import Path

from fastapi import APIRouter, UploadFile
from fastapi.responses import FileResponse

from app.core.config import settings
from app.modules.upload.schemas import UploadResponse
from app.modules.upload.service import save_upload

router = APIRouter(prefix='/upload', tags=['upload'])


@router.post('', response_model=UploadResponse)
async def upload_file(file: UploadFile) -> UploadResponse:
    dest, upload_id, file_size, mime_type = await save_upload(file)

    return UploadResponse(
        upload_id=upload_id,
        file_name=dest.name,
        file_size=file_size,
        mime_type=mime_type,
    )


def _resolve_upload_file(upload_id: str) -> Path:
    upload_dir = Path(settings.upload_path) / upload_id
    if not upload_dir.exists():
        from app.core.exceptions import NotFoundError
        raise NotFoundError('Upload not found')

    files = list(upload_dir.iterdir())
    if not files:
        from app.core.exceptions import NotFoundError
        raise NotFoundError('File not found')

    return files[0]


@router.get('/{upload_id}/file')
async def get_upload_file(upload_id: str):
    return FileResponse(str(_resolve_upload_file(upload_id)))


@router.head('/{upload_id}/file')
async def head_upload_file(upload_id: str):
    path = _resolve_upload_file(upload_id)
    return FileResponse(str(path), headers={
        'Content-Length': str(path.stat().st_size),
    })
