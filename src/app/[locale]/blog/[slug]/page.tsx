import { BlogPost } from '@/components/organisms/BlogPost'
import { client } from '@/sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { setStaticParamsLocale } from 'next-international/server'
import { type SanityDocument } from 'next-sanity'

const ALL_POSTS_QUERY = '*[_type == "post" && defined(slug.current)]'

const POST_QUERY =
  '*[_type == "post" && slug.current == $slug && language == $locale][0]'

const { projectId, dataset } = client.config()

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null

export const generateStaticParams = async () => {
  const posts = await client.fetch<SanityDocument[]>(ALL_POSTS_QUERY)

  return posts.map((post) => ({
    locale: post.language,
    slug: post.slug.current
  }))
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setStaticParamsLocale(locale)

  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug, locale })
  const posts = await client.fetch<SanityDocument[]>(ALL_POSTS_QUERY)
  console.log(posts)
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null

  return <BlogPost postImageUrl={postImageUrl} post={post} />
}
