import Link from 'next/link'
import { client } from '../libs/client'
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' })
  console.log('data', data.contents)

  return {
    props: {
      blog: data.contents,
    },
  }
}

export default function Home({ blog }) {
  console.log('props', blog)
  return (
    <div>
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>
            <a href=''>{blog.title}</a>
          </Link>
        </li>
      ))}
    </div>
  )
}
