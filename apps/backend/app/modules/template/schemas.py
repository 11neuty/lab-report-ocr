from datetime import datetime
from enum import StrEnum

from pydantic import BaseModel, Field


class FieldType(StrEnum):
    text = 'text'
    number = 'number'
    date = 'date'
    checkbox = 'checkbox'


class OcrRegion(BaseModel):
    x: float
    y: float
    width: float
    height: float


class TemplateField(BaseModel):
    id: str
    type: FieldType
    required: bool = False
    confidence_threshold: float = Field(default=0.5, ge=0.0, le=1.0)
    ocr_region: OcrRegion
    sheet: str
    cell: str


class TemplateMetadata(BaseModel):
    template: str
    version: str
    description: str | None = None
    author: str | None = None
    created_at: datetime


class Template(TemplateMetadata):
    fields: list[TemplateField]
