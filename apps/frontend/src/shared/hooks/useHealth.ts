import { useCallback, useEffect, useRef, useState } from 'react'
import { getHealth, type HealthResponse } from '@/shared/api/health'

interface UseHealthResult {
  loading: boolean
  data: HealthResponse | null
  error: string | null
  refresh: () => void
}

export function useHealth(): UseHealthResult {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<HealthResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const cancelledRef = useRef(false)

  const fetch = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await getHealth()
      if (!cancelledRef.current) {
        setData(result)
      }
    } catch {
      if (!cancelledRef.current) {
        setData(null)
        setError('Unable to reach backend service.')
      }
    } finally {
      if (!cancelledRef.current) {
        setLoading(false)
      }
    }
  }, [])

  useEffect(() => {
    cancelledRef.current = false
    fetch()
    return () => {
      cancelledRef.current = true
    }
  }, [fetch])

  return { loading, data, error, refresh: fetch }
}
