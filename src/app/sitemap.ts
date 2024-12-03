import type { MetadataRoute } from 'next'

 
const URL = process.env.NEXT_PUBLIC_URL

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${URL}/msib`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${URL}/company`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}