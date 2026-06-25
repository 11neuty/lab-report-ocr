import http from '@/shared/api/http'

export interface HealthResponse {
  status: string
  service: string
  version: string
}

export async function getHealth(): Promise<HealthResponse> {
  const { data: body } = await http.get<{ data: HealthResponse }>('/health')
  return body.data
}
