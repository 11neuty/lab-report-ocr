import http from '@/shared/api/http'
import type { UploadResult } from '@/modules/upload/types'

export async function uploadDocument(file: File): Promise<UploadResult> {
  const form = new FormData()
  form.append('file', file)
  const { data } = await http.post<UploadResult>('/upload', form)
  return data
}
