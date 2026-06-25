import uuid
from pathlib import Path

from fastapi import UploadFile

from app.core.config import settings
from app.shared.utils import ensure_dir


async def save_upload(file: UploadFile) -> tuple[Path, str, int, str]:
    upload_id = uuid.uuid4().hex
    upload_dir = ensure_dir(Path(settings.upload_path) / upload_id)

    dest = upload_dir / file.filename or 'unnamed'

    content = await file.read()
    dest.write_bytes(content)

    mime = file.content_type or 'application/octet-stream'
    return dest, upload_id, len(content), mime
