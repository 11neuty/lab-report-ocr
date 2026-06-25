import { useLocation } from 'react-router-dom'
import type { UploadResult } from '@/modules/upload/types'
import { usePreview } from '@/modules/preview/hooks/usePreview'
import PreviewContainer from '@/modules/preview/components/PreviewContainer'
import PreviewToolbar from '@/modules/preview/components/PreviewToolbar'
import './PreviewPage.css'

export default function PreviewPage() {
  const location = useLocation()
  const result = (location.state as { uploadResult?: UploadResult } | null)?.uploadResult ?? null
  const {
    previewUrl,
    isImage,
    isPdf,
    hasDocument,
    fileName,
    loading,
    error,
    handleError,
    zoom,
    rotation,
    fitMode,
    zoomIn,
    zoomOut,
    rotateLeft,
    rotateRight,
    fitToScreen,
  } = usePreview({ result })

  const showToolbar = hasDocument && !loading && !error

  return (
    <div className="preview-page">
      <h1 className="preview-page__title">Document Preview</h1>
      {fileName && <p className="preview-page__file-name">{fileName}</p>}
      {showToolbar && (
        <PreviewToolbar
          zoom={zoom}
          onZoomIn={zoomIn}
          onZoomOut={zoomOut}
          onRotateLeft={rotateLeft}
          onRotateRight={rotateRight}
          onFitToScreen={fitToScreen}
        />
      )}
      <PreviewContainer
        previewUrl={previewUrl}
        isImage={isImage}
        isPdf={isPdf}
        hasDocument={hasDocument}
        fileName={fileName}
        loading={loading}
        error={error}
        onError={handleError}
        zoom={zoom}
        rotation={rotation}
        fitMode={fitMode}
      />
    </div>
  )
}
