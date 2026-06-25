import uuid
from pathlib import Path

from fastapi import UploadFile

from app.core.config import settings
from app.core.exceptions import NotFoundError
from app.modules.storage.schemas import SaveFileResult
from app.modules.storage.utils import ensure_dir, generate_unique_filename


class StorageService:
    def __init__(self, upload_path: Path) -> None:
        self.upload_path = upload_path

    async def save_file(self, file: UploadFile) -> SaveFileResult:
        upload_id = uuid.uuid4().hex
        upload_dir = ensure_dir(self.upload_path / upload_id)

        stored_filename = generate_unique_filename(file.filename or 'unnamed')
        dest = upload_dir / stored_filename

        content = await file.read()
        dest.write_bytes(content)

        mime = file.content_type or 'application/octet-stream'

        return SaveFileResult(
            upload_id=upload_id,
            stored_filename=stored_filename,
            original_filename=file.filename or 'unnamed',
            file_size=len(content),
            mime_type=mime,
            absolute_path=str(dest.resolve()),
            relative_path=str(dest.relative_to(self.upload_path)),
        )

    def get_file(self, upload_id: str) -> Path:
        upload_dir = self.upload_path / upload_id
        if not upload_dir.exists():
            raise NotFoundError('Upload not found')

        files = list(upload_dir.iterdir())
        if not files:
            raise NotFoundError('File not found')

        return files[0]

    def delete_upload(self, upload_id: str) -> None:
        import shutil

        upload_dir = self.upload_path / upload_id
        if not upload_dir.exists():
            raise NotFoundError('Upload not found')

        shutil.rmtree(str(upload_dir))


storage_service = StorageService(upload_path=Path(settings.upload_path))
