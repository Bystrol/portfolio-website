import { type SanityDocument } from 'next-sanity'

import { client } from '@/sanity/client'
import { BlogPosts } from '@/components/organisms/BlogPosts'
import { Language } from '@/hooks/useLanguageSwitch'

interface Props {
  params: Promise<{ locale: Language }>
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params

  const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current) && language == $locale
  ]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`

  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, { locale })

  return <BlogPosts posts={posts} locale={locale} />
}
