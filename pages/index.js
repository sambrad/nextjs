import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sam Bradley</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/projects">
          <a>Project</a>
        </Link>
        <img src="/Headshot.png" style={{ width: '14rem',
                                          height: '14rem',
                                          border: "5px solid black",
                                          borderRadius: '50%',
                                          marginBottom: 10}} />

        <div style={{ display: "flex", flexDirection: "row", marginBottom: 20}}>
          <h1 className={styles.title}>Hello! My name is</h1>
          <div name="gap" style={{width: 20}}></div>
          <h1 className={styles.nameGradient}>Sam Bradley</h1>
        </div>

        <p className={styles.description}>
          I am a Junior at Indiana University's Luddy School of Informatics & Computing
          <br/>
          Studying Computer Science and Finance
        </p>

        <div className={styles.grid}>
          <Link href="/projects">
            <a className={styles.card}>
              <h3>My Projects &rarr;</h3>
              <p>View some of the work I have done!</p>
            </a>
          </Link>

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
