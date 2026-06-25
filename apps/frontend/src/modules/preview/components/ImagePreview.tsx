interface ImagePreviewProps {
  src: string
  alt: string
  onError: (msg: string) => void
  zoom: number
  rotation: number
  fitMode: 'none' | 'fit-screen'
}

export default function ImagePreview({ src, alt, onError, zoom, rotation, fitMode }: ImagePreviewProps) {
  const isTransformed = fitMode === 'none' || zoom !== 1 || rotation !== 0

  return (
    <div className={`preview-content${isTransformed ? ' preview-content--transformed' : ''}`}>
      <img
        className="preview-content__image"
        src={src}
        alt={alt}
        style={
          isTransformed
            ? { transform: `scale(${zoom}) rotate(${rotation}deg)` }
            : undefined
        }
        onError={() => onError('Failed to load the image preview')}
      />
    </div>
  )
}
