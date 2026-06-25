import ImagePreview from '@/modules/preview/components/ImagePreview'
import PdfPreview from '@/modules/preview/components/PdfPreview'
import EmptyState from '@/modules/preview/components/EmptyState'
import ErrorState from '@/modules/preview/components/ErrorState'

interface PreviewContainerProps {
  previewUrl: string | null
  isImage: boolean
  isPdf: boolean
  hasDocument: boolean
  fileName: string | null
  loading: boolean
  error: string | null
  onError: (msg: string) => void
  zoom: number
  rotation: number
  fitMode: 'none' | 'fit-screen'
}

export default function PreviewContainer({
  previewUrl,
  isImage,
  isPdf,
  hasDocument,
  fileName,
  loading,
  error,
  onError,
  zoom,
  rotation,
  fitMode,
}: PreviewContainerProps) {
  if (!hasDocument || !previewUrl) {
    return <EmptyState />
  }

  if (loading) {
    return <p className="preview-status">Loading preview…</p>
  }

  if (error) {
    return <ErrorState message={error} />
  }

  if (isImage) {
    return (
      <ImagePreview
        src={previewUrl}
        alt={fileName ?? 'Preview'}
        onError={onError}
        zoom={zoom}
        rotation={rotation}
        fitMode={fitMode}
      />
    )
  }

  if (isPdf) {
    return (
      <PdfPreview
        src={previewUrl}
        title={fileName ?? 'Preview'}
        zoom={zoom}
        rotation={rotation}
        fitMode={fitMode}
      />
    )
  }

  return <ErrorState message="Unsupported file type" />
}
