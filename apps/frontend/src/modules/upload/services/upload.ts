import http from '@/shared/api/http'
import type { UploadResult } from '@/modules/upload/types'

export async function uploadDocument(file: File): Promise<UploadResult> {
  const form = new FormData()
  form.append('file', file)
  const { data: body } = await http.post<{ data: UploadResult }>('/upload', form)
  return body.data
}
