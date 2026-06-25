import http from '@/shared/api/http'

export interface HealthResponse {
  status: string
  service: string
  version: string
}

export async function getHealth(): Promise<HealthResponse> {
  const { data } = await http.get<HealthResponse>('/health')
  return data
}
