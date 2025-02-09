import { Language } from '@/hooks/useLanguageSwitch'
import { SanityDocument } from 'next-sanity'
import Link from 'next/link'
import translations from '@/utils/data/translations.json'

interface Props {
  posts: SanityDocument[]
  locale: Language
}

export const BlogPosts = ({ posts, locale }: Props) => {
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <Link href="/" className="hover:underline">
        ← {translations[locale].blog.backToHomePage}
      </Link>
      <h1 className="text-4xl font-bold my-8">
        {translations[locale].blog.heading}
      </h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/${locale}/blog/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
