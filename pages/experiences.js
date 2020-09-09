import Head from 'next/head'
import style from '../styles/Home.module.css'
import Link from 'next/link'

export default function Experiences() {
  return(
    <div className={style.projectContainer}>
      <Head>
        <title>Sam Bradley-Experiences</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={style.header} id="navbar">
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

      <div className={style.projectTitle}>
        <h1 className={style.title}>My Experiences</h1>
        <p className={style.description}>
          All of my past (and upcoming) work experiences.
        </p>
      </div>


      <footer className={style.footer}>
        <a
          href="https://github.com/sambrad"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find me on: {' '}
          <img src="/github.png" alt="GitHub Logo" className={style.logo} />
        </a>
        <a
          href="https://www.linkedin.com/in/sam-bradley24/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.png" alt="LinkedIn Logo" className={style.logo} />
        </a>
      </footer>
    </div>
  )
}
