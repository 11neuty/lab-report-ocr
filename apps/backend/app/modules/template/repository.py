from pathlib import Path

from app.modules.template.exceptions import (
    InvalidTemplateSchemaError,
    TemplateNotFoundError,
)
from app.modules.template.loader import TemplateLoader
from app.modules.template.schemas import Template


class TemplateRepository:
    def __init__(
        self,
        templates_dir: Path,
        loader: TemplateLoader | None = None,
    ) -> None:
        self._templates_dir = templates_dir
        self._loader = loader or TemplateLoader()
        self._cache: dict[str, tuple[Template, float]] = {}

    def get(self, name: str) -> Template:
        path = self._resolve_path(name)

        if not path.exists():
            raise TemplateNotFoundError(f'Template not found: {name}')

        cached = self._cache.get(name)
        current_mtime = path.stat().st_mtime

        if cached is not None and cached[1] == current_mtime:
            return cached[0]

        raw = self._loader.load(path)
        template = self._validate(raw)

        self._cache[name] = (template, current_mtime)
        return template

    def _resolve_path(self, name: str) -> Path:
        return (self._templates_dir / name).with_suffix('.json')

    def _validate(self, raw: dict) -> Template:
        try:
            return Template.model_validate(raw)
        except Exception as exc:
            raise InvalidTemplateSchemaError(
                f'Invalid template schema: {exc}',
            ) from exc
