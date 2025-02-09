import useLanguageSwitch, { Language } from '@/hooks/useLanguageSwitch'
import { PortableText, SanityDocument } from 'next-sanity'
import Link from 'next/link'
import translations from '@/utils/data/translations.json'

interface Props {
  postImageUrl: string | null | undefined
  post: SanityDocument
  locale: Language
}

export const BlogPost = ({ postImageUrl, post, locale }: Props) => {
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href={`/${locale}/blog`} className="hover:underline">
        ← {translations[locale].blog.backToPosts}
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
        <p>{`${translations[locale].blog.published}: ${new Date(
          post.publishedAt
        ).toLocaleDateString()}`}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  )
}
