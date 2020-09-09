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

      <div className={styles.mainHeader}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About Me</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>

      <main className={styles.main}>
        <img src="/headshot.jpg" style={{ width: '14rem',
                                          height: '14rem',
                                          border: "5px solid black",
                                          borderRadius: '50%',
                                          marginBottom: 10}} />

        <div style={{ display: "flex", flexDirection: "row", marginBottom: 20}}>
          <h1 className={styles.title}>Hello! My name is <span className={styles.nameGradient}>Sam Bradley</span></h1>
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

          <Link href="/experiences">
            <a className={styles.card}>
              <h3>Professional Experience &rarr;</h3>
              <p>My past work experiences.</p>
            </a>
          </Link>

          <Link href="/resume">
            <a className={styles.card}>
              <h3>Downloadable Resume &rarr;</h3>
              <p>Download my resume!</p>
            </a>
          </Link>

          <Link href="/cases">
            <a className={styles.card}>
              <h3>Case Competitons &rarr;</h3>
              <p>View the case competitions I have participated in!</p>
            </a>
          </Link>
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
