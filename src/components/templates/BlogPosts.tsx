import { getI18n } from '@/locales/server'
import { SanityDocument } from 'next-sanity'
import Link from 'next/link'

interface Props {
  posts: SanityDocument[]
}

export const BlogPosts = async ({ posts }: Props) => {
  const t = await getI18n()

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <Link href="/" className="hover:underline">
        ← {t('common.blog.backToHomePage')}
      </Link>

      <h1 className="text-4xl font-bold my-8">{t('common.blog.heading')}</h1>

      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/blog/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
