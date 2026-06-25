import { type DragEvent, useRef, useState } from 'react'

interface UploadDropzoneProps {
  onSelect: (file: File) => void
  selectedFile: File | null
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default function UploadDropzone({ onSelect, selectedFile }: UploadDropzoneProps) {
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) onSelect(file)
  }

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    setDragging(true)
  }

  const handleDragLeave = () => setDragging(false)

  const handleClick = () => inputRef.current?.click()

  const handleChange = () => {
    const file = inputRef.current?.files?.[0]
    if (file) onSelect(file)
  }

  return (
    <div
      className={`dropzone${dragging ? ' dropzone--dragging' : ''}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <input
        ref={inputRef}
        type="file"
        onChange={handleChange}
        hidden
      />
      {selectedFile ? (
        <div className="dropzone__info">
          <p className="dropzone__name">{selectedFile.name}</p>
          <p className="dropzone__size">{formatSize(selectedFile.size)}</p>
        </div>
      ) : (
        <p>Drag &amp; drop a file here, or click to browse</p>
      )}
    </div>
  )
}
