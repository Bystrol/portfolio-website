import { type SanityDocument } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from '@/sanity/client'
import { BlogPost } from '@/components/organisms/BlogPost'
import { setStaticParamsLocale } from 'next-international/server'

const POST_QUERY = `*[_type == "post" && slug.current == $slug && language == $locale][0]`

const { projectId, dataset } = client.config()

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setStaticParamsLocale(locale)

  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug, locale })

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null

  return <BlogPost postImageUrl={postImageUrl} post={post} />
}
