import http from '@/shared/api/http'

export function buildPreviewUrl(uploadId: string): string {
  const baseUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'
  return `${baseUrl}/upload/${uploadId}/file`
}

export async function checkFileExists(uploadId: string): Promise<boolean> {
  try {
    const response = await http.head(`/upload/${uploadId}/file`)
    return response.status === 200
  } catch {
    return false
  }
}
