import { useState, useEffect, useCallback } from 'react'
import type { UploadResult } from '@/modules/upload/types'
import { buildPreviewUrl, checkFileExists } from '@/modules/preview/services/preview'

interface UsePreviewOptions {
  result?: UploadResult | null
}

export function usePreview({ result }: UsePreviewOptions) {
  const [loading, setLoading] = useState(!!result)
  const [error, setError] = useState<string | null>(null)
  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [fitMode, setFitMode] = useState<'none' | 'fit-screen'>('fit-screen')

  const previewUrl = result ? buildPreviewUrl(result.upload_id) : null
  const isImage = result?.mime_type?.startsWith('image/') ?? false
  const isPdf = result?.mime_type === 'application/pdf'
  const hasDocument = !!result

  useEffect(() => {
    if (!result) return

    let cancelled = false

    checkFileExists(result.upload_id).then((exists) => {
      if (cancelled) return
      if (!exists) {
        setError('Failed to load the document preview')
      }
    }).catch(() => {
      if (cancelled) return
      setError('Failed to load the document preview')
    }).finally(() => {
      if (!cancelled) setLoading(false)
    })

    return () => { cancelled = true }
  }, [result])

  const zoomIn = useCallback(() => {
    setFitMode('none')
    setZoom(prev => Math.min(prev + 0.25, 5))
  }, [])

  const zoomOut = useCallback(() => {
    setFitMode('none')
    setZoom(prev => Math.max(prev - 0.25, 0.25))
  }, [])

  const rotateLeft = useCallback(() => {
    setFitMode('none')
    setRotation(prev => (prev - 90 + 360) % 360)
  }, [])

  const rotateRight = useCallback(() => {
    setFitMode('none')
    setRotation(prev => (prev + 90) % 360)
  }, [])

  const fitToScreen = useCallback(() => {
    setZoom(1)
    setRotation(0)
    setFitMode('fit-screen')
  }, [])

  const handleError = useCallback((msg: string) => {
    setError(msg)
  }, [])

  const reset = useCallback(() => {
    setZoom(1)
    setRotation(0)
    setFitMode('fit-screen')
    setError(null)
  }, [])

  return {
    previewUrl,
    isImage,
    isPdf,
    hasDocument,
    loading,
    error,
    handleError,
    reset,
    fileName: result?.file_name ?? null,
    zoom,
    rotation,
    fitMode,
    zoomIn,
    zoomOut,
    rotateLeft,
    rotateRight,
    fitToScreen,
  }
}
