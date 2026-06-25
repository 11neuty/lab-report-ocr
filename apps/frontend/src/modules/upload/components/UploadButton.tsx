interface UploadButtonProps {
  disabled: boolean
  loading: boolean
  onClick: () => void
}

export default function UploadButton({ disabled, loading, onClick }: UploadButtonProps) {
  return (
    <button
      className="upload-btn"
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? 'Uploading…' : 'Upload'}
    </button>
  )
}
