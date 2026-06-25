# API Reference

## Overview

Base URL: `http://localhost:8000`

All requests and responses use `application/json`, except for file upload (`multipart/form-data`) and file download (binary).

## Endpoints

### Health

```
GET /health
```

Returns the current health status of the service, including service name and version.

#### Response `200 OK`

```json
{
  "success": true,
  "message": "Service is healthy",
  "data": {
    "status": "ok",
    "service": "lab-report-ocr",
    "version": "0.1.0"
  }
}
```

### Upload a File

```
POST /upload
```

Upload a lab report file. The file is stored and a unique upload ID is returned for subsequent retrieval or deletion.

#### Request

- Content-Type: `multipart/form-data`
- Body: single file field named `file`

#### Response `200 OK`

```json
{
  "success": true,
  "message": "File uploaded successfully",
  "data": {
    "upload_id": "abc123def456",
    "file_name": "lab_report.pdf",
    "file_size": 1048576,
    "mime_type": "application/pdf"
  }
}
```

### Retrieve Uploaded File

```
GET /upload/{upload_id}/file
```

Download the uploaded file by its upload ID. Returns the raw file content.

#### Response `200 OK`

Binary file content with appropriate `Content-Type` header.

#### Response `404 Not Found`

```json
{
  "success": false,
  "message": "Upload not found",
  "data": null
}
```

### Get File Metadata

```
HEAD /upload/{upload_id}/file
```

Retrieve metadata (`Content-Length`) for an uploaded file without downloading it.

#### Response `200 OK`

Headers only. No body.

#### Response `404 Not Found`

```json
{
  "success": false,
  "message": "Upload not found",
  "data": null
}
```

### Delete Upload

```
DELETE /upload/{upload_id}
```

Delete an uploaded file and its associated data by upload ID.

#### Response `200 OK`

```json
{
  "success": true,
  "message": "Upload deleted successfully",
  "data": null
}
```

#### Response `404 Not Found`

```json
{
  "success": false,
  "message": "Upload not found",
  "data": null
}
```

## Error Codes

| Status | Code         | Description                      |
| ------ | ------------ | -------------------------------- |
| 404    | NotFound     | Resource does not exist.         |
| 422    | Validation   | Request validation failed.       |
| 500    | Internal     | An unexpected server error occurred. |
