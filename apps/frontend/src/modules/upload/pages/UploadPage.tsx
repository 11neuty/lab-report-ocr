import UploadDropzone from '@/modules/upload/components/UploadDropzone'
import UploadButton from '@/modules/upload/components/UploadButton'
import UploadResultCard from '@/modules/upload/components/UploadResultCard'
import { useUpload } from '@/modules/upload/hooks/useUpload'
import './UploadPage.css'

export default function UploadPage() {
  const { selectedFile, setSelectedFile, loading, result, error, upload, reset } = useUpload()

  const handleSelect = (file: File) => {
    reset()
    setSelectedFile(file)
  }

  return (
    <div className="upload-page">
      <h1 className="upload-page__title">Upload Document</h1>
      <p className="upload-page__desc">
        Select a document to be processed by the OCR engine.
      </p>

      <UploadDropzone onSelect={handleSelect} selectedFile={selectedFile} />

      <div className="upload-page__actions">
        <UploadButton
          disabled={!selectedFile}
          loading={loading}
          onClick={upload}
        />
      </div>

      {loading && <p className="upload-page__loading">Uploading document…</p>}

      {error && <p className="upload-page__error">{error}</p>}

      {result && <UploadResultCard result={result} />}
    </div>
  )
}
