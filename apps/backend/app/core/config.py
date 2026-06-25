from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = 'lab-report-ocr'
    app_version: str = '0.1.0'
    debug: bool = False

    cors_origins: list[str] = ['*']
    cors_allow_credentials: bool = True
    cors_allow_methods: list[str] = ['*']
    cors_allow_headers: list[str] = ['*']

    upload_path: str = './uploads'
    output_path: str = './output'
    templates_path: str = './templates'

    model_config = {'env_prefix': ''}


settings = Settings()
