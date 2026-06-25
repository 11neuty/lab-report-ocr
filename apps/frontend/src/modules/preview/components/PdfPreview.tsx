interface PdfPreviewProps {
  src: string
  title: string
  zoom: number
  rotation: number
  fitMode: 'none' | 'fit-screen'
}

export default function PdfPreview({ src, title, zoom, rotation, fitMode }: PdfPreviewProps) {
  const isTransformed = fitMode === 'none' || zoom !== 1 || rotation !== 0

  return (
    <div className={`preview-content${isTransformed ? ' preview-content--transformed' : ''}`}>
      <div
        className="preview-content__pdf-wrapper"
        style={
          isTransformed
            ? { transform: `scale(${zoom}) rotate(${rotation}deg)` }
            : undefined
        }
      >
        <iframe
          className="preview-content__iframe"
          src={src}
          title={title}
        />
      </div>
    </div>
  )
}
