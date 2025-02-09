import { getI18n } from '@/locales/server'
import { PortableText, SanityDocument } from 'next-sanity'
import Link from 'next/link'

interface Props {
  postImageUrl: string | null | undefined
  post: SanityDocument
}

export const BlogPost = async ({ postImageUrl, post }: Props) => {
  const t = await getI18n()

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/blog" className="hover:underline">
        ← {t('common.blog.backToPosts')}
      </Link>
      {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
        />
      )}
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="prose">
        <p>{`${t('common.blog.published')}: ${new Date(
          post.publishedAt
        ).toLocaleDateString()}`}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  )
}
