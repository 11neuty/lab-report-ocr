from pathlib import Path

from app.core.config import settings
from app.modules.template.repository import TemplateRepository
from app.modules.template.schemas import Template


class TemplateService:
    def __init__(self, repository: TemplateRepository | None = None) -> None:
        templates_dir = Path(settings.templates_path)
        self._repository = repository or TemplateRepository(templates_dir)

    def load(self, name: str) -> Template:
        return self._repository.get(name)


template_service = TemplateService()
