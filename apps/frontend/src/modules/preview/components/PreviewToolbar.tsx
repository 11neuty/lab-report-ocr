interface PreviewToolbarProps {
  zoom: number
  onZoomIn: () => void
  onZoomOut: () => void
  onRotateLeft: () => void
  onRotateRight: () => void
  onFitToScreen: () => void
}

export default function PreviewToolbar({
  zoom,
  onZoomIn,
  onZoomOut,
  onRotateLeft,
  onRotateRight,
  onFitToScreen,
}: PreviewToolbarProps) {
  return (
    <div className="preview-toolbar">
      <button
        className="preview-toolbar__btn"
        onClick={onZoomOut}
        disabled={zoom <= 0.25}
        title="Zoom Out"
      >
        −
      </button>
      <span className="preview-toolbar__label">{Math.round(zoom * 100)}%</span>
      <button
        className="preview-toolbar__btn"
        onClick={onZoomIn}
        disabled={zoom >= 5}
        title="Zoom In"
      >
        +
      </button>
      <span className="preview-toolbar__separator" />
      <button
        className="preview-toolbar__btn"
        onClick={onRotateLeft}
        title="Rotate Left"
      >
        Rotate Left
      </button>
      <button
        className="preview-toolbar__btn"
        onClick={onRotateRight}
        title="Rotate Right"
      >
        Rotate Right
      </button>
      <button
        className="preview-toolbar__btn preview-toolbar__btn--primary"
        onClick={onFitToScreen}
        title="Fit Screen"
      >
        Fit Screen
      </button>
    </div>
  )
}
