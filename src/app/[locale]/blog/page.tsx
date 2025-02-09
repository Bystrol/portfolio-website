import { type SanityDocument } from 'next-sanity'
import { client } from '@/sanity/client'
import { BlogPosts } from '@/components/templates/BlogPosts'
import { getCurrentLocale } from '@/locales/server'

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current) && language == $locale
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`

export default async function BlogPage() {
  const locale = await getCurrentLocale()

  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, { locale })

  return <BlogPosts posts={posts} />
}
