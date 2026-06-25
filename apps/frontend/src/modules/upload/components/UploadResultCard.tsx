import type { UploadResult } from '@/modules/upload/types'

interface UploadResultCardProps {
  result: UploadResult
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default function UploadResultCard({ result }: UploadResultCardProps) {
  return (
    <div className="result-card">
      <h3 className="result-card__title">Upload Successful</h3>
      <dl className="result-card__details">
        <dt>Upload ID</dt>
        <dd>{result.upload_id}</dd>
        <dt>File Name</dt>
        <dd>{result.file_name}</dd>
        <dt>File Size</dt>
        <dd>{formatSize(result.file_size)}</dd>
        <dt>MIME Type</dt>
        <dd>{result.mime_type}</dd>
      </dl>
    </div>
  )
}
