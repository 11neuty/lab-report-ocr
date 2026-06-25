import { useCallback, useEffect, useState } from 'react'
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

  const fetch = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await getHealth()
      setData(result)
    } catch {
      setError('Unable to reach backend service.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    let cancelled = false
    getHealth()
      .then((result) => {
        if (!cancelled) setData(result)
      })
      .catch(() => {
        if (!cancelled) setError('Unable to reach backend service.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return { loading, data, error, refresh: fetch }
}
