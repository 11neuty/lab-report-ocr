# API Reference

## Overview

<!-- Base URL, authentication, content types. -->

## Endpoints

### Health

```
GET /health
```

<!-- Service health check. -->

### Upload

```
POST /api/v1/upload
```

<!-- Upload a lab form image for OCR processing. -->

#### Request

<!-- Content-Type, body format, file constraints. -->

#### Response

```json
{
  "job_id": "uuid",
  "status": "processing"
}
```

### Job Status

```
GET /api/v1/jobs/{job_id}
```

<!-- Retrieve the status and results of an OCR job. -->

### Results

```
GET /api/v1/results/{job_id}
```

<!-- Download the generated CSV output. -->

### Templates

```
GET /api/v1/templates
POST /api/v1/templates
GET /api/v1/templates/{template_id}
DELETE /api/v1/templates/{template_id}
```

<!-- Template CRUD operations. -->

## Error Codes

| Code | Description |
| ---- | ----------- |
|      |             |

## Rate Limiting

<!-- Rate limit policies. -->
