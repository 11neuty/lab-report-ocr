export interface Job {
  id: string
  status: 'pending' | 'processing' | 'completed' | 'failed'
  createdAt: string
  updatedAt: string
}

export interface Template {
  id: string
  name: string
  fields: TemplateField[]
}

export interface TemplateField {
  key: string
  label: string
  type: 'text' | 'number' | 'date'
}

export interface OcrResult {
  jobId: string
  fields: Record<string, string>
  confidence: number
}
