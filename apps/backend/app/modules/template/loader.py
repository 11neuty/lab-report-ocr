import json
from pathlib import Path


class TemplateLoader:
    def load(self, path: Path) -> dict:
        if not path.exists():
            raise FileNotFoundError(f'Template file not found: {path}')

        raw = path.read_bytes()
        return json.loads(raw)
