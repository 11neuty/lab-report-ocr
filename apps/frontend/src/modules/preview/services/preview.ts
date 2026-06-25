import http from '@/shared/api/http'

export function buildPreviewUrl(uploadId: string): string {
  return `/upload/${uploadId}/file`
}

export async function checkFileExists(uploadId: string): Promise<boolean> {
  try {
    const response = await http.head(`/upload/${uploadId}/file`)
    return response.status === 200
  } catch {
    return false
  }
}
