import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'lcsn4l26',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false
})
