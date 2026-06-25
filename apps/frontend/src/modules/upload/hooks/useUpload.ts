import { useState } from 'react'
import { uploadDocument } from '@/modules/upload/services/upload'
import type { UploadResult } from '@/modules/upload/types'

interface UseUploadResult {
  selectedFile: File | null
  setSelectedFile: (file: File | null) => void
  loading: boolean
  result: UploadResult | null
  error: string | null
  upload: () => Promise<void>
  reset: () => void
}

export function useUpload(): UseUploadResult {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<UploadResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const upload = async () => {
    if (!selectedFile) return
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const res = await uploadDocument(selectedFile)
      setResult(res)
    } catch {
      setError('Upload failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setSelectedFile(null)
    setLoading(false)
    setResult(null)
    setError(null)
  }

  return { selectedFile, setSelectedFile, loading, result, error, upload, reset }
}
