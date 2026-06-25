import uuid
from pathlib import Path


def generate_unique_filename(original: str) -> str:
    ext = Path(original).suffix or ''
    unique = uuid.uuid4().hex
    return f'{unique}{ext}'


def ensure_dir(path: str | Path) -> Path:
    p = Path(path)
    p.mkdir(parents=True, exist_ok=True)
    return p
