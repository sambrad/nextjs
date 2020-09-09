import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Projects() {
  return(
    <div className={styles.container}>
      <Head>
        <title>Sam Bradley</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <div style={{ display: "flex", flexDirection: "row", marginBottom: 20}}>
          <h1 className={styles.title}>My Projects</h1>
        </div>
        <p className={styles.description}>
          Below are some projects I have worked on.
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/sambrad"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find me on: {' '}
          <img src="/github.png" alt="GitHub Logo" className={styles.logo} />
        </a>
        <a
          href="https://www.linkedin.com/in/sam-bradley24/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.png" alt="LinkedIn Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
